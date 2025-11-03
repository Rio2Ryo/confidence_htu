'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s5" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex justify-center mb-8">
        <img src="confidence-howto/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "日焼け止めクリーム", EN: "Sunscreen Cream" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u17.jpg"
                    alt="Sunscreen Cream treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを日焼け止めに混ぜ込む", EN: "MAZEKOMU Confidence into sunscreen" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①日焼け止めクリーム - 適量", EN: "①Sunscreen Cream - as needed" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "化粧下地", EN: "Primer" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u18.jpg"
                    alt="Primer treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを化粧下地に混ぜ込む", EN: "MAZEKOMU Confidence into primer" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①化粧下地 - 適量", EN: "①Primer - as needed" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "リキッドファンデーション", EN: "Liquid Foundation" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u19.jpg"
                    alt="Liquid Foundation treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceをリキッドファンデーションに混ぜ込む", EN: "MAZEKOMU Confidence into liquid foundation" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①リキッドファンデーション - 適量", EN: "①Liquid Foundation - as needed" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "フェイスパウダー", EN: "Face Powder" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u20.jpg"
                    alt="Face Powder treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceをフェイスパウダーに混ぜ込む", EN: "MAZEKOMU Confidence into face powder" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【直接塗布する場合の推奨量】", EN: "【Recommended amount for direct application】" })}</p>
                      <p>Confidence - <span style={{ color: '#4ade80' }}>{t({ JP: "適量", EN: "as needed" })}</span></p>
                    </div>

                    {/* フェイスパウダーに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【フェイスパウダーに混ぜる場合の推奨量】", EN: "【Recommended amount for mixing into face powder】" })}</p>
                      <p>{t({ JP: "①フェイスパウダー - 100 mg", EN: "①Face Powder - 100 mg" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                  {/* 全幅の注意書き */}
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="text-xs md:text-sm">{t({ JP: "*Confidenceはフェイスパウダーとして単独で使用することもできます。", EN: "*Confidence can also be used on its own as a face powder." })}</p>
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