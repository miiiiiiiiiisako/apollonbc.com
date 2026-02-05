"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from "next/link"
import { ArrowLeft } from 'lucide-react'

export default function PricePage() {
const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
const [expandedMainTitle, setExpandedMainTitle] = useState<string | null>(null)
const [showVIPPrices, setShowVIPPrices] = useState(false)

const toggleCategory = (category: string) => {
  if (expandedCategory === category) {
    setExpandedCategory(null)
  } else {
    setExpandedCategory(category)
  }
}

const toggleMainTitle = (mainTitle: string) => {
  if (expandedMainTitle === mainTitle) {
    setExpandedMainTitle(null)
  } else {
    setExpandedMainTitle(mainTitle)
  }
}

const handleVIPPassword = () => {
  const password = prompt("パスワードを入力してください:")
  if (password === "VIPMENu") {
    setShowVIPPrices(true)
    alert("VIP価格が表示されました")
  } else {
    alert("パスワードが違います")
  }
}

const categories = [
  {
    name: "顔",
    mainTitles: [
      {
        title: "目周り治療",
        treatments: [
          { name: "プロファイロ", price: 27500, vipPrice: 19800, description: "肌のハリや弾力を改善する注入治療。" },
          { name: "リジュランアイ", price: 38500, vipPrice: 27500, description: "目元の小ジワやたるみを改善。" },
          {
            name: "リジュランアイ（4回セット）",
            price: 144200,
            vipPrice: 110000,
            description: "目元の小ジワやたるみを改善。（単回購入より9800円お得）",
          },
          { name: "Save Eyes", price: 27500, vipPrice: 19800, description: "目元の若返り効果。" },
          {
            name: "Save Eyes（4回セット）",
            price: 99000,
            vipPrice: 79200,
            description: "目元の若返り効果。（単回購入より11000円お得）",
          },
          { name: "目尻ボトックス", price: 20350, vipPrice: 15400, description: "笑った時の目のシワに。" },
          { name: "HIFU（目元のみ）", price: 22000, vipPrice: 16500, description: "目元の引き上げ。" },
        ],
        recommendations: [
          {
            type: "おすすめ治療",
            items: [{ name: "Save Eyes" }],
          },
          {
            type: "おすすめホームケア",
            items: [{ name: "Revision Rebox skin serum" }],
          },
        ],
      },
      {
        title: "忘れ鼻治療",
        treatments: [
          { name: "小鼻ボトックス", price: 15400, vipPrice: 11000, description: "鼻の膨らみを抑えます。" },
          {
            name: "人中短縮ボトックス",
            price: 15400,
            vipPrice: 11000,
            description: "鼻下を短く、アップノーズにします。",
          },
          { name: "ヒアルロン酸", price: 77000, vipPrice: 60500, description: "ハイライトを入れたような鼻筋を。" },
        ],
      },
      {
        title: "たるみ治療",
        treatments: [
          { name: "プロファイロ（初回限定）", price: 77000, vipPrice: 55000, description: "魔法のように引き上がる" },
          { name: "プロファイロ", price: 99000, vipPrice: 77000, description: "" },
          { name: "ヒアルロン酸 1本", price: 77000, vipPrice: 60500, description: "" },
          {
            name: "HIFU（顔＋首）",
            price: 44000,
            vipPrice: 38500,
            description: "ポニーテールをした時のようなリフトアップ",
          },
          { name: "脂肪溶解注射（１cc）", price: 2750, vipPrice: 1750, description: "口横のポニョに" },
          { name: "糸モノリフト １０本～", price: 39600, vipPrice: 33000, description: "肌の引き締め" },
          { name: "スキンボトックス", price: 49500, vipPrice: 39600, description: "" },
          {
            name: "エクソソーム＋ボライト",
            price: 396000,
            vipPrice: 297000,
            description: "肌質改善＋小顔＋たるみ解消＋毛穴改善を一気に１回の治療で",
          },
        ],
        recommendations: [
          {
            type: "おすすめ治療",
            items: [{ name: "プロファイロ（初回限定）" }],
          },
        ],
      },
      {
        title: "ほうれい線治療",
        treatments: [
          { name: "プロファイロ（初回限定）", price: 77000, vipPrice: 55000, description: "肌のボリュームを改善" },
          { name: "プロファイロ", price: 99000, vipPrice: 77000, description: "肌のボリュームを改善" },
          {
            name: "ヒアルロン酸1本",
            price: 77000,
            vipPrice: 60500,
            description: "ほうれい線に直接ボリュームを足します",
          },
          { name: "HIFU（顔＋首）", price: 44000, vipPrice: 38500, description: "土台からしっかり引き上げ" },
          { name: "PILLA", price: 44000, vipPrice: 39000, description: "ほうれい線に特化した製剤" },
          {
            name: "PILLA（１ヶ月以内）",
            price: 39000,
            vipPrice: 36000,
            description: "当院施術から1ヶ月以内の方限定",
          },
          { name: "脂肪溶解注射（１cc）", price: 2750, vipPrice: 1750, description: "口角のもたつきに" },
          { name: "糸モノリフト１０本～", price: 39600, vipPrice: 33000, description: "肌の引き締め" },
          { name: "スキンボトックス", price: 49500, vipPrice: 39600, description: "肌の表面の小じわ改善" },
        ],
        recommendations: [
          {
            type: "おすすめ治療",
            items: [{ name: "PILLA" }],
          },
        ],
      },
      {
        title: "ボトックス治療",
        treatments: [
          { name: "小顔ボトックス（５０単位）", price: 39600, vipPrice: 34650, description: "" },
          { name: "スーパー小顔ボトックス（７５単位）", price: 52800, vipPrice: 41800, description: "" },
          { name: "エラボトックス（５０単位）", price: 39600, vipPrice: 34650, description: "修正１０単位まで" },
          { name: "小顔＋エラボトックス（１００単位）", price: 74800, vipPrice: 69300, description: "" },
          { name: "スーパー小顔＋エラボトックス（１２５単位）", price: 85800, vipPrice: 76450, description: "" },
          { name: "口角ボトックス", price: 15400, vipPrice: 11000, description: "下がった口角を上向きに" },
          { name: "ガミースマイルボトックス", price: 15400, vipPrice: 11000, description: "歯茎の見えない笑顔に" },
          {
            name: "バニーボトックス",
            price: 15400,
            vipPrice: 11000,
            description: "小鼻の笑いシワをなくして品のある笑顔に",
          },
          { name: "小鼻ボトックス", price: 15400, vipPrice: 11000, description: "鼻の膨らみを抑えます" },
          { name: "人中短縮ボトックス", price: 15400, vipPrice: 11000, description: "鼻下を短くします" },
          { name: "口輪筋ボトックス", price: 15400, vipPrice: 11000, description: "口周りの縦しわを改善" },
          {
            name: "顎ボトックス",
            price: 15400,
            vipPrice: 11000,
            description: "梅干し皺をなくしてフェイスラインを綺麗に",
          },
          { name: "額ボトックス", price: 17600, vipPrice: 14300, description: "額のシワと皮脂を改善" },
          {
            name: "眉間ボトックス",
            price: 20350,
            vipPrice: 15400,
            description: "ネガティブな表情の印象と目の開きの改善",
          },
          { name: "目尻ボトックス", price: 20350, vipPrice: 15400, description: "" },
          {
            name: "スキンボトックス＊",
            price: 49500,
            vipPrice: 39600,
            description: "顔全体の皮脂・ツヤ・ハリ・たるみ改善",
          },
          { name: "首ボトックス＊", price: 39600, vipPrice: 34650, description: "首の縦シワ改善" },
          {
            name: "側頭筋ボトックス",
            price: 39600,
            vipPrice: 34650,
            description: "こめかみの張り・噛み締め・頭痛改善に",
          },
          {
            name: "Repair",
            price: 0,
            vipPrice: 0,
            description: "治療後３週～６週に修正を行います（＊小顔/スキン/首は適応外）",
          },
        ],
        recommendations: [
          {
            type: "おすすめ治療",
            items: [{ name: "眉間ボトックス" }, { name: "小顔ボトックス（５０単位）" }],
          },
          {
            type: "シワおすすめホームケア",
            items: [{ name: "Revision Rebox skin serum" }],
          },
        ],
      },
      {
        title: "ヒアルロン酸治療",
        treatments: [
          { name: "ヒアルロン酸1本", price: 77000, vipPrice: 60500, description: "気になる部分にボリュームを" },
          {
            name: "ヒアルロン酸除去（１ccあたり当院）",
            price: 29700,
            vipPrice: 22000,
            description: "溶解注射でヒアルロン酸を溶かします",
          },
          {
            name: "ヒアルロン酸除去（１ccあたり他院）",
            price: 44000,
            vipPrice: 22000,
            description: "溶解注射でヒアルロン酸を溶かします",
          },
        ],
      },
    ],
  },
  {
    name: "肌治療",
    mainTitles: [
      {
        title: "OMNI Laser治療　肌悩み全て解決",
        treatments: [
          {
            name: "Omniカスタマイズレーザー",
            price: 34800,
            vipPrice: 29800,
            description:
              "肌状態から最適なレーザーを組み合わせて照射（フラクショナル追加は＋3,000円／VIPは＋2,600円）",
          },
          { name: "シミスポット１cm*１cm", price: 2750, vipPrice: 1980, description: "" },
          { name: "シミ取り放題", price: 39800, vipPrice: 35200, description: "パック付" },
          { name: "シミ取り放題＋トーニング", price: 49800, vipPrice: 39800, description: "パック付" },
          { name: "肝斑トーニング", price: 15400, vipPrice: 8800, description: "パック付" },
          { name: "パックアップグレード", price: 1650, vipPrice: 1650, description: "成長因子パック" },
          {
            name: "殺菌レーザー",
            price: 15400,
            vipPrice: 9900,
            description: "レーザーで殺菌を行いニキビの原因にアプローチ",
          },
          { name: "赤み取りレーザー", price: 15400, vipPrice: 9900, description: "毛細血管の拡張を抑えます" },
        ],
        recommendations: [
          {
            type: "シミ・色素沈着治療の薬",
            items: [
              { name: "トレチノイン0.05%", price: 2750 },
              { name: "トレチノイン0.1%", price: 3300 },
              { name: "トラネキサム酸1ヶ月分", price: 3300 },
              { name: "ユベラ１ヶ月分", price: 1650 },
              { name: "タチオン2ヶ月分", price: 3300 },
              { name: "Apollon Mix", price: 2200 },
            ],
          },
          {
            type: "OMNI Laser後おすすめホームケア",
            items: [
              { name: "トラネキサム酸クリーム", price: 2500 },
              { name: "ISOVHDセラムシリーズ", price: "13200円〜" },
              { name: "シスペラ　ORIGINAL＋", price: 25900 },
              { name: "韓国有名MODSクリニック再生クリーム", price: 6300 },
            ],
          },
          {
            type: "マッサージピーリングおすすめ",
            items: [{ name: "レーザーとの併用" }],
          },
          {
            type: "エレクトロポレーションおすすめ",
            items: [{ name: "レーザーとの併用" }],
          },
        ],
      },
      {
        title: "シミ・色素沈着治療",
        treatments: [
          { name: "シミスポット１cm*１cm", price: 2750, vipPrice: 1980, description: "" },
          { name: "シミ取り放題", price: 39800, vipPrice: 35200, description: "パック付" },
          { name: "シミ取り放題＋トーニング", price: 49800, vipPrice: 39800, description: "パック付" },
          { name: "肝斑トーニング", price: 15400, vipPrice: 8800, description: "パック付" },
          { name: "パックアップグレード", price: 1650, vipPrice: 1650, description: "成長因子パック" },
          {
            name: "マッサージピーリング１回",
            price: 11000,
            vipPrice: 9900,
            description: "コウジ酸でメラニンの生成抑制（おすすめ：レーザーとの併用）",
          },
          { name: "マッサージピーリング５回", price: 46200, vipPrice: 44000, description: "単回治療より8800円お得" },
          {
            name: "エレクトロポレーション１回",
            price: 16500,
            vipPrice: 11000,
            description: "シミや肝斑に効果のあるトラネキサム酸を肌に導入（おすすめ：レーザーとの併用）",
          },
          {
            name: "エレクトロポレーション５回",
            price: 68750,
            vipPrice: 50600,
            description: "単回治療より13750円お得",
          },
          {
            name: "エクソソーム注射１v",
            price: 82500,
            vipPrice: 60500,
            description: "炎症性色素沈着などの色素沈着に(安全性確保のため当院ではエクソソーム点滴は行いません)",
          },
        ],
        recommendations: [
          {
            type: "シミ・色素沈着治療の薬",
            items: [
              { name: "トレチノイン0.05%", price: 2750 },
              { name: "トレチノイン0.1%", price: 3300 },
              { name: "トラネキサム酸1ヶ月分", price: 3300 },
              { name: "ユベラ１ヶ月分", price: 1650 },
              { name: "タチオン2ヶ月分", price: 3300 },
              { name: "Apollon Mix", price: 2200 },
            ],
          },
          {
            type: "シミ・色素沈着おすすめホームケア",
            items: [
              { name: "トラネキサム酸クリーム", price: 2500 },
              { name: "ISOVHDセラムシリーズ", price: "13200円〜" },
              { name: "シスペラ　ORIGINAL＋", price: 25900 },
              { name: "韓国有名MODSクリニック再生クリーム", price: 6300 },
            ],
          },
          {
            type: "マッサージピーリングおすすめ",
            items: [{ name: "レーザーとの併用" }],
          },
          {
            type: "エレクトロポレーションおすすめ",
            items: [{ name: "レーザーとの併用" }],
          },
        ],
      },
      {
        title: "イボ治療",
        treatments: [
          { name: "〜2mm", price: 7100, vipPrice: 6200, description: "" },
          { name: "3~5mm", price: 9500, vipPrice: 8400, description: "" },
          { name: "5~9mm", price: 11900, vipPrice: 10500, description: "" },
          { name: "10mm~19mm", price: 17800, vipPrice: 15700, description: "" },
          { name: "20mm~", price: 21400, vipPrice: 18800, description: "" },
          { name: "1mm以下1(〜10個)", price: 17800, vipPrice: 15700, description: "" },
          { name: "1mm以下1(11〜20個)", price: 29700, vipPrice: 26100, description: "" },
          { name: "1mm以下1(21〜30個)", price: 38000, vipPrice: 33400, description: "" },
          { name: "1mm以下1(31〜40個)", price: 46300, vipPrice: 40920, description: "" },
          {
            name: "ダーモスコピー診断",
            price: 1100,
            vipPrice: 0,
            description: "安全第一の方針をもとに必要の有無はこちらで判断いたします",
          },
        ],
        recommendations: [
          {
            type: "イボ治療の薬",
            items: [
              { name: "Apollon Mix Mild", price: 1980 },
              { name: "イソトレチノイン１ヶ月分", price: 6600 },
            ],
          },
          {
            type: "イボ治療後おすすめホームケア",
            items: [{ name: "トラネキサム酸クリーム", price: 2500 }],
          },
        ],
      },
      {
        title: "毛穴・ニキビ跡治療",
        treatments: [
          {
            name: "マヌカピーリング（初回限定）",
            price: 11000,
            vipPrice: 9900,
            description: "マヌカハニーで保湿・抗菌・抗炎症しながらいらない角質除去",
          },
          { name: "マヌカピーリング（１回）", price: 16500, vipPrice: 14300, description: "" },
          { name: "マヌカピーリング（３回）", price: 47850, vipPrice: 39600, description: "単回治療より1650円お得" },
          { name: "マヌカピーリング（５回）", price: 71500, vipPrice: 55000, description: "単回治療より11000円お得" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "鼻や頬周りの毛穴の開きに",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
          {
            name: "エレクトロポレーション（１回）",
            price: 16500,
            vipPrice: 11000,
            description: "毛穴の奥深くにも美容液を行き届かせて毛穴や皮脂腺の改善に",
          },
          {
            name: "エレクトロポレーション（５回）",
            price: 68750,
            vipPrice: 50600,
            description: "単回治療より13750円お得",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→幹細胞",
            price: 2200,
            vipPrice: 2200,
            description: "あらゆる肌悩みに効果を出したい時に",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→エクソソーム",
            price: 11000,
            vipPrice: 11000,
            description: "強い肌荒れや慢性炎症にも効果を出したい時に",
          },
          {
            name: "ダーマペン（１回）",
            price: 20900,
            vipPrice: 16500,
            description: "大きな毛穴の開き・クレーターの凹凸に",
          },
          { name: "ダーマペン（５回）", price: 88000, vipPrice: 66000, description: "単回治療より16500円お得に" },
          {
            name: "エクソリューション・ダーマリバイブ（初回限定）",
            price: 39600,
            vipPrice: 33000,
            description: "エクソソーム＋ダーマペンで肌を生まれかわらせましょう",
          },
          { name: "エクソリューション・ダーマリバイブ（１回）", price: 60500, vipPrice: 44880, description: "" },
          {
            name: "エクソリューション・ダーマリバイブ（５回）",
            price: 247500,
            vipPrice: 198000,
            description: "単回治療より55000円お得",
          },
          { name: "マヌカミラクルリフレッシュ（初回限定）", price: 29700, vipPrice: 25850, description: "" },
          {
            name: "マヌカミラクルリフレッシュ（１回）",
            price: 36300,
            vipPrice: 29700,
            description: "マヌカハニーによる自然な肌改善とダーマペンで肌をリフレッシュさせます",
          },
          {
            name: "マヌカミラクルリフレッシュ（５回）",
            price: 176000,
            vipPrice: 121000,
            description: "単回治療より5500円お得に",
          },
          {
            name: "ダーマペンオプション１つ",
            price: 8800,
            vipPrice: 8800,
            description:
              "①ニキビや凹凸・赤みや美白に強いPDNR製剤②皮脂腺抑制効果のあるボトックス③施術後のマッサージピーリング（複数選択可）",
          },
          { name: "ダーマペンオプション２つ", price: 14300, vipPrice: 14300, description: "" },
          { name: "ダーマペンオプション３つ", price: 19800, vipPrice: 19800, description: "" },
          { name: "成長因子パック", price: 1650, vipPrice: 1650, description: "施術後のダウンタイムを短く" },
          { name: "スキンボトックス", price: 49500, vipPrice: 39600, description: "顔全体の毛穴/皮脂/たるみ改善" },
          {
            name: "ボライト（全顔）",
            price: 165000,
            vipPrice: 104500,
            description: "美肌用のヒアルロン酸　乾燥・赤み・毛穴凹凸・艶感改善",
          },
          { name: "ボライト（頬のみ）", price: 110000, vipPrice: 71500, description: "" },
          { name: "ボライト（頬内側・額）", price: 55000, vipPrice: 38500, description: "" },
          {
            name: "殺菌レーザー",
            price: 15400,
            vipPrice: 9900,
            description: "レーザーで殺菌を行いニキビの原因にアプローチ",
          },
        ],
        recommendations: [
          {
            type: "毛穴ニキビ跡おすすめ治療",
            items: [
              { name: "エクソリューション・ダーマリバイブ（初回限定）", price: 39600 },
              { name: "ボライト（頬のみ）", price: 110000 },
            ],
          },
          {
            type: "毛穴ニキビ跡おすすめホームケア",
            items: [
              { name: "Revision DEJ cream", price: 19800 },
              { name: "Wiqo Face Fluid", price: 9900 },
              { name: "Pureasy Mask", price: 1320 },
              { name: "Pureasy Mist", price: 6600 },
            ],
          },
        ],
      },
      {
        title: "小ジワ治療",
        treatments: [
          {
            name: "ピコフラクショナルレーザー",
            price: 19800,
            vipPrice: 13200,
            description: "皮膚の再生する力を利用してシワ・ハリ改善",
          },
          {
            name: "Neo Found １回",
            price: 38500,
            vipPrice: 29000,
            description: "しぼんだ皮膚を若返らせながらシミ肝斑改善",
          },
          { name: "Neo Found ３回", price: 99000, vipPrice: 85000, description: "単回治療より16500円お得" },
          { name: "リジュランアイ", price: 38500, vipPrice: 27500, description: "小ジワ改善" },
          { name: "リジュランアイ４回", price: 144200, vipPrice: 110000, description: "" },
          { name: "Save Eyes", price: 27500, vipPrice: 19800, description: "小ジワ改善" },
          { name: "Save Eyes　４回", price: 99000, vipPrice: 79200, description: "" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "ハリツヤを出して顔体のジワを改善",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
          {
            name: "スキンボトックス",
            price: 49500,
            vipPrice: 39600,
            description: "おでこ・眉間・目の下の小ジワに効果的",
          },
          {
            name: "エレクトロポレーション（１回）",
            price: 16500,
            vipPrice: 11000,
            description: "肌の深部まで保湿・肌再生・細胞活性",
          },
          {
            name: "エレクトロポレーション（５回）",
            price: 68750,
            vipPrice: 50600,
            description: "単回治療より13750円お得",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→幹細胞",
            price: 2200,
            vipPrice: 2200,
            description: "あらゆる肌悩みに効果を出したい時に",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→エクソソーム",
            price: 11000,
            vipPrice: 11000,
            description: "強い肌荒れや慢性炎症にも効果を出したい時に",
          },
          {
            name: "ボライト（全顔）",
            price: 165000,
            vipPrice: 104500,
            description: "肌に直接水分を入れ込み常に潤った状態に",
          },
          { name: "ボライト（頬のみ）", price: 110000, vipPrice: 71500, description: "" },
          { name: "ボライト（頬内側・額）", price: 55000, vipPrice: 38500, description: "" },
          { name: "ボライト（追加）", price: 55000, vipPrice: 38500, description: "肌状態をみながらご相談" },
        ],
        recommendations: [
          {
            type: "小ジワおすすめ治療",
            items: [
              { name: "エクソリューション・ダーマリバイブ（初回限定）", price: 39600 },
              { name: "ボライト（頬のみ）", price: 110000 },
            ],
          },
          {
            type: "小ジワおすすめホームケア",
            items: [
              { name: "Wiqo Face Fluid", price: 9900 },
              { name: "Revision Rebox skin serum", price: 26400 },
            ],
          },
        ],
      },
      {
        title: "ニキビ治療",
        treatments: [
          {
            name: "マヌカピーリング（初回限定）",
            price: 11000,
            vipPrice: 9900,
            description: "マヌカハニーで保湿・抗菌・抗炎症しながらいらない角質除去",
          },
          { name: "マヌカピーリング（１回）", price: 16500, vipPrice: 14300, description: "" },
          { name: "マヌカピーリング（３回）", price: 47850, vipPrice: 39600, description: "単回治療より1650円お得" },
          { name: "マヌカピーリング（５回）", price: 71500, vipPrice: 55000, description: "単回治療より11000円お得" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "鼻や頬周りの毛穴の開きに",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
          {
            name: "エレクトロポレーション（１回）",
            price: 16500,
            vipPrice: 11000,
            description: "毛穴の奥深くにも美容液を行き届かせて皮脂腺の改善に",
          },
          {
            name: "エレクトロポレーション（５回）",
            price: 68750,
            vipPrice: 50600,
            description: "単回治療より13750円お得",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→幹細胞",
            price: 2200,
            vipPrice: 2200,
            description: "あらゆる肌悩みに効果を出したい時に",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→エクソソーム",
            price: 11000,
            vipPrice: 11000,
            description: "強い肌荒れや慢性炎症にも効果を出したい時に",
          },
          {
            name: "ダーマペン（１回）",
            price: 20900,
            vipPrice: 16500,
            description: "大きな毛穴の開き・クレーターの凹凸・ニキビ",
          },
          { name: "ダーマペン（５回）", price: 88000, vipPrice: 66000, description: "単回治療より16500円お得に" },
          { name: "エクソリューション・ダーマリバイブ（初回限定）", price: 39600, vipPrice: 33000, description: "" },
          {
            name: "エクソリューション・ダーマリバイブ（１回）",
            price: 60500,
            vipPrice: 44880,
            description: "エクソソームにより肌を生まれかわらせましょう",
          },
          {
            name: "エクソリューション・ダーマリバイブ（５回）",
            price: 247500,
            vipPrice: 198000,
            description: "単回治療より55000円お得",
          },
          { name: "マヌカミラクルリフレッシュ（初回限定）", price: 29700, vipPrice: 25850, description: "" },
          {
            name: "マヌカミラクルリフレッシュ（１回）",
            price: 36300,
            vipPrice: 29700,
            description: "マヌカハニーによる自然な肌改善とダーマペンの治療で肌をリフレッシュさせます",
          },
          {
            name: "マヌカミラクルリフレッシュ（５回）",
            price: 176000,
            vipPrice: 121000,
            description: "単回治療より5500円お得に",
          },
          {
            name: "ダーマペンオプション１つ",
            price: 8800,
            vipPrice: 8800,
            description:
              "①ニキビや凹凸・赤みや美白に強いPDNR製剤②皮脂腺抑制効果のあるボトックス③施術後のマッサージピーリング（複数選択可）",
          },
          { name: "ダーマペンオプション２つ", price: 14300, vipPrice: 14300, description: "" },
          { name: "ダーマペンオプション３つ", price: 19800, vipPrice: 19800, description: "" },
          { name: "成長因子パック", price: 1650, vipPrice: 1650, description: "施術後のダウンタイムを短く" },
          { name: "スキンボトックス", price: 49500, vipPrice: 39600, description: "顔全体の毛穴/皮脂/たるみ改善" },
          {
            name: "ボライト（全顔）",
            price: 165000,
            vipPrice: 104500,
            description: "美肌用のヒアルロン酸　乾燥・赤み・毛穴凹凸・艶感改善",
          },
          { name: "ボライト（頬のみ）", price: 110000, vipPrice: 71500, description: "" },
          { name: "ボライト（頬内側・額）", price: 55000, vipPrice: 38500, description: "" },
          {
            name: "殺菌レーザー",
            price: 15400,
            vipPrice: 9900,
            description: "レーザーで殺菌を行いニキビの原因にアプローチ",
          },
        ],
        recommendations: [
          {
            type: "ニキビ治療の薬",
            items: [
              { name: "トレチノイン0.05%", price: 2750 },
              { name: "トレチノイン0.1%", price: 3300 },
              { name: "十味敗毒湯１ヶ月分", price: 3300 },
              { name: "桂枝茯苓丸１ヶ月分", price: 3300 },
              { name: "イソトレチノイン１ヶ月分", price: 6600 },
            ],
          },
          {
            type: "ニキビおすすめホームケア",
            items: [
              { name: "クレンジングソープ泡ピールケア", price: 3500 },
              { name: "Pureasy Mask", price: 1320 },
              { name: "Pureasy Mist", price: 6600 },
            ],
          },
        ],
      },
      {
        title: "乾燥治療",
        treatments: [
          {
            name: "ボライト（全顔）",
            price: 165000,
            vipPrice: 104500,
            description: "美肌用のヒアルロン酸　乾燥・赤み・毛穴凹凸・艶感改善",
          },
          { name: "ボライト（頬のみ）", price: 110000, vipPrice: 71500, description: "" },
          { name: "ボライト（頬内側・額）", price: 55000, vipPrice: 38500, description: "" },
          { name: "ボライト(追加)", price: 55000, vipPrice: 38500, description: "肌状態をみながらご相談" },
          {
            name: "エレクトロポレーション（１回）",
            price: 16500,
            vipPrice: 11000,
            description: "肌の深部まで保湿・肌再生・細胞活性",
          },
          {
            name: "エレクトロポレーション（５回）",
            price: 68750,
            vipPrice: 50600,
            description: "単回治療より13750円お得",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→幹細胞",
            price: 2200,
            vipPrice: 2200,
            description: "あらゆる肌悩みに効果を出したい時に",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→エクソソーム",
            price: 11000,
            vipPrice: 11000,
            description: "強い肌荒れや慢性炎症にも効果を出したい時に",
          },
        ],
        recommendations: [
          {
            type: "乾燥治療おすすめ",
            items: [{ name: "ボライト（頬のみ）", price: 110000 }],
          },
          {
            type: "乾燥治療おすすめホームケア",
            items: [
              { name: "Wiqo Cream", price: 9900 },
              { name: "Pureasy Mask", price: 1320 },
              { name: "Pureasy Mist", price: 6600 },
            ],
          },
        ],
      },
      {
        title: "赤み治療",
        treatments: [
          {
            name: "エレクトロポレーション（１回）",
            price: 16500,
            vipPrice: 11000,
            description: "肌の深部まで保湿・赤みに効果のあるビタミンCで",
          },
          {
            name: "エレクトロポレーション（５回）",
            price: 68750,
            vipPrice: 50600,
            description: "単回治療より13750円お得",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→幹細胞",
            price: 2200,
            vipPrice: 2200,
            description: "あらゆる肌悩みに効果を出したい時に",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→エクソソーム",
            price: 11000,
            vipPrice: 11000,
            description: "強い肌荒れや慢性炎症にも効果を出したい時に",
          },
          {
            name: "ボライト（全顔）",
            price: 165000,
            vipPrice: 104500,
            description: "赤み・毛穴・乾燥すべての改善を１つ＊１回の治療で",
          },
          { name: "ボライト（頬のみ）", price: 110000, vipPrice: 71500, description: "" },
          { name: "ボライト（頬内側・額）", price: 55000, vipPrice: 38500, description: "" },
          { name: "ボライト（追加）", price: 55000, vipPrice: 38500, description: "肌状態をみながらご相談" },
          { name: "赤み取りレーザー", price: 15400, vipPrice: 9900, description: "毛細血管の拡張を抑えます" },
        ],
        recommendations: [
          {
            type: "赤みおすすめ治療",
            items: [
              { name: "赤み取りレーザー", price: 15400 },
              { name: "ボライト（頬のみ）", price: 110000 },
            ],
          },
          {
            type: "赤みおすすめホームケア",
            items: [
              { name: "Wiqo Cream", price: 9900 },
              { name: "Pureasy Mask", price: 1320 },
              { name: "Pureasy Mist", price: 6600 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "首・デコルテ",
    mainTitles: [
      {
        title: "首のボリューム改善・たるみ治療",
        treatments: [
          {
            name: "プロファイロ（初回限定）",
            price: 77000,
            vipPrice: 55000,
            description: "自己組織の活性化を利用して痩せた首のボリュームを戻します",
          },
          { name: "プロファイロ", price: 99000, vipPrice: 77000, description: "" },
          { name: "ヒアルロン酸１本", price: 77000, vipPrice: 60500, description: "デザインしながら首を綺麗に" },
          { name: "HIFU（顔＋首）", price: 44000, vipPrice: 38500, description: "首から額までリフトアップ" },
          { name: "脂肪溶解注射(１cc)", price: 2750, vipPrice: 1750, description: "フェイスラインの脂肪を撃退" },
          { name: "糸モノリフト１０本〜", price: 39600, vipPrice: 33000, description: "" },
          { name: "首ボトックス＊", price: 39600, vipPrice: 34650, description: "首の縦シワ改善" },
          { name: "ボライト", price: 77000, vipPrice: 60500, description: "首の横シワ改善" },
        ],
        recommendations: [
          {
            type: "首おすすめ治療",
            items: [
              { name: "プロファイロ（初回限定）", price: 39600 },
              { name: "糸モノリフト１０本〜", price: 110000 },
            ],
          },
        ],
      },
      {
        title: "デコルテ治療",
        treatments: [
          {
            name: "プロファイロ（初回限定）",
            price: 77000,
            vipPrice: 55000,
            description: "自己組織の活性化を利用してデコルテのハリを改善",
          },
          { name: "プロファイロ", price: 99000, vipPrice: 77000, description: "" },
          {
            name: "ヒアルロン酸１本",
            price: 77000,
            vipPrice: 60500,
            description: "デザインしながらデコルテを綺麗に",
          },
          { name: "HIFU", price: 44000, vipPrice: 38500, description: "デコルテのたるみを改善" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "デコルテのハリ・つやを改善",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
        ],
        recommendations: [
          {
            type: "デコルテおすすめ治療",
            items: [
              { name: "プロファイロ（初回限定）", price: 77000 },
              { name: "マッサージピーリング（５回）", price: 46200 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "肩",
    mainTitles: [
      {
        title: "肩こり・肩はば治療",
        treatments: [
          { name: "肩ボトックス", price: 77000, vipPrice: 60500, description: "肩のハリを緩和して首を長く見せる" },
          {
            name: "スーパー肩ボトックス",
            price: 110000,
            vipPrice: 89650,
            description: "肩のハリを緩和して首を長く見せる",
          },
        ],
        recommendations: [
          {
            type: "肩おすすめ治療",
            items: [{ name: "肩ボトックス", price: 77000 }],
          },
        ],
      },
    ],
  },
  {
    name: "痩身",
    mainTitles: [
      {
        title: "痩身治療",
        treatments: [
          { name: "脂肪溶解注射（1cc）", price: 2750, vipPrice: 1750, description: "脂肪を溶かして撃退" },
          {
            name: "冷却HIFU（１回）",
            price: 55000,
            vipPrice: 33000,
            description: "ダウンタイムや痛みをほぼなくたるみを改善します",
          },
          { name: "冷却HIFU（３回）", price: 132000, vipPrice: 89100, description: "" },
          { name: "冷却HIFU（１０回）", price: 385000, vipPrice: 275000, description: "" },
        ],
        recommendations: [
          {
            type: "痩身おすすめ治療",
            items: [{ name: "脂肪溶解注射（1cc）", price: 2750 }],
          },
          {
            type: "痩身治療の処方薬",
            items: [
              { name: "リベルサス3mg 7日間", price: 3300 },
              { name: "リベルサス3mg 30日間", price: 11000 },
              { name: "リベルサス7mg 7日間", price: 6600 },
              { name: "リベルサス7mg 30日間", price: 22000 },
              { name: "防風通聖散１ヶ月分", price: 3300 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "点滴",
    mainTitles: [
      {
        title: "点滴治療",
        treatments: [
          {
            name: "高濃度ビタミンC（１０g）",
            price: 7700,
            vipPrice: 6600,
            description: "美肌・血管疾患・老化・がん等全身の健康に。免疫UP疲労回復にも効果覿面",
          },
          {
            name: "高濃度ビタミンC（２０g）",
            price: 11000,
            vipPrice: 8800,
            description: "美肌・血管疾患・老化・がん等全身の健康に。免疫UP疲労回復にも効果覿面",
          },
          { name: "G6PD1検査", price: 4400, vipPrice: 4400, description: "20g治療前に必須な検査です" },
        ],
        recommendations: [],
      },
    ],
  },
  {
    name: "二の腕",
    mainTitles: [
      {
        title: "二の腕・毛孔性苔癬治療",
        treatments: [
          {
            name: "プロファイロ（初回限定）",
            price: 77000,
            vipPrice: 55000,
            description: "二の腕のたるみとシワを改善",
          },
          { name: "プロファイロ", price: 99000, vipPrice: 77000, description: "" },
          {
            name: "脂肪溶解注射(１cc)",
            price: 2750,
            vipPrice: 1750,
            description: "二の腕を注射だけで細くしていきます",
          },
          {
            name: "冷却HIFU（１回）",
            price: 55000,
            vipPrice: 33000,
            description: "ダウンタイムや痛みをほぼなくたるみを改善します",
          },
          { name: "冷却HIFU（３回）", price: 132000, vipPrice: 89100, description: "" },
          { name: "冷却HIFU（１０回）", price: 385000, vipPrice: 275000, description: "" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "ハリ・小ジワを改善/プロファイロとの併用時1100円引き",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
          { name: "ダーマペン（１回）", price: 20900, vipPrice: 16500, description: "二の腕の気になるポツポツに" },
          { name: "ダーマペン（５回）", price: 88000, vipPrice: 66000, description: "単回治療より16500円お得に" },
        ],
        recommendations: [
          {
            type: "二の腕おすすめ治療",
            items: [
              { name: "脂肪溶解注射(１cc)", price: 2750 },
              { name: "ダーマペン（１回）", price: 20900 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "腹部",
    mainTitles: [
      {
        title: "腹部治療",
        treatments: [
          {
            name: "脂肪溶解注射（1cc）",
            price: 2750,
            vipPrice: 1750,
            description: "脂肪を溶かしてすっきりしたお腹に",
          },
          {
            name: "冷却HIFU（１回）",
            price: 55000,
            vipPrice: 33000,
            description: "ダウンタイムや痛みをほぼなく脂肪の燃焼",
          },
          { name: "冷却HIFU（３回）", price: 132000, vipPrice: 89100, description: "" },
          { name: "冷却HIFU（１０回）", price: 385000, vipPrice: 275000, description: "" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "妊娠線などのシワを改善(１回：２０cm＊２０cmの治療範囲以内)",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
        ],
        recommendations: [
          {
            type: "腹部治療おすすめ",
            items: [{ name: "脂肪溶解注射（1cc）", price: 2750 }],
          },
        ],
      },
    ],
  },
  {
    name: "ヒップ",
    mainTitles: [
      {
        title: "ヒップ治療",
        treatments: [
          {
            name: "脂肪溶解注射（1cc）",
            price: 2750,
            vipPrice: 1750,
            description: "脂肪をなくしてたるんだお尻を改善",
          },
          {
            name: "冷却HIFU（１回）",
            price: 55000,
            vipPrice: 33000,
            description: "ダウンタイムや痛みをほぼない脂肪の燃焼治療",
          },
          { name: "冷却HIFU（３回）", price: 132000, vipPrice: 89100, description: "" },
          { name: "冷却HIFU（１０回）", price: 385000, vipPrice: 275000, description: "" },
          {
            name: "マヌカピーリング（初回限定）",
            price: 16500,
            vipPrice: 14300,
            description: "できものや荒れ・色素沈着に",
          },
          { name: "マヌカピーリング（１回）", price: 26400, vipPrice: 20900, description: "" },
          { name: "マヌカピーリング（３回）", price: 77000, vipPrice: 56100, description: "単回治療より2500円お得" },
          {
            name: "マヌカピーリング（５回）",
            price: 121000,
            vipPrice: 82500,
            description: "単回治療より11500円お得",
          },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "妊娠線などのシワを改善(１回：２０cm＊２０cmの治療範囲以内)",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
        ],
        recommendations: [
          {
            type: "ヒップおすすめ治療",
            items: [{ name: "マヌカピーリング（初回限定）", price: 16500 }],
          },
          {
            type: "ヒップおすすめホームケア",
            items: [{ name: "シスペラ", price: 34100 }],
          },
        ],
      },
    ],
  },
  {
    name: "背中",
    mainTitles: [
      {
        title: "背中（首下〜腰上）治療",
        treatments: [
          {
            name: "マヌカピーリング（初回限定）",
            price: 16500,
            vipPrice: 14300,
            description: "マヌカハニーで保湿・抗菌・抗炎症しながらいらない角質除去/できものや荒れ・色素沈着に",
          },
          { name: "マヌカピーリング（１回）", price: 26400, vipPrice: 20900, description: "" },
          { name: "マヌカピーリング（３回）", price: 77000, vipPrice: 56100, description: "単回治療より2200円お得" },
          {
            name: "マヌカピーリング（５回）",
            price: 121000,
            vipPrice: 82500,
            description: "単回治療より11000円お得",
          },
          {
            name: "マッサージピーリング（１回）",
            price: 22000,
            vipPrice: 19800,
            description: "背中の肌のハリつやに",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 99000,
            vipPrice: 88000,
            description: "単回治療より11000円お得",
          },
          {
            name: "エレクトロポレーション（１回）",
            price: 29700,
            vipPrice: 22000,
            description: "皮脂腺の抑制や乾燥の改善で背中を綺麗に",
          },
          {
            name: "エレクトロポレーション（５回）",
            price: 137500,
            vipPrice: 99000,
            description: "単回治療より11000円お得",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→幹細胞",
            price: 3300,
            vipPrice: 3300,
            description: "あらゆる肌悩みに効果を出したい時に",
          },
          {
            name: "エレクトロポレーション薬剤アップグレード→エクソソーム",
            price: 12100,
            vipPrice: 12100,
            description: "強い肌荒れや慢性炎症にも効果を出したい時に",
          },
          {
            name: "ダーマペン（１回）",
            price: 44000,
            vipPrice: 33000,
            description: "大きな毛穴の開き・クレーターの凹凸・ニキビ",
          },
          { name: "ダーマペン（５回）", price: 198000, vipPrice: 159500, description: "単回治療より22000円お得に" },
          { name: "エクソリューション・ダーマリバイブ（初回限定）", price: 66000, vipPrice: 55000, description: "" },
          {
            name: "エクソリューション・ダーマリバイブ（１回）",
            price: 99000,
            vipPrice: 77000,
            description: "エクソソームとダーマペンで肌を生まれかわらせましょう",
          },
          {
            name: "エクソリューション・ダーマリバイブ（５回）",
            price: 484000,
            vipPrice: 330000,
            description: "単回治療より82500円お得",
          },
          { name: "マヌカミラクルリフレッシュ（初回限定）", price: 49500, vipPrice: 39600, description: "" },
          {
            name: "マヌカミラクルリフレッシュ（１回）",
            price: 64900,
            vipPrice: 49500,
            description: "マヌカハニーによる自然な肌改善とダーマペンの治療で肌をリフレッシュさせます",
          },
          {
            name: "マヌカミラクルリフレッシュ（５回）",
            price: 275000,
            vipPrice: 220000,
            description: "単回治療より5500円お得に",
          },
          {
            name: "ダーマペンオプション１つ",
            price: 8800,
            vipPrice: 8800,
            description:
              "①ニキビや凹凸・赤みや美白に強いPDNR製剤②皮脂腺抑制効果のあるボトックス③施術後のマッサージピーリング（複数選択可）",
          },
          { name: "ダーマペンオプション２つ", price: 14300, vipPrice: 14300, description: "" },
          { name: "ダーマペンオプション３つ", price: 19800, vipPrice: 19800, description: "" },
          {
            name: "殺菌レーザー",
            price: 27500,
            vipPrice: 22000,
            description: "レーザーで殺菌を行いニキビの原因にアプローチ",
          },
        ],
        recommendations: [
          {
            type: "背中治療の薬",
            items: [
              { name: "十味敗毒湯１ヶ月分", price: 3300 },
              { name: "桂枝茯苓丸１ヶ月分", price: 3300 },
              { name: "イソトレチノイン１ヶ月分", price: 6600 },
            ],
          },
          {
            type: "背中おすすめホームケア",
            items: [
              { name: "クレンジングソープ泡ピールケア", price: 3500 },
              { name: "Pureasy Mist", price: 6600 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "太もも",
    mainTitles: [
      {
        title: "太もも治療",
        treatments: [
          { name: "脂肪溶解注射（1cc）", price: 2750, vipPrice: 1750, description: "脂肪をなくしてすっきりした足に" },
          {
            name: "冷却HIFU（１回）",
            price: 55000,
            vipPrice: 33000,
            description: "ダウンタイムや痛みをほぼなくたるみを改善します",
          },
          { name: "冷却HIFU（３回）", price: 132000, vipPrice: 89100, description: "" },
          { name: "冷却HIFU（１０回）", price: 385000, vipPrice: 275000, description: "" },
          {
            name: "マヌカピーリング（初回限定）",
            price: 16500,
            vipPrice: 14300,
            description: "できものや荒れ・色素沈着に",
          },
          { name: "マヌカピーリング（１回）", price: 26400, vipPrice: 20900, description: "" },
          { name: "マヌカピーリング（３回）", price: 77000, vipPrice: 56100, description: "単回治療より2500円お得" },
          {
            name: "マヌカピーリング（５回）",
            price: 121000,
            vipPrice: 82500,
            description: "単回治療より11500円お得",
          },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "妊娠線などのシワを改善(１回：２０cm＊２０cmの治療範囲以内)",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
        ],
        recommendations: [
          {
            type: "太ももおすすめ治療",
            items: [
              { name: "脂肪溶解注射（1cc）", price: 2750 },
              { name: "マヌカピーリング（初回限定）", price: 16500 },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ふくらはぎ",
    mainTitles: [
      {
        title: "ふくらはぎ治療",
        treatments: [
          {
            name: "ふくらはぎボトックス（１００単位）",
            price: 77000,
            vipPrice: 60500,
            description: "ふくらはぎの盛り上がりに",
          },
          {
            name: "スーパーふくらはぎボトックス（１５０単位）",
            price: 110000,
            vipPrice: 89650,
            description: "効果をさらに出したい方に",
          },
          { name: "脂肪溶解注射（1cc）", price: 2750, vipPrice: 1750, description: "脂肪をなくしてすっきりした足に" },
          {
            name: "冷却HIFU（１回）",
            price: 55000,
            vipPrice: 33000,
            description: "ダウンタイムや痛みをほぼない脂肪の燃焼治療",
          },
          { name: "冷却HIFU（３回）", price: 132000, vipPrice: 89100, description: "" },
          { name: "冷却HIFU（１０回）", price: 385000, vipPrice: 275000, description: "" },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "妊娠線などのシワを改善(１回：２０cm＊２０cmの治療範囲以内)",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
        ],
        recommendations: [
          {
            type: "ふくらはぎおすすめ治療",
            items: [{ name: "スーパーふくらはぎボトックス（１５０単位）", price: 110000 }],
          },
        ],
      },
    ],
  },
  {
    name: "黒ずみ・色素沈着（身体）",
    mainTitles: [
      {
        title: "黒ずみ・色素沈着（身体）治療",
        treatments: [
          {
            name: "マヌカピーリング",
            price: "部位により異なります",
            vipPrice: "部位により異なります",
            description: "マヌカハニーで保湿・抗菌・抗炎症しながらいらない角質除去/できものや荒れ・色素沈着に",
          },
          {
            name: "マッサージピーリング（１回）",
            price: 11000,
            vipPrice: 9900,
            description: "よりマイルドに治療したい方に(１回：２０cm＊２０cmの治療範囲以内)",
          },
          {
            name: "マッサージピーリング（５回）",
            price: 46200,
            vipPrice: 44000,
            description: "単回治療より8800円お得",
          },
          {
            name: "エクソソーム注射 1v",
            price: 82500,
            vipPrice: 60500,
            description: "炎症性色素沈着などの色素沈着に(安全性確保のため当院ではエクソソーム点滴は行いません)",
          },
          {
            name: "Neo Found １回",
            price: 38500,
            vipPrice: 29000,
            description: "色素沈着と肌の弾力改善",
          },
        ],
        recommendations: [
          {
            type: "おすすめホームケア",
            items: [{ name: "シスペラ", price: 34100 }],
          },
        ],
      },
    ],
  },
]

return (
  <div className="min-h-screen bg-[#f8f4ec] py-16">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="mb-10">
        <Link
          href="/beauty"
          className="inline-flex items-center text-[#b89e69] hover:text-[#a08a59] transition-colors duration-300 font-medium"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          美容クリニックのページに戻る
        </Link>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-[#b89e69] mb-16 tracking-tight">料金表</h1>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-[#e8e0d0]">
        <p className="text-gray-700 mb-5 leading-relaxed text-lg">
          アポロンビューティークリニックの料金表です。各施術の詳細については、施術内容ページをご確認ください。
          料金は税込表示となっております。
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
          ※ 実際の料金は、カウンセリング時に医師が患者様の状態を確認した上で決定いたします。
          表示価格は目安となりますので、詳細はお問い合わせください。
        </p>

        <div className="flex justify-between items-center mt-8">
          <Link
            href="/treatments"
            className="inline-block px-8 py-4 border-2 border-[#b89e69] text-[#b89e69] rounded-full hover:bg-[#b89e69] hover:text-white transition-colors duration-300 font-medium text-lg shadow-sm hover:shadow-md"
          >
            施術内容の詳細を見る
          </Link>

          <button
            onClick={handleVIPPassword}
            className="inline-block px-6 py-3 border-2 border-[#b89e69] text-[#b89e69] rounded-full hover:bg-[#b89e69] hover:text-white transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
          >
            パスワード入力
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-[#e8e0d0] hover:shadow-lg transition-shadow duration-300"
          >
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full px-8 py-5 text-left flex justify-between items-center bg-white hover:bg-[#f8f4ec] transition-colors duration-200"
            >
              <span className="text-xl font-semibold text-[#b89e69]">{category.name}</span>
              <div className="bg-[#f8f4ec] p-2 rounded-full">
                {expandedCategory === category.name ? (
                  <ChevronUp className="h-6 w-6 text-[#b89e69]" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-[#b89e69]" />
                )}
              </div>
            </button>

            {expandedCategory === category.name && (
              <div className="px-6 pb-4">
                <div className="space-y-4 mt-4">
                  {category.mainTitles.map((mainTitle) => (
                    <div key={mainTitle.title} className="border border-[#e8e0d0] rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleMainTitle(mainTitle.title)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#f8f4ec] hover:bg-[#f0ece0] transition-colors duration-200"
                      >
                        <span className="font-medium text-lg text-[#b89e69]">{mainTitle.title}</span>
                        {expandedMainTitle === mainTitle.title ? (
                          <ChevronUp className="h-5 w-5 text-[#b89e69]" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-[#b89e69]" />
                        )}
                      </button>

                      {expandedMainTitle === mainTitle.title && (
                        <div className="bg-white">
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead className="bg-[#f8f4ec]">
                                <tr>
                                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    施術名
                                  </th>
                                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-600 uppercase tracking-wider">
                                    料金
                                  </th>
                                  {showVIPPrices && (
                                    <th className="px-6 py-3 text-right text-sm font-medium text-red-600 uppercase tracking-wider">
                                      VIP価格
                                    </th>
                                  )}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#e8e0d0]">
                                {mainTitle.treatments.map((treatment) => (
                                  <tr key={treatment.name} className="hover:bg-[#f8f4ec]">
                                    <td className="px-6 py-4">
                                      <div>
                                        <div className="font-medium">{treatment.name}</div>
                                        <div className="text-sm text-gray-500 mt-1">{treatment.description}</div>
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap font-medium">
                                      {typeof treatment.price === "number"
                                        ? treatment.price.toLocaleString() + "円"
                                        : treatment.price}
                                    </td>
                                    {showVIPPrices && (
                                      <td className="px-6 py-4 text-right whitespace-nowrap font-medium text-red-600">
                                        {typeof treatment.vipPrice === "number"
                                          ? treatment.vipPrice.toLocaleString() + "円"
                                          : treatment.vipPrice}
                                      </td>
                                    )}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {mainTitle.recommendations && (
                            <div className="bg-[#f8f4ec] p-4 mt-2 rounded-md mx-4 mb-4">
                              {mainTitle.recommendations.map((rec, index) => (
                                <div key={index} className="mb-2 last:mb-0">
                                  <div className="font-medium text-[#b89e69]">{rec.type}</div>
                                  <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                                    {rec.items.map((item, idx) => (
                                      <li key={idx}>{item.name}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8 border border-[#e8e0d0]">
        <p className="text-gray-700 mb-8 text-lg">
          お気軽にお問い合わせください。カウンセリングは無料で承っております。
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://www.instagram.com/apollon.b.c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 shadow-md hover:shadow-lg text-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            Instagramで予約
          </a>
          <a
            href="https://lin.ee/UqN5FdS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#00B900] text-white rounded-full hover:bg-[#00a000] transition-colors duration-300 shadow-md hover:shadow-lg text-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            LINEで相談
          </a>
          <button
            onClick={handleVIPPassword}
            className="inline-block px-6 py-3 border-2 border-[#b89e69] text-[#b89e69] rounded-full hover:bg-[#b89e69] hover:text-white transition-colors duration-300 font-medium shadow-sm hover:shadow-md"
          >
            パスワード入力
          </button>
        </div>
      </div>
    </div>
  </div>
)
}
