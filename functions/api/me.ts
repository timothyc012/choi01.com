import { identityFromRequest, logoutUrl, type IdentityEnv } from '../_lib/identity';
import { error, json } from '../_lib/http';

export const onRequestGet: PagesFunction<IdentityEnv> = async ({ request, env }) => {
  const identity = await identityFromRequest(request, env);
  if (!identity) return error(401, 'not logged in');
  const returnTo = new URL('/canvas/', request.url).toString();
  return json({ email: identity.email, logoutUrl: logoutUrl(env, returnTo) ?? '/canvas/' });
};
