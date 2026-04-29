"use client"

import { Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

const treatmentGroups = [
  {
    title: "顔の若返りシリーズ",
    treatments: [
      {
        name: "プロファイロ立体リフト",
        benefits: [
          "肌の奥からハリを再生する次世代治療",
          "ヒアルロン酸と再生成分の複合製剤",
          "真皮層を活性化し持続的な若返り",
          "施術1ヶ月後から自然な変化を実感",
        ],
      },
      {
        name: "ボトックス マルチユース",
        benefits: ["表情じわ・眉間のシワ改善", "肩こり/多汗症の緩和", "花粉症の鼻詰まり改善", "即効性と自然な仕上がり"],
      },
      {
        name: "ヒアルロン酸デザイン注入",
        benefits: [
          "顔全体の黄金比率を計算",
          "立体的な注入で輪郭矯正",
          "たるみ改善と若返りを同時実現",
          "医師の美的センスを反映",
        ],
      },
      {
        name: "PILLA（PLLA製剤）",
        benefits: [
          "韓国発の自然派再生治療",
          "3～6ヶ月かけて持続的改善",
          "コラーゲン生成を促進",
          "内側からのハリ感アップ",
        ],
      },
      {
        name: "ショッピングリフト",
        benefits: ["即効性糸リフト", "ランチタイム施術可能", "ダウンタイム最小限", "フェイスライン即時修正"],
      },
    ],
  },
  {
    title: "ボディメイクシリーズ",
    treatments: [
      {
        name: "脂肪溶解注射",
        benefits: [
          "二重顎/頬/二の腕/下腹部対応",
          "大豆由来製剤（BNLSなど複数種類）",
          "部分的な脂肪に直接アプローチ",
          "ダウンタイムほぼなし",
        ],
      },
      {
        name: "PILLA（PLLA製剤）",
        benefits: [
          "韓国で人気の自然派再生治療",
          "3～6ヶ月かけて持続的改善",
          "コラーゲン生成を促進",
          "内側からのハリ感アップ",
        ],
      },
    ],
  },
  {
    title: "肌質改善トリートメント",
    treatments: [
      {
        name: "ボライト（スキンバイブ）",
        benefits: [
          "肌質改革エクソソーム治療",
          "毛穴・キメ・ツヤを総合改善",
          "コラーゲン活性化によるハリ向上",
          "施術後すぐに化粧のノリ改善",
        ],
      },
      {
        name: "ダーマペン4",
        benefits: ["微細針で美容成分を導入", "エクソソーム×PDRN併用", "ニキビ跡・毛穴改善", "肌再生を促進"],
      },
      {
        name: "マヌカピーリング",
        benefits: [
          "天然マヌカハニー使用",
          "抗菌作用でニキビ肌改善",
          "低刺激設計で敏感肌にも対応",
          "保湿効果と肌理の整え",
        ],
      },
      {
        name: "マッサージピーリング",
        benefits: ["グリコール酸＋麹酸配合", "マッサージで血行促進", "毛穴の黒ずみ・くすみ改善", "痛みのない施術"],
      },
      {
        name: "エレクトロポレーション",
        benefits: ["美容成分10倍浸透技術", "トラネキサム酸でシミ予防", "植物幹細胞培養液配合", "ビタミンCの抗酸化作用"],
      },
    ],
  },
  {
    title: "まぶた治療",
    treatments: [
      {
        name: "SaveEyes",
        benefits: ["リジュランの後継製剤"],
      },
      {
        name: "リジュランアイ",
        benefits: [
          "目元専用再生治療",
          "クマ・小じわ・くすみ改善",
          "ハチミツ成分配合の独自製剤",
          "繊細な目元の肌に最適",
        ],
      },
    ],
  },
  {
    title: "最新美容機器",
    treatments: [
      {
        name: "4Dマルチレーザー",
        benefits: [
          "450nm：赤ら顔・炎症改善",
          "532nm：シミ・そばかす除去",
          "1064nm：毛穴引き締め",
          "1550nm：フラクショナル再生",
        ],
      },
      {
        name: "HIFUリフトアップ",
        benefits: [
          "切らない筋膜リフト",
          "SMAS層に直接アプローチ",
          "即効性と持続性を両立",
          "フェイスラインのシャープ化",
        ],
      },
    ],
  },
  {
    title: "健康美容複合ケア",
    treatments: [
      {
        name: "高濃度ビタミンC点滴",
        benefits: ["メラニン生成抑制による美白", "抗ストレスホルモン促進", "免疫力向上効果", "体の内側から若返り"],
      },
      {
        name: "育毛エクソセラピー",
        benefits: ["エクソソームによる頭皮再生", "炎症抑制と毛根活性化", "髪の太さ・コシ改善", "自然な発毛促進"],
      },
    ],
  },
]

export default function Home() {
  return (
    <div className="bg-[#f8f4ec] min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#b89e69] mb-6">Apollon Beauty Clinic</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            完全紹介制のプライベート空間で、美容と健康の総合ケアを提供します。
            <br />
            院長直接カウンセリングにより、一人ひとりに最適なオーダーメイド治療をご提案。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/price"
              className="inline-block px-8 py-3 border-2 border-[#b89e69] text-[#b89e69] rounded-full hover:bg-[#b89e69] hover:text-white transition-colors duration-300"
            >
              料金表を見る
            </Link>
            <Link
              href="/treatments"
              className="inline-block px-8 py-3 border-2 border-[#b89e69] text-[#b89e69] rounded-full hover:bg-[#b89e69] hover:text-white transition-colors duration-300"
            >
              すべての施術内容
            </Link>
            <Link
              href="/medications"
              className="inline-block px-8 py-3 border-2 border-[#b89e69] text-[#b89e69] rounded-full hover:bg-[#b89e69] hover:text-white transition-colors duration-300"
            >
              内服薬・外用薬
            </Link>
          </div>
        </header>

        {/* SNS紹介セクション */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#b89e69] border-b-2 border-[#b89e69] pb-2 mb-8">
            SNS・お問い合わせ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm mb-4">
                施術の症例写真や最新情報を毎日更新中。DMでのご予約も承っております。
              </p>
              <a
                href="https://www.instagram.com/apollon.b.c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors text-sm"
              >
                フォローする
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#00B900] rounded-full flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">LINE</h3>
              <p className="text-gray-600 text-sm mb-4">
                お気軽なご相談やカウンセリング予約はLINEが便利です。24時間受付中。
              </p>
              <a
                href="https://lin.ee/UqN5FdS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#00B900] text-white rounded-full hover:bg-[#00a000] transition-colors text-sm"
              >
                友だち追加
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">X (旧Twitter)</h3>
              <p className="text-gray-600 text-sm mb-4">美容に関する豆知識や院長の日常をつぶやいています。</p>
              <a
                href="https://x.com/drmisako"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-sm"
              >
                フォローする
              </a>
            </div>
          </div>
        </section>

        {/* クリニックからのお知らせ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#b89e69] border-b-2 border-[#b89e69] pb-2 mb-8">
            クリニックからのお知らせ
          </h2>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="border-l-4 border-[#b89e69] pl-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">2026.05〜2026.08</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">期間限定</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-3 text-lg">夏の大感謝キャンペーンと不在期間のお知らせ</h3>

                <div className="space-y-4 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-2">■ 不在期間</p>
                    <ul className="space-y-1 ml-2">
                      <li>・6/23〜7/13：イタリア（ボローニャ学会）</li>
                      <li>・7/25〜8/5：カナダ（ハープのワールドハープコングレス）</li>
                    </ul>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    この間は診療日・予約枠が少なくなり、ご希望どおりのご予約が取りづらくなる可能性があります。<br />
                    ご不便・ご迷惑をおかけしてしまい、本当に申し訳ございません。<br />
                    その代わりと言ってはなんですが…<br />
                    <span className="font-semibold text-[#b89e69]">【5〜8月限定の「夏の大感謝キャンペーン」】</span>をかなり盛りだくさんでご用意しました。
                  </p>

                  <div className="bg-amber-50 p-4 rounded-md">
                    <p className="font-semibold text-gray-800 mb-3 border-b border-amber-200 pb-2">◆ 背中（5〜8月）</p>
                    <ul className="space-y-2">
                      <li>
                        <p className="font-medium">・背中美人・殺菌レーザーコース</p>
                        <p className="ml-3 text-gray-600">27,500円 → <span className="font-semibold text-[#b89e69]">19,800円</span>（5〜7月）</p>
                        <p className="ml-3 text-gray-600">3回セット <span className="font-semibold text-[#b89e69]">55,000円</span>（8月末までに3回使用）</p>
                      </li>
                      <li>
                        <p className="font-medium">・背中つるんとマヌカピーリング</p>
                        <p className="ml-3 text-gray-600">5〜8月は、何回受けても毎回 <span className="font-semibold text-[#b89e69]">16,500円</span></p>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-gray-600 mb-2">このほかにも、</p>
                    <ul className="space-y-1 ml-2 text-gray-600">
                      <li>・6〜7月：夏3ヶ月・肌育プラン／夏ボトックス</li>
                      <li>・6〜8月：肌育プランの使用期間</li>
                      <li>・8月：ヒアルロン酸キャンペーン</li>
                    </ul>
                    <p className="mt-2 text-gray-600">などを予定しています。<br />上記三つの詳細は順次公開いたします。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm mb-4">最新情報はSNSでも随時更新しております</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/apollon.b.c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b89e69] hover:text-[#a08a59] transition-colors text-sm"
                >
                  Instagram →
                </a>
                <a
                  href="https://lin.ee/UqN5FdS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b89e69] hover:text-[#a08a59] transition-colors text-sm"
                >
                  LINE →
                </a>
                <a
                  href="https://x.com/drmisako"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b89e69] hover:text-[#a08a59] transition-colors text-sm"
                >
                  X →
                </a>
              </div>
            </div>
          </div>
        </section>

        <main id="treatment-details" className="space-y-16">
          {treatmentGroups.map((group, index) => (
            <section key={index} className="treatment-group">
              <h2 className="text-2xl font-semibold text-[#b89e69] border-b-2 border-[#b89e69] pb-2 mb-6">
                {group.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.treatments.map((treatment, tIndex) => (
                  <div
                    key={tIndex}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-semibold text-[#b89e69] mb-3">{treatment.name}</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4">
                      {treatment.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="mb-2">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => alert("症例写真ページは現在準備中です。今しばらくお待ちください。")}
                      className="text-[#b89e69] text-sm hover:opacity-80 transition-opacity border-b border-dashed border-[#b89e69]"
                    >
                      症例写真を見る
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>

        <footer className="mt-20 py-12 bg-white rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-semibold mb-4">まずはお気軽にご相談ください</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="https://www.instagram.com/apollon.b.c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Instagram className="mr-2" />
              Instagramで予約
            </Link>
            <Link
              href="https://lin.ee/UqN5FdS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#00B900] text-white rounded-full hover:bg-[#00a000] transition-colors"
            >
              <MessageCircle className="mr-2" />
              LINEで相談
            </Link>
            <Link
              href="https://x.com/drmisako"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Xをフォロー
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
