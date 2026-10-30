// The LP lives at reportei.com/connect. Cloudflare routes reportei.com/connect* and reportei.com/connect/*
// to this Worker (set once in the dashboard/API, not in wrangler.toml, so the deploy token needs no zone access),
// and lp.connect.reportei.com stays attached as its old address, now a permanent redirect.
const BASE = "/connect"
const PUBLIC_ORIGIN = "https://reportei.com"
const OLD_HOST = "lp.connect.reportei.com"
// `wrangler dev` serves over http and rewrites https redirects back to http, so local hosts skip the https step.
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1"])

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const local = LOCAL_HOSTS.has(url.hostname)

    if (url.hostname === OLD_HOST) {
      const path = url.pathname === "/" ? "" : url.pathname
      return Response.redirect(`${PUBLIC_ORIGIN}${BASE}${path}${url.search}`, 301)
    }

    if (url.protocol === "http:" && !local) {
      url.protocol = "https:"
      return Response.redirect(url.toString(), 301)
    }

    // "/connect/" serves the same page as "/connect": keep a single address for the home.
    if (url.pathname === `${BASE}/`) {
      return Response.redirect(`${url.origin}${BASE}${url.search}`, 301)
    }

    if (url.pathname !== BASE && !url.pathname.startsWith(`${BASE}/`)) {
      // The route is reportei.com/connect* (an exact /connect pattern misses /connect?utm=...), so it also
      // catches paths like /connections. Those belong to WordPress: send them to the origin untouched.
      return local ? Response.redirect(`${url.origin}${BASE}`, 302) : fetch(request)
    }

    const assetUrl = new URL(url)
    assetUrl.pathname = url.pathname.slice(BASE.length) || "/"
    const response = await env.ASSETS.fetch(new Request(assetUrl, request))

    // The asset handler redirects /page.html and trailing slashes using paths without the prefix.
    const location = response.headers.get("Location")
    if (location && response.status >= 300 && response.status < 400) {
      const target = new URL(location, assetUrl)
      if (target.host === url.host && !target.pathname.startsWith(BASE)) {
        target.pathname = `${BASE}${target.pathname === "/" ? "" : target.pathname}`
        const headers = new Headers(response.headers)
        headers.set("Location", target.pathname + target.search)
        return new Response(null, { status: response.status, headers })
      }
    }
    return response
  },
}
