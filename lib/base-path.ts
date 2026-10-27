// The LP is served at reportei.com/connect (see worker/index.js). Next adds this prefix to its own
// assets and to next/link, but not to plain <a> and <img>, so every root-relative path goes through withBase.
export const BASE_PATH = "/connect"

export function withBase(path: string) {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  return path === "/" ? BASE_PATH : `${BASE_PATH}${path}`
}
