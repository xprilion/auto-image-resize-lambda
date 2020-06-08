// Add any more global vars (like Request, Response) to the below list as they are used
/* global addEventListener Response */

addEventListener("fetch", e => {
  e.respondWith(handleRequest(e.request));
});

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
  console.log(request);
  let url = new URL(request.url);
  console.log(url);
  return new Response("hello world", {
    status: 200
  });
}
