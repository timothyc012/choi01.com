import { readMealSessionCookie, verifySessionToken } from '../_lib/meal-auth.ts';

type MealEnv = {
  MEAL_PAGE_PASSWORD_HASH?: string;
  MEAL_PAGE_SESSION_SECRET?: string;
};

type GuardContext = {
  request: Request;
  env: MealEnv;
  next: () => Promise<Response> | Response;
};

export async function onRequest(context: GuardContext): Promise<Response> {
  const url = new URL(context.request.url);
  if (url.pathname === '/meal/login.html' || url.pathname === '/meal/login') {
    return secure(await context.next());
  }
  const secret = context.env.MEAL_PAGE_SESSION_SECRET;
  const token = readMealSessionCookie(context.request.headers.get('cookie'));
  if (!secret || !token || !(await verifySessionToken(token, secret))) {
    return secure(new Response(null, { status: 302, headers: { Location: '/meal/login.html' } }));
  }
  return secure(await context.next());
}

function secure(response: Response): Response {
  const result = new Response(response.body, response);
  result.headers.set('Cache-Control', 'private, no-store');
  result.headers.set('X-Content-Type-Options', 'nosniff');
  result.headers.set('X-Frame-Options', 'DENY');
  result.headers.set('Referrer-Policy', 'no-referrer');
  result.headers.set('Content-Security-Policy', "default-src 'self'; img-src 'self'; style-src 'self'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'");
  return result;
}
