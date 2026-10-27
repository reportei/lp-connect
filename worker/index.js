// Runs before the static assets so plain-http visits get one permanent redirect to https,
// instead of a second, unencrypted copy of every page.
// `wrangler dev` serves over http and rewrites https redirects back to http, so local hosts are left alone.
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"])

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.protocol === "http:" && !LOCAL_HOSTS.has(url.hostname)) {
      url.protocol = "https:"
      return Response.redirect(url.toString(), 301)
    }
    return env.ASSETS.fetch(request)
  },
}
