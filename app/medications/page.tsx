import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface Medication {
  name: string
  description: string
  price: string
}

export default function MedicationsPage() {
  const internalMedications: Medication[] = [
    {
      name: "タチオン",
      description: "美白・疲労回復・抗酸化効果があります。",
      price: "1650円",
    },
    {
      name: "トラネキサム酸",
      description: "肝斑・シミ改善、抗炎症作用で美肌効果。",
      price: "3300円",
    },
    {
      name: "ユベラ",
      description: "シミ・肝斑改善、抗酸化効果で美白。",
      price: "1650円",
    },
    {
      name: "ビタミンD",
      description: "免疫力をアップしアレルギー症状を改善、美肌効果。",
      price: "0円",
    },
    {
      name: "ビオフェルミン",
      description: "腸内環境改善と腸皮膚相関による肌改善。",
      price: "1980円",
    },
    {
      name: "イソトレチノイン",
      description: "難治性のニキビ、脂腺増殖症のイボに。",
      price: "5940円",
    },
    {
      name: "ミノマイシン",
      description: "ニキビの短期集中治療。",
      price: "1100円",
    },
    {
      name: "デュタステリド",
      description: "男性の脱毛に。",
      price: "3300円",
    },
    // 追加の漢方薬
    {
      name: "十味敗毒湯",
      description: "ニキビの原因菌を抑制し、皮脂分泌を調整。肌バリアを高め、炎症を鎮めます。",
      price: "3300円",
    },
    {
      name: "桂枝茯苓丸",
      description:
        "血行を促進し、肌のターンオーバーを改善。酸化を抑え、毛穴詰まりや炎症を予防します。特に生理トラブルに伴うニキビに効果的です。",
      price: "3300円",
    },
    {
      name: "桂枝加朮附湯",
      description: "手のこわばりや神経痛に効果。血流促進で冷えや関節炎症を和らげます。",
      price: "3300円",
    },
    {
      name: "防風通聖散",
      description: "代謝促進で痩身効果と冷え改善。便秘改善と利尿作用でむくみ解消。",
      price: "3300円",
    },
  ]

  const externalMedications: Medication[] = [
    {
      name: "トレチノイン0.05%",
      description: "ニキビ、肝斑、シミ、色素沈着に。",
      price: "2750円",
    },
    {
      name: "トレチノイン0.1%",
      description: "効果を高めたい方に。",
      price: "3300円",
    },
    {
      name: "Apollon Mix",
      description: "炎症を抑えながら肌のターンオーバーを促進。",
      price: "2200円",
    },
    {
      name: "Apollon Mix Acne",
      description: "Apollon Mixのニキビに特化したバージョン。",
      price: "2200円",
    },
    {
      name: "トラネキサム酸クリーム",
      description: "肝斑改善、レーザー治療後の色素沈着予防と改善に。",
      price: "2500円",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8f4ec] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/beauty" className="inline-flex items-center text-[#b89e69] hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            美容クリニックのページに戻る
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#b89e69] mb-12">お薬一覧</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            アポロンビューティークリニックでは、様々な内服薬・外用薬を提供しています。
            お薬は医師の診察後、患者様の状態に合わせて処方いたします。
          </p>
          <div className="bg-[#f8f4ec] p-4 rounded-md mt-2">
            <p className="text-sm text-gray-700 font-medium">【価格に関する注意事項】</p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>・内服薬の価格はすべて1ヶ月分の金額です（ミノマイシンのみ1週間分）</li>
              <li>・価格が0円と表示されている薬剤は価格未設定です。ご希望の際はスタッフにお尋ねください</li>
            </ul>
          </div>
        </div>

        {/* 内服薬セクション */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#b89e69] border-b-2 border-[#b89e69] pb-2 mb-6">内服薬</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internalMedications.map((med, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#b89e69] mb-2">{med.name}</h3>
                  <span className="text-lg font-medium">{med.price}</span>
                </div>
                <p className="text-gray-600">{med.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 外用薬セクション */}
        <section>
          <h2 className="text-2xl font-semibold text-[#b89e69] border-b-2 border-[#b89e69] pb-2 mb-6">外用薬</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {externalMedications.map((med, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-[#b89e69] mb-2">{med.name}</h3>
                  <span className="text-lg font-medium">{med.price}</span>
                </div>
                <p className="text-gray-600">{med.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-6">お薬についてのご質問は、カウンセリング時にお気軽にお尋ねください。</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://www.instagram.com/apollon.b.c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 shadow-md hover:shadow-lg text-lg font-medium"
            >
              Instagramで予約
            </a>
            <a
              href="https://lin.ee/UqN5FdS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#00B900] text-white rounded-full hover:bg-[#00a000] transition-colors duration-300 shadow-md hover:shadow-lg text-lg font-medium"
            >
              LINEで相談
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
