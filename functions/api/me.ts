import { authorizationFromRequest, logoutUrl, type IdentityEnv } from '../_lib/identity';
import { error, json } from '../_lib/http';

export const onRequestGet: PagesFunction<IdentityEnv> = async ({ request, env }) => {
  const authorization = await authorizationFromRequest(request, env);
  const canvasReturnTo = new URL('/canvas/', request.url).toString();
  if (authorization.kind === 'forbidden') {
    const loginReturnTo = new URL('/api/login', request.url).toString();
    return json({ error: 'not allowed', logoutUrl: logoutUrl(env, loginReturnTo) ?? '/api/login' }, 403);
  }
  if (authorization.kind !== 'authenticated') return error(401, 'not logged in');
  const { identity } = authorization;
  return json({ email: identity.email, logoutUrl: logoutUrl(env, canvasReturnTo) ?? '/canvas/' });
};
