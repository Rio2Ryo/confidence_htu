'use client'

import { useState } from 'react'
import ScrollAnimationWrapper from './ScrollAnimationWrapper'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqCategories = [
    {
      category: "技術について",
      items: [
        {
          question: "シアノバクテリアとは何ですか？",
          answer: "シアノバクテリアは、約35億年前に地球上に出現した最初の光合成生物です。藍藻とも呼ばれ、光合成によって酸素を生成し、地球の大気組成を変えた生物として知られています。当社の技術では、このシアノバクテリアの特性を最大限に活用し、効率的なCO₂吸収システムを構築しています。"
        },
        {
          question: "なぜ天然芝の700倍もCO₂を吸収できるのですか？",
          answer: "シアノバクテリアは、1) 24時間連続して光合成が可能、2) 炭素濃縮機構（CCM）により細胞内にCO₂を高濃度で蓄積、3) 成長速度が極めて速い（倍加時間2-8時間）、4) 単位面積あたりの生物量が圧倒的に多い、といった特性により、従来の植物と比較して飛躍的に高いCO₂吸収効率を実現しています。"
        },
        {
          question: "培養システムの維持管理は難しくないですか？",
          answer: "当社のシステムは自動化されており、IoTセンサーによる24時間モニタリングとAI制御により、最適な培養条件を自動で維持します。定期的なメンテナンスは月1回程度で、専門知識がなくても運用可能な設計となっています。また、遠隔サポートシステムにより、トラブル時も迅速に対応可能です。"
        }
      ]
    },
    {
      category: "ビジネス・投資について",
      items: [
        {
          question: "初期投資はどの程度必要ですか？",
          answer: "規模により異なりますが、小規模システム（100㎡）で約500万円、中規模システム（1,000㎡）で約3,000万円、大規模システム（1ヘクタール）で約2億円が目安となります。ただし、政府補助金やグリーンファイナンスの活用により、実質負担額は30-50%程度に抑えることが可能です。"
        },
        {
          question: "投資回収期間はどのくらいですか？",
          answer: "カーボンクレジット収入、バイオマス製品販売、運用コスト削減効果を合わせて、平均3-5年での投資回収が可能です。特にカーボンクレジット価格が上昇傾向にある現在、さらに短期間での回収も期待できます。詳細なシミュレーションは個別にご提供しています。"
        },
        {
          question: "どのような収益モデルですか？",
          answer: "主な収益源は、1) カーボンクレジット販売（CO₂削減量に応じた収入）、2) バイオマス製品販売（飼料、肥料、健康食品原料など）、3) システム運用受託料、4) 技術ライセンス料の4つです。複数の収益源により、安定的な収益を確保できます。"
        }
      ]
    },
    {
      category: "環境・社会への影響",
      items: [
        {
          question: "本当に環境に優しいのですか？",
          answer: "はい。当システムは、1) CO₂を大量に吸収・固定、2) 有害物質を一切排出しない、3) 水質浄化効果もある、4) 生産されるバイオマスは100%有機物、5) エネルギー消費も最小限、といった特徴があり、第三者機関による環境影響評価でも最高評価を受けています。"
        },
        {
          question: "地域社会への貢献はありますか？",
          answer: "システムの設置・運用により、1) 新規雇用の創出（1施設あたり5-20名）、2) 地域の環境改善、3) 教育機会の提供（見学・研修プログラム）、4) 地域ブランド価値の向上、5) 関連産業の活性化など、多面的な地域貢献が可能です。"
        },
        {
          question: "SDGsへの貢献はどのようなものですか？",
          answer: "当プロジェクトは、SDGsの17目標のうち、特に目標13（気候変動）、目標14（海の豊かさ）、目標15（陸の豊かさ）、目標2（飢餓ゼロ）、目標7（クリーンエネルギー）、目標9（産業と技術革新）、目標11（住み続けられるまちづくり）など、多くの目標達成に直接貢献します。"
        }
      ]
    },
    {
      category: "導入・サポートについて",
      items: [
        {
          question: "導入までの流れを教えてください",
          answer: "1) お問い合わせ・初回相談、2) 現地調査・導入提案、3) 契約締結、4) システム設計・製造、5) 設置工事、6) 試運転・調整、7) 本格稼働開始、8) 定期メンテナンス・サポート、という流れで、お問い合わせから稼働開始まで通常3-6ヶ月程度です。"
        },
        {
          question: "どのような場所に設置できますか？",
          answer: "屋上、壁面、遊休地、工場敷地、農地、ビル内部など、様々な場所に設置可能です。必要条件は、1) 最低10㎡以上のスペース、2) 水道・電源へのアクセス、3) 日照または人工光源、のみです。都市部から郊外まで、幅広い環境に対応しています。"
        },
        {
          question: "アフターサポートはありますか？",
          answer: "24時間365日の遠隔監視サポート、定期メンテナンス（月1回）、トラブル時の緊急対応、システムアップグレード、運用最適化コンサルティング、スタッフ研修など、包括的なサポートパッケージを提供しています。導入後も安心して運用いただけます。"
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex: number, itemIndex: number) => {
    const index = categoryIndex * 10 + itemIndex
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-32 bg-black/50">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper disabled={true}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-400 mb-4">
            よくある質問
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            お客様からよくいただく質問にお答えします。
            その他のご質問は、お気軽にお問い合わせください。
          </p>
        </ScrollAnimationWrapper>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <ScrollAnimationWrapper key={categoryIndex} disabled={true}>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => {
                    const isActive = activeIndex === categoryIndex * 10 + itemIndex
                    return (
                      <div
                        key={itemIndex}
                        className="bg-black/40 backdrop-blur-md border border-emerald-500/20 rounded-lg overflow-hidden hover:border-emerald-500/40 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, itemIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between"
                        >
                          <span className="text-white font-medium pr-4">{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                              isActive ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div
                          className={`px-6 overflow-hidden transition-all duration-300 ${
                            isActive ? 'max-h-96 pb-4' : 'max-h-0'
                          }`}
                        >
                          <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* CTA */}
        <ScrollAnimationWrapper disabled={true}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">ご不明な点がございましたら、お気軽にお問い合わせください</p>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              💬 お問い合わせはこちら
            </button>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  )
}