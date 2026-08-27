import {
  issueSessionToken,
  loginAttemptAllowed,
  mealSessionCookie,
  verifyPassword,
} from '../_lib/meal-auth.ts';

type MealEnv = {
  MEAL_PAGE_PASSWORD_HASH?: string;
  MEAL_PAGE_SESSION_SECRET?: string;
};

type LoginContext = { request: Request; env: MealEnv };
type AttemptState = { count: number; windowStartedAt: number };

const attempts = new Map<string, AttemptState>();
const SESSION_SECONDS = 12 * 60 * 60;

export async function onRequestPost(context: LoginContext): Promise<Response> {
  const clientKey = context.request.headers.get('cf-connecting-ip') ?? 'unknown';
  if (!loginAttemptAllowed(attempts, clientKey)) {
    return response('잠시 후 다시 시도해 주세요.', 429);
  }
  const passwordHash = context.env.MEAL_PAGE_PASSWORD_HASH;
  const sessionSecret = context.env.MEAL_PAGE_SESSION_SECRET;
  if (!passwordHash || !sessionSecret) {
    return response('로그인을 사용할 수 없습니다.', 503);
  }
  let password = '';
  try {
    const form = await context.request.formData();
    const raw = form.get('password');
    password = typeof raw === 'string' ? raw : '';
  } catch {
    return response('로그인 요청을 확인할 수 없습니다.', 400);
  }
  if (!password || password.length > 200 || !(await verifyPassword(password, passwordHash))) {
    return response('비밀번호를 확인해 주세요.', 401);
  }
  const token = await issueSessionToken(sessionSecret, new Date(), SESSION_SECONDS);
  return new Response(null, {
    status: 303,
    headers: {
      Location: '/meal/',
      'Set-Cookie': mealSessionCookie(token, SESSION_SECONDS),
      'Cache-Control': 'private, no-store',
    },
  });
}

function response(message: string, status: number): Response {
  return new Response(message, {
    status,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
