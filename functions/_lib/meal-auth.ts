const PASSWORD_ALGORITHM = 'PBKDF2';
const HASH_ALGORITHM = 'SHA-256';
const SESSION_COOKIE = 'choi01_meal_session';
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const MAX_LOGIN_ATTEMPTS = 5;

type AttemptState = { count: number; windowStartedAt: number };

export async function createPasswordHash(
  password: string,
  salt: Uint8Array = crypto.getRandomValues(new Uint8Array(16)),
  iterations = 210_000,
): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    PASSWORD_ALGORITHM,
    false,
    ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: PASSWORD_ALGORITHM, hash: HASH_ALGORITHM, salt, iterations },
    key,
    256,
  );
  return `pbkdf2-sha256$${iterations}$${toHex(salt)}$${toHex(new Uint8Array(bits))}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [scheme, iterationText, saltHex, expectedHex] = stored.split('$');
  const iterations = Number.parseInt(iterationText ?? '', 10);
  if (
    scheme !== 'pbkdf2-sha256' ||
    !Number.isSafeInteger(iterations) ||
    iterations < 10_000 ||
    !isHex(saltHex) ||
    !isHex(expectedHex)
  ) {
    return false;
  }
  const calculated = await createPasswordHash(password, fromHex(saltHex), iterations);
  const actualHex = calculated.split('$')[3] ?? '';
  return timingSafeEqual(fromHex(actualHex), fromHex(expectedHex));
}

export async function issueSessionToken(
  secret: string,
  now: Date = new Date(),
  maxAgeSeconds = 12 * 60 * 60,
): Promise<string> {
  const payload = base64UrlEncode(
    new TextEncoder().encode(JSON.stringify({ exp: Math.floor(now.getTime() / 1000) + maxAgeSeconds })),
  );
  const signature = await sign(payload, secret);
  return `${payload}.${base64UrlEncode(signature)}`;
}

export async function verifySessionToken(
  token: string,
  secret: string,
  now: Date = new Date(),
): Promise<boolean> {
  const [payload, encodedSignature, extra] = token.split('.');
  if (!payload || !encodedSignature || extra !== undefined || !secret) return false;
  let signature: Uint8Array;
  let parsed: unknown;
  try {
    signature = base64UrlDecode(encodedSignature);
    parsed = JSON.parse(new TextDecoder().decode(base64UrlDecode(payload)));
  } catch {
    return false;
  }
  const expected = await sign(payload, secret);
  if (!timingSafeEqual(signature, expected)) return false;
  if (!isExpiryPayload(parsed)) return false;
  return parsed.exp >= Math.floor(now.getTime() / 1000);
}

export function mealSessionCookie(token: string, maxAgeSeconds: number): string {
  return [
    `${SESSION_COOKIE}=${token}`,
    'Path=/meal',
    `Max-Age=${maxAgeSeconds}`,
    'HttpOnly',
    'Secure',
    'SameSite=Strict',
  ].join('; ');
}

export function clearMealSessionCookie(): string {
  return `${SESSION_COOKIE}=; Path=/meal; Max-Age=0; HttpOnly; Secure; SameSite=Strict`;
}

export function readMealSessionCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  for (const item of cookieHeader.split(';')) {
    const [name, ...value] = item.trim().split('=');
    if (name === SESSION_COOKIE) return value.join('=') || null;
  }
  return null;
}

export function loginAttemptAllowed(
  attempts: Map<string, AttemptState>,
  clientKey: string,
  nowMs = Date.now(),
): boolean {
  const current = attempts.get(clientKey);
  if (!current || nowMs - current.windowStartedAt > LOGIN_WINDOW_MS) {
    attempts.set(clientKey, { count: 1, windowStartedAt: nowMs });
    return true;
  }
  if (current.count >= MAX_LOGIN_ATTEMPTS) return false;
  current.count += 1;
  return true;
}

async function sign(payload: string, secret: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: HASH_ALGORITHM },
    false,
    ['sign'],
  );
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload)));
}

function isExpiryPayload(value: unknown): value is { exp: number } {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as { exp?: unknown }).exp === 'number' &&
    Number.isSafeInteger((value as { exp: number }).exp)
  );
}

function timingSafeEqual(left: Uint8Array, right: Uint8Array): boolean {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left[index] ^ right[index];
  }
  return mismatch === 0;
}

function toHex(value: Uint8Array): string {
  return Array.from(value, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function fromHex(value: string): Uint8Array {
  const result = new Uint8Array(value.length / 2);
  for (let index = 0; index < value.length; index += 2) {
    result[index / 2] = Number.parseInt(value.slice(index, index + 2), 16);
  }
  return result;
}

function isHex(value: string | undefined): value is string {
  return typeof value === 'string' && value.length > 0 && value.length % 2 === 0 && /^[0-9a-f]+$/.test(value);
}

function base64UrlEncode(value: Uint8Array): string {
  let binary = '';
  for (const byte of value) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll('+', '-').replaceAll('/', '_').replace(/=+$/, '');
}

function base64UrlDecode(value: string): Uint8Array {
  const padded = value.replaceAll('-', '+').replaceAll('_', '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(padded);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}
