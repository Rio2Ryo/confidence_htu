'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s2" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex justify-center mb-8">
        <img src="confidence-howto/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "火傷の跡", EN: "Burn Scars" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u5.jpg"
                    alt="Burn Scars treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを軟膏に混ぜ込む", EN: "MAZEKOMU Confidence into ointment" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【ローションまたはクリームと一緒に使用する場合の推奨量】", EN: "【Recommended amount when using with lotion or cream】" })}</p>
                    <p>{t({ JP: "①軟膏/クリーム - 適量", EN: "①Ointment/Cream - as needed" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u6 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "薄毛", EN: "Hair Thinning" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u6.jpg"
                    alt="Hair Thinning treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceをシャンプーまたは育毛剤に混ぜ込む", EN: "MAZEKOMU Confidence into shampoo or hair tonic" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 傷用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【シャンプーボトルに入れる場合の推奨量】", EN: "【Recommended amount if adding to a shampoo bottle】" })}</p>
                      <p>{t({ JP: "①シャンプー - 100ml", EN: "①Shampoo - 100ml" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>

                    {/* ニキビ用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【育毛剤に混ぜる場合の推奨量】", EN: "【Recommended amount if mixing into a hair tonic】" })}</p>
                      <p>{t({ JP: "①育毛剤 - 100ml", EN: "①Hair tonic - 100ml" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*Confidenceが沈殿する可能性があるため、使用前によく振ってください", EN: "*Shake well before use, as Confidence may settle" })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u7 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "顔のテカリ防止", EN: "Face Shine Control" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u7.jpg"
                    alt="Face Shine Control treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを直接擦り込む", EN: "SURIKOMU Confidence directly" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【直接塗布する場合の推奨量】", EN: "【Recommended amount for direct application】" })}</p>
                      <p>Confidence - <span style={{ color: '#4ade80' }}>{t({ JP: "適量", EN: "as needed" })}</span></p>
                    </div>

                    {/* フェイスパウダーと混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【フェイスパウダーと混ぜる場合の推奨量】", EN: "【Recommended amount if mixing with face powder】" })}</p>
                      <p>{t({ JP: "①フェイスパウダー - 100mg", EN: "①Face powder - 100mg" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*スキンケアとメイクを終えた後、パフやブラシを使ってテカリが気になる部分に優しく塗布してください。", EN: "*After finishing skincare and makeup, use a puff or brush to gently apply the product to areas where shine is a concern." })}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u8 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "そばかすと赤み", EN: "Freckles and Redness" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u8.jpg"
                    alt="Freckles and Redness treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを直接擦り込む", EN: "SURIKOMU Confidence directly" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①", EN: "①" })}Confidence - <span style={{ color: '#4ade80' }}>{t({ JP: "適量", EN: "as needed" })}</span></p>
                    <p className="mt-4">{t({ JP: "*気になる箇所に直接Confidenceを塗ってください。", EN: "*Apply Confidence directly to affected areas." })}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
          {/* ロゴ画像 */}
          <div className="flex justify-center mt-12">
            <img src="confidence-howto/mazavege_logo_midori.png" alt="Mazavege Logo" className="h-16 w-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
