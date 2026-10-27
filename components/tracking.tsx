"use client"

import Script from "next/script"
import { useEffect } from "react"
import { SIGNUP_URL } from "@/lib/seo"

// Same container as app.connect.reportei.com, so the conversion linker sees the ad click on the LP
// and the sign_up conversion on the app as one visit.
const GTM_ID = "GTM-5WVT74GV"

export function GoogleTagManager() {
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  )
}

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  )
}

const CAMPAIGN_PARAM = /^(utm_[a-z]+|gclid|gbraid|wbraid|fbclid|twclid|ttclid|li_fat_id|msclkid)$/
const STORAGE_KEY = "connect_lp_campaign"

// Carries the ad's UTMs and click IDs from the landing URL to the signup link, including after the
// visitor moves to another LP page, so the app attributes the account to the campaign that brought it.
export function SignupCampaignParams() {
  useEffect(() => {
    const params = new URLSearchParams()
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (CAMPAIGN_PARAM.test(key)) params.set(key, value)
    })

    let carried = params
    try {
      if (params.toString()) sessionStorage.setItem(STORAGE_KEY, params.toString())
      else carried = new URLSearchParams(sessionStorage.getItem(STORAGE_KEY) ?? "")
    } catch {
      // Storage blocked: the current URL's params still apply.
    }
    if (!carried.toString()) return

    // Rewrites the link as it is followed, which also covers links rendered later (the mobile menu).
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a")
      if (!link || !link.href.startsWith(SIGNUP_URL)) return
      const url = new URL(link.href)
      carried.forEach((value, key) => {
        if (!url.searchParams.has(key)) url.searchParams.set(key, value)
      })
      link.href = url.toString()
    }
    document.addEventListener("click", onClick, true)
    document.addEventListener("auxclick", onClick, true)
    return () => {
      document.removeEventListener("click", onClick, true)
      document.removeEventListener("auxclick", onClick, true)
    }
  }, [])

  return null
}
