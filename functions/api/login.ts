/**
 * The one path Cloudflare Access protects. Reaching it means the Google login
 * finished and the session cookie is set; all that is left is to go back to
 * the canvas.
 */
export const onRequestGet: PagesFunction = async ({ request }) => {
  return Response.redirect(new URL('/canvas/', request.url).toString(), 302);
};
