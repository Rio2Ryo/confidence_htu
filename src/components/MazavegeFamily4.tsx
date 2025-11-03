'use client'

import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper'
import { useLanguage } from '@/contexts/LanguageContext'

export default function MazavegeFamily() {
  const { t, language } = useLanguage()

  return (
    <section id="mazavege-family" className="py-24 relative overflow-hidden">
      <div id="s4" className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="relative z-10 flex justify-center mb-8">
        <img src="confidence-howto/htu.png" alt="HTU" className="w-full max-w-60 md:max-w-96 h-auto" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8">
          <ScrollAnimationWrapper disabled={true}>
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "美容液 / ブースター美容液", EN: "Serum / Booster serum" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u13.jpg"
                    alt="Serum / Booster serum treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを美容液に混ぜ込む", EN: "MAZEKOMU Confidence into a serum" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【直接塗布する場合の推奨量】", EN: "【Recommended amount for direct application】" })}</p>
                      <p>{t({ JP: "①美容液 - 適量", EN: "①Serum - as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【ボトルに混ぜる場合の推奨量】", EN: "【Recommended amount for mixing in a bottle】" })}</p>
                      <p>{t({ JP: "①美容液 - 100ml", EN: "①Serum - 100ml" })}</p>
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
            <div className="u2 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "軟膏", EN: "Ointment" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u14.jpg"
                    alt="Ointment treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceを軟膏に混ぜ込む", EN: "MAZEKOMU Confidence into ointment" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①軟膏 - 適量", EN: "①Ointment - as needed" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="u3 mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "フェイスクリーム", EN: "Face Cream" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u15.jpg"
                    alt="Face Cream treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "Confidenceをフェイスクリームに混ぜ込む", EN: "MAZEKOMU Confidence into a face cream" })}
                  </h3>
                  {/* 横並びの2つのセクション */}
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* 直接使用のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【直接塗布する場合の推奨量】", EN: "【Recommended amount for direct application】" })}</p>
                      <p>{t({ JP: "①フェイスクリーム - 適量", EN: "①Face Cream - as needed" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    </div>

                    {/* ボトルに混ぜる場合のセクション */}
                    <div className="flex-1 text-white space-y-2 text-xs md:text-base">
                      <p className="font-semibold">{t({ JP: "【ボトルに混ぜる場合の推奨量】", EN: "【Recommended amount for mixing in a bottle】" })}</p>
                      <p>{t({ JP: "①フェイスクリーム - 100ml", EN: "①Face Cream - 100ml" })}</p>
                      <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1本", EN: "1 stick" })}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl px-6 md:px-12 py-8 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              {/* タイトル */}
              <h2 className="text-white text-xl md:text-3xl font-bold mb-8 text-left">
                {t({ JP: "フェイスマスク", EN: "Face Mask" })}
              </h2>

              {/* 画像とテキストのブロック */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* 画像 */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src="confidence-howto/u16.jpg"
                    alt="Face Mask treatment"
                    className="w-full h-auto"
                  />
                </div>

                {/* テキストブロック */}
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-green-400 text-sm md:text-2xl font-bold text-center">
                    {t({ JP: "フェイスマスク使用前にConfidenceを擦り込む", EN: "SURIKOMU Confidence before using a face mask" })}
                  </h3>
                  <div className="text-white space-y-2 text-xs md:text-base">
                    <p className="font-semibold">{t({ JP: "【推奨量】", EN: "【Recommended amount】" })}</p>
                    <p>{t({ JP: "①フェイスマスク - 1枚", EN: "①Face Mask - 1 sheet" })}</p>
                    <p>{t({ JP: "②", EN: "②" })}Confidence  <span style={{ color: '#4ade80' }}>{t({ JP: "1/10本", EN: "1/10 stick" })}</span></p>
                    <p className="mt-4">{t({ JP: "*フェイスマスクを使用する前に、気になる箇所にConfidenceを塗ってください。", EN: "*Apply Confidence to areas of concern before using your face mask." })}</p>
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
