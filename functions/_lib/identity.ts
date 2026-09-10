import { createRemoteJWKSet, jwtVerify } from 'jose';

export interface Identity {
  /** Verified, lower-cased email. Doubles as the board owner id. */
  readonly email: string;
}

export interface IdentityEnv {
  ACCESS_TEAM_DOMAIN?: string;
  ACCESS_AUD?: string;
  /** Exact Google-account emails allowed to use persistent boards, comma-separated. */
  ALLOWED_EMAILS?: string;
  /** Local development only: act as this user without Access. */
  DEV_USER_EMAIL?: string;
}

export type Authorization =
  | { readonly kind: 'authenticated'; readonly identity: Identity }
  | { readonly kind: 'unauthenticated' }
  | { readonly kind: 'forbidden' };

const jwksCache = new Map<string, ReturnType<typeof createRemoteJWKSet>>();

function jwksFor(teamDomain: string) {
  let jwks = jwksCache.get(teamDomain);
  if (!jwks) {
    jwks = createRemoteJWKSet(new URL(`https://${teamDomain}/cdn-cgi/access/certs`));
    jwksCache.set(teamDomain, jwks);
  }
  return jwks;
}

function readCookie(header: string | null, name: string): string | null {
  if (!header) return null;
  for (const part of header.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return rest.join('=');
  }
  return null;
}

function normalizedEmail(value: string | undefined): string | null {
  const email = value?.trim().toLowerCase() ?? '';
  return email.includes('@') ? email : null;
}

/** Parses exact addresses only; an empty production allowlist fails closed. */
export function isAllowedEmail(email: string, env: Pick<IdentityEnv, 'ACCESS_TEAM_DOMAIN' | 'ALLOWED_EMAILS'>): boolean {
  const normalized = normalizedEmail(email);
  if (!normalized) return false;
  const allowed = (env.ALLOWED_EMAILS ?? '')
    .split(/[;,\n]/)
    .map(value => normalizedEmail(value))
    .filter((value): value is string => value !== null);
  // Local `DEV_USER_EMAIL` remains useful before an Access application exists.
  // Once Access is configured, forgetting the allowlist denies every request
  // instead of accidentally granting the whole identity-provider population.
  return allowed.length > 0 ? allowed.includes(normalized) : !env.ACCESS_TEAM_DOMAIN;
}

/**
 * The Access JWT arrives as the `CF_Authorization` cookie on every request to
 * the site once the user has logged in through the protected `/api/login`
 * path. On that path itself Access also adds the `Cf-Access-Jwt-Assertion`
 * header. Either is verified against the team's public keys and the
 * application's AUD tag; header values are never trusted on their own.
 */
/**
 * Distinguishes a missing/invalid Access session from an account that passed
 * Access authentication but is not on this board's exact server allowlist.
 */
export async function authorizationFromRequest(request: Request, env: IdentityEnv): Promise<Authorization> {
  if (env.DEV_USER_EMAIL && !env.ACCESS_TEAM_DOMAIN) {
    const email = normalizedEmail(env.DEV_USER_EMAIL);
    if (!email) return { kind: 'unauthenticated' };
    return isAllowedEmail(email, env)
      ? { kind: 'authenticated', identity: { email } }
      : { kind: 'forbidden' };
  }
  const token = request.headers.get('Cf-Access-Jwt-Assertion')
    ?? readCookie(request.headers.get('Cookie'), 'CF_Authorization');
  if (!token || !env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD) return { kind: 'unauthenticated' };
  try {
    const { payload } = await jwtVerify(token, jwksFor(env.ACCESS_TEAM_DOMAIN), {
      issuer: `https://${env.ACCESS_TEAM_DOMAIN}`,
      audience: env.ACCESS_AUD,
    });
    const email = typeof payload.email === 'string' ? normalizedEmail(payload.email) : null;
    if (!email) return { kind: 'unauthenticated' };
    return isAllowedEmail(email, env)
      ? { kind: 'authenticated', identity: { email } }
      : { kind: 'forbidden' };
  } catch {
    return { kind: 'unauthenticated' };
  }
}

/** Compatibility helper for callers that only need the authenticated identity. */
export async function identityFromRequest(request: Request, env: IdentityEnv): Promise<Identity | null> {
  const authorization = await authorizationFromRequest(request, env);
  return authorization.kind === 'authenticated' ? authorization.identity : null;
}

export function logoutUrl(env: IdentityEnv, returnTo: string): string | null {
  if (!env.ACCESS_TEAM_DOMAIN) return null;
  return `https://${env.ACCESS_TEAM_DOMAIN}/cdn-cgi/access/logout?returnTo=${encodeURIComponent(returnTo)}`;
}
