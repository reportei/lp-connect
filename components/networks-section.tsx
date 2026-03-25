import Image from "next/image"

export function NetworksSection() {
  const mainNetworks = [
    { name: "Google Ads", logo: "/logos/google-ads.svg" },
    { name: "Meta Ads", logo: "/logos/meta.svg" },
    { name: "LinkedIn Ads", logo: "/logos/linkedin-ads.svg" },
    { name: "TikTok Ads", logo: "/logos/tiktok-ads.svg" },
    { name: "Instagram", logo: "/logos/instagram.svg" },
    { name: "YouTube", logo: "/logos/youtube.svg" },
    { name: "X Ads", logo: "/logos/x-ads.svg" },
    { name: "Google Analytics", logo: "/logos/google-analytics.svg" },
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "Pinterest Ads", logo: "/logos/pinterest-ads.svg" },
  ]

  const featuredNetworks = [
    { logo: "/logos/google-ads.svg", name: "Google Ads" },
    { logo: "/logos/meta.svg", name: "Meta" },
    { logo: "/logos/linkedin-ads.svg", name: "LinkedIn" },
    { logo: "/logos/tiktok-ads.svg", name: "TikTok" },
    { logo: "/logos/instagram.svg", name: "Instagram" },
    { logo: "/logos/shopify.svg", name: "Shopify" },
  ]

  return (
    <section id="networks" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-4">
            <span className="mr-2">🏆</span>
            <span className="text-muted-foreground">
              Dados confiáveis do Reportei - Líder em relatórios de marketing
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Mais de 30 redes disponíveis</h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
            Acesse dados das principais plataformas de marketing digital através de uma única integração.
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-8 max-w-5xl mx-auto">
            {mainNetworks.slice(0, 5).map((network, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-gray-100">
                  <Image
                    src={network.logo || "/placeholder.svg"}
                    alt={network.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xs text-center text-gray-600 group-hover:text-gray-900 transition-colors mt-2">
                  {network.name}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16 max-w-5xl mx-auto">
            {mainNetworks.slice(5, 10).map((network, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 border border-gray-100">
                  <Image
                    src={network.logo || "/placeholder.svg"}
                    alt={network.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-xs text-center text-gray-600 group-hover:text-gray-900 transition-colors mt-2">
                  {network.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-6 py-3 shadow-lg">
              <span className="font-bold text-lg mr-2">+</span>
              <span className="font-medium">20 outras redes disponíveis</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Uma integração, infinitas possibilidades</h3>
            <p className="text-muted-foreground mb-8">Conecte todas essas redes ao seu sistema com apenas uma API</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex -space-x-2">
                {featuredNetworks.map((network, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-white flex items-center justify-center"
                  >
                    <Image
                      src={network.logo || "/placeholder.svg"}
                      alt={network.name}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 bg-gray-100 rounded-full border-2 border-white shadow-md flex items-center justify-center text-xs font-bold text-gray-600">
                  +30
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-green-500"></div>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-4 shadow-lg">
                <div className="font-bold">Seu Sistema</div>
                <div className="text-xs opacity-90">Via Reportei Connect</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">E muito mais! Nossa lista de integrações está sempre crescendo.</p>
        </div>
      </div>
    </section>
  )
}
