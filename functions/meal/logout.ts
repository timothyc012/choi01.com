import { clearMealSessionCookie } from '../_lib/meal-auth.ts';

export function onRequestPost(): Response {
  return new Response(null, {
    status: 303,
    headers: {
      Location: '/meal/login.html',
      'Set-Cookie': clearMealSessionCookie(),
      'Cache-Control': 'private, no-store',
    },
  });
}
