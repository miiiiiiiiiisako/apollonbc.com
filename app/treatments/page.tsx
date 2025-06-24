"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react"

// 施術内容のデータ
const treatments = [
  {
    id: "profhilo",
    name: "プロファイロ立体リフト",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">プロファイロ立体リフト</h3>
        <p className="mb-4">
          プロファイロは革新的なヒアルロン酸治療で、従来の単なるボリューム注入とは異なり、肌の構造そのものを再構築するバイオリモデリング効果を持ちます。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          プロファイロ立体リフトは、肌のハリや弾力を向上させる効果が高く、特に顔全体や首などの広範囲を自然に若返らせることができます。施術後は物理的にリフトアップされるため、施術直後から皮膚のタイトニング効果を実感できます。臨床評価では、施術後にしわが減少し薄くなる効果と、頬下あたりの皮膚弛みが軽減することが確認されています。ベクトラという機器を使用した測定では、処置前と処置から数週間後のボリューム比較で、皮膚が斜め右上に向かって引き上がる効果が実証されています。
        </p>
        <p className="mb-4">
          目じりや額の小じわ、ほうれい線の改善効果も高く、頬のたるみやもたつき、首のしわも同時に改善します。これらの効果は、プロファイロの高濃度ヒアルロン酸が皮膚組織に均一に広がり、皮膚細胞を刺激して自然なコラーゲン生成を促進することで達成されます。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">プロファイロ立体リフトの施術は以下のステップで進行します：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">カウンセリング：洗顔後、お肌の状態を医師が確認し、施術の詳細な説明を行います。</li>
          <li className="mb-1">施術前準備：治療部位を消毒し、必要に応じて表面麻酔を行います。</li>
          <li className="mb-1">
            注入：医師が高濃度ヒアルロン酸を特定のポイントに注入します。注入は精密に行われ、顔全体で約5ポイントの注入で広範囲にヒアルロン酸が拡散します。
          </li>
        </ol>
        <p className="mb-4">治療時間は全体で約20分程度と非常に短く、忙しい方でも負担なく受けられます。</p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          プロファイロは従来のヒアルロン酸注入と比較してダウンタイムが短いのが特徴です。施術直後は針穴程度の傷跡ができますが、すぐに消失します。体質により稀に内出血が出る場合がありますが、これらはメイクで隠せる程度のものです。額や首の施術をご希望される場合は、施術直後〜当日にかけて凹凸が目立ちますので、帽子や首もとのスカーフなどのご持参を推奨いたします。
        </p>
        <p className="mb-3">施術後の生活については以下の点が重要です：</p>
        <ul className="list-disc list-inside mb-3">
          <li className="mb-1">メイクは当日から可能です</li>
          <li className="mb-1">シャワーと入浴も当日から可能です</li>
          <li className="mb-1">洗顔は患部を強く擦らないように注意してください</li>
          <li className="mb-1">施術当日は温泉やサウナ、激しい運動と過度な飲酒は避けることが推奨されています</li>
        </ul>
        <p>
          プロファイロの大きな利点として、注入回数・メンテナンス頻度が少ない点が挙げられます。通常1ヶ月に1回のペースで計2回の施術で治療が完了し、その後のメンテナンスは4〜6ヶ月に1回程度となるため、通院回数が大幅に少なくて済みます。
        </p>
      </>
    ),
  },
  {
    id: "botox",
    name: "ボトックスマルチユース",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">ボトックスマルチユース</h3>
        <p className="mb-4">
          ボトックス治療は、ボツリヌストキシンを使用して筋肉の過剰な収縮を抑制する治療法です。マルチユースとは、様々な用途に対応する多目的な使用法を指します。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">ボトックスマルチユースは、以下のような多岐にわたる効果があります：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">肥大した筋肉を萎縮させる作用があり、小顔効果や部分痩せ効果を得られます</li>
          <li className="mb-1">筋肉の緊張をほぐす効果があり、筋肉のコリが減少します</li>
          <li className="mb-1">皮膚の汗腺に作用させることで発汗量を減少させ、多汗症を改善します</li>
          <li className="mb-1">毛穴を引き締め、皮脂分泌を抑制する効果があります</li>
          <li className="mb-1">結果としてニキビが減少し、ハリや艶のある肌質へと改善する美肌効果も期待できます</li>
        </ul>
        <p className="mb-4">
          また、タレ目形成、人中短縮、口角挙上など様々な表情の調整にも使用できます。治療部位は多岐にわたり、眉間、額、目尻、エラ、バニーライン、ガミースマイル、頭皮など、お悩みに合わせて適用できます。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">ボトックス治療は以下の3つのステップで進行します：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            デザイン：医師が顔の構造や悩みを確認し、最適な注入位置と量を決定します。表情を作ってもらいながら、動きの確認や筋肉の状態を評価し、治療プランを立てます。
          </li>
          <li className="mb-1">
            表面麻酔（メニューと希望による）：痛みに敏感な方や特定の部位の治療では、表面麻酔を行うことがあります。これはオプションであり、ご
            希望やメニューによって適用されます。
          </li>
          <li className="mb-1">
            注射：医師が決定したデザインに従って、適切な部位に正確な量のボトックスを注入します。細い針を使用するため、痛みは比較的軽微です。
          </li>
        </ol>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">ボトックス治療のダウンタイムは以下の特徴があります：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">
            内出血：注射針を刺した部位に内出血が生じることがあります。特に血管の多い部位では発生しやすく、数日から1週間程度で自然に消退します。
          </li>
          <li className="mb-1">
            頭痛：まれに一時的な頭痛が生じることがあります。通常は数時間から1日程度で改善します。
          </li>
          <li className="mb-1">
            腫れや赤み：注射部位に軽度の腫れや赤みが生じることがありますが、通常は数時間で引き収まります。
          </li>
          <li className="mb-1">効果発現：効果が現れるまでには約3〜7日かかります。2〜3週間程度で最大効果に達します。</li>
          <li className="mb-1">日常生活：施術直後から通常の日常生活に戻ることができます。</li>
        </ul>
        <p>
          効果の持続期間は個人差がありますが、平均して3〜6ヶ月程度です。最大効果が出るまで時間がかかるため、特別なイベントの前には余裕をもって治療を受けることをお勧めします。
        </p>
      </>
    ),
  },
  {
    id: "hyaluronic-acid",
    name: "ヒアルロン酸デザイン注入",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">ヒアルロン酸デザイン注入</h3>
        <p className="mb-4">
          ヒアルロン酸デザイン注入は、患者一人ひとりの顔のバランスや骨格を考慮し、最適な箇所に適切な量のヒアルロン酸を注入する治療法です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">ヒアルロン酸デザイン注入の主な効果は以下の通りです：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">加齢による顔のボリューム減少を補い、構造的な若返りを実現します</li>
          <li className="mb-1">皮膚内部からのリフトアップ効果により、しわやほうれい線が目立たなくなります</li>
          <li className="mb-1">ヒアルロン酸の高い保水性によって、肌のハリや弾力が改善されます</li>
          <li className="mb-1">真皮内に注入されたヒアルロン酸は、内側から表皮を持ち上げ、しわの溝や凹みを改善します</li>
        </ul>
        <p className="mb-4">
          本治療は単にボリュームを増やすだけではなく、顔の立体的なバランスを整える「ボリュームコントロール」を行うことが特徴です。これにより、自然で調和のとれた若々しい印象を実現します。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">ヒアルロン酸デザイン注入は以下のステップで進められます：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            医師による診察・説明：気になる部分にヒアルロン酸の適応があるかを診察し、最適な治療計画を立てます
          </li>
          <li className="mb-1">表面麻酔（希望者のみ）：表面麻酔を約30分行います</li>
          <li className="mb-1">ヒアルロン酸注入：気になる箇所に丁寧にヒアルロン酸を注入します。時間は30分〜です</li>
        </ol>
        <p className="mb-4">
          カウンセリングでは、気になるシワやくぼみの深さや状態を確認し、注入箇所や薬剤の量など最適な方法を提案します。施術前にはメイクを落とし、清潔な状態で治療を受けることが重要です。
        </p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">ヒアルロン酸デザイン注入のダウンタイムは以下の通りです：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">
            内出血：注射部位に内出血が生じることは一般的です。特に唇や目の周りなど、血管が豊富な部位では内出血が起こりやすく、1週間程度持続することがあります。
          </li>
          <li className="mb-1">メイク：施術当日はメイクを控え、翌日からメイクが可能です。</li>
          <li className="mb-1">シャワー：シャワーは当日から可能ですが、患部を強くこすらないよう注意が必要です。</li>
          <li className="mb-1">腫れ：注入部位に軽度から中等度の腫れが生じることがあり、通常2〜3日で落ち着きます。</li>
          <li className="mb-1">違和感：注入した部位に違和感を覚えることがありますが、1〜2週間で自然に馴染みます。</li>
        </ul>
        <p>
          治療効果の持続期間は個人差がありますが、一般的には1〜2年程度です。より長期的な効果を得るために、最初は4〜12ヶ月に1度のペースで数回注入し、定着率をアップさせることが推奨されます。
        </p>
      </>
    ),
  },
  {
    id: "pilla",
    name: "PILLA（PLLA製剤）",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">PILLA</h3>
        <p className="mb-4">PILLAは、肌の再生と若返りを目的とした革新的な治療法です。</p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">PILLAの主な効果は以下の通りです：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">コラーゲンとエラスチンの生成を促進し、肌のハリと弾力を向上させます</li>
          <li className="mb-1">しわやたるみを改善し、肌の質感を全体的に向上させます</li>
          <li className="mb-1">肌のテクスチャーを改善し、なめらかな肌質へと導きます</li>
          <li className="mb-1">肌のトーンを均一にし、くすみを改善します</li>
          <li className="mb-1">肌の保湿力を高め、乾燥を防ぎます</li>
        </ul>
        <p className="mb-4">
          PILLAは肌の表面だけでなく、真皮層にまで作用して肌の根本的な若返りを促進するため、持続的な効果が期待できます。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">PILLA治療は以下のステップで行われます：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">洗顔・準備：施術前に肌を清潔にします</li>
          <li className="mb-1">PILLA治療：薬剤を注入します</li>
        </ol>
        <p className="mb-4">治療時間は全体で約20分程度です。</p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">PILLAのダウンタイムは比較的軽度です：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">赤み：施術直後は軽度から中等度の赤みが生じますが、通常は24〜48時間以内に軽減します</li>
          <li className="mb-1">軽度の腫れ：施術部位に軽度の腫れが生じることがありますが、数日以内に消退します</li>
        </ul>
        <p>徐々に効果が現れ始めます。最適な結果を得るためには、2〜3週間隔で3〜4回の治療が推奨されています。</p>
      </>
    ),
  },
  {
    id: "shopping-lift",
    name: "ショッピングリフト",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">ショッピングリフト</h3>
        <p className="mb-4">
          ショッピングリフトは、超極細の医療用吸収糸を使用した革新的なリフトアップ治療です。その名前は、施術後すぐに買い物に行けるほどダウンタイムが少ないことに由来しています。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          ショッピングリフトは、顔や首の皮膚引き締め改善をしながら美肌効果も同時に得られる一石二鳥の治療法です。この治療の主要な作用メカニズムは、医療用の吸収糸が真皮層に存在する線維芽細胞を刺激することで、コラーゲン産生を促進する点にあります。これにより、肌全体にハリや弾力が生まれ、若々しくみずみずしい肌へと導かれます。
        </p>
        <p className="mb-3">
          具体的な効果としては、引き締め効果が処置直後から実感でき、お肌のハリや弾力アップなどの美肌効果は3週間後から2ヶ月かけて徐々に現れます。また、目元や頬のたるみの改善、シワやたるみの予防など、多岐にわたる肌質改善効果が期待できます。
        </p>
        <p className="mb-4">
          ショッピングリフトは一般的なとげ（コグ）付きの糸リフトと比較しても、特に施術中の痛みの少なさ、腫れや内出血などのダウンタイムの短さを追求した治療法となっています。より自然な若返り効果と、短いダウンタイムが特徴です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">ショッピングリフトの施術は、以下のステップで進行します：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            初期カウンセリング：医師が患者の肌の状態を評価し、治療計画を立てます。悩みに合わせて必要な糸の本数を決定します。
          </li>
          <li className="mb-1">
            表面麻酔：治療による痛みを軽減するために表面麻酔を行います。これにより、施術中の不快感を最小限に抑えることができます。
          </li>
          <li className="mb-1">
            糸の挿入：極細針で医療用の吸収糸を皮膚内に注入します。糸は皮膚内に留まり、時間とともに吸収されていきます。施術自体は約20〜40分程度と短時間で完了します。
          </li>
          <li className="mb-1">アフターケア：治療部位に感染防止のため外用薬を塗布します。</li>
        </ol>
        <p className="mb-4">
          治療は患者一人ひとりの悩みに合わせてカスタマイズでき、10本単位で本数を選択することができます。
        </p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          ショッピングリフトの最大の特徴はダウンタイムの短さです。施術名が示す通り、治療後すぐに買い物に行けるほどダウンタイムが少ないのが大きな利点です。
        </p>
        <p className="mb-3">具体的なダウンタイム症状としては：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">腫れや内出血のリスクが少ない</li>
          <li className="mb-1">針穴程度の小さな傷ですぐに消失</li>
          <li className="mb-1">違和感も少なく、従来の糸リフトと比べてダウンタイムが短い</li>
        </ul>
        <p className="mb-3">
          治療後の注意点としては、施術後24時間は激しい運動や過度な飲酒、高温の環境（サウナなど）を避けることが推奨されます。
        </p>
        <p>4〜6ヶ月ごとに定期的に治療を繰り返すことで、長期的な効果維持も可能です。</p>
      </>
    ),
  },
  {
    id: "fat-dissolving",
    name: "脂肪溶解注射",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">脂肪溶解注射</h3>
        <p className="mb-4">脂肪溶解注射は、メスを使わずに不要な脂肪を減少させることができる非外科的な治療法です。</p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          脂肪溶解注射は、脂肪細胞を分解する成分を直接脂肪層に注入することで、局所的な脂肪減少効果を得る治療法です。この治療は、二重あご、頬、顎下、二の腕、腹部など、様々な部位の余分な脂肪を標的にすることができます。
        </p>
        <p className="mb-3">
          注射に含まれる有効成分が脂肪細胞の細胞膜を破壊し、脂肪を液化させます。液化した脂肪は体内の代謝プロセスによって自然に排出されます。この治療は従来の脂肪吸引手術に比べて侵襲性が低く、回復期間も短いという大きな利点があります。
        </p>
        <p className="mb-4">
          治療効果は徐々に現れ、通常は複数回（2〜3週間毎に4回程度）の治療セッションが推奨されます。最終的な効果を得るまでには、製品や個人差にもよりますが、一般的に2〜3ヶ月かかることが多いです。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">脂肪溶解注射の一般的な治療ステップは以下の通りです：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">デザイン：医師が患者の脂肪分布を評価し、治療に適した部位を特定します。</li>
          <li className="mb-1">
            注射：医師が脂肪溶解剤を適切な深さと量で標的となる脂肪層に注入します。麻酔が含まれているので痛みはほぼ感じません。注射は細い針を使用し、治療部位全体に均等に分布するように複数箇所に行われます。
          </li>
        </ol>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          脂肪溶解注射のダウンタイムは使用する薬剤の種類によって異なりますが、通常は数日で治まります。使用する製品によっては1〜2週間程度続く場合もあります。
        </p>
        <p className="mb-3">一般的なダウンタイム症状には以下のものが含まれます：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">注射部位の腫れや赤み</li>
          <li className="mb-1">軽度から中等度の痛みや不快感</li>
          <li className="mb-1">内出血</li>
          <li className="mb-1">一時的な感覚の変化</li>
        </ul>
        <p>治療当日の激しい運動や過度な飲酒、長時間の入浴はお控えください。</p>
      </>
    ),
  },
  {
    id: "volite",
    name: "ボライト（スキンバイブ）",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">ボライト</h3>
        <p className="mb-4">ボライトは、肌の土台から改善する「肌育治療」として知られる先進的なヒアルロン酸治療です。</p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          ボライトは単なる注入剤ではなく、肌そのものを改善する「肌育ヒアルロン酸」と呼ばれています。その効果は主に以下の3つにまとめられます：
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            保水性（潤い）：ヒアルロン酸の高い保水力（1gで6Lの水を保持可能）により、ぷるぷるとした潤いのある肌へと導きます。この効果は最大9ヶ月持続するとされています。
          </li>
          <li className="mb-1">弾力性（ハリ）：肌の弾力性が向上し、もちもちとした弾力のある肌質を実現します。</li>
          <li className="mb-1">小じわの改善：キメが整った滑らかでスベスベな肌へと導きます。</li>
        </ol>
        <p className="mb-4">
          ボライトは肌の土台をケアすることで、肌を本来の健康的・機能的な状態に戻す治療です。例えるなら、乾いた土壌にたっぷりの水分を与えるようなものであり、肌の土壌を整えることで他の施術の効果も向上します。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">ボライト治療は以下のステップで進行します：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            カウンセリング：施術前に医師が肌の状態を確認し、ボライト治療が適しているかを判断します。乾燥、小じわ、ハリの低下などの症状に対して効果的です。
          </li>
          <li className="mb-1">表面麻酔：当院では注入時の痛みを緩和させるため、注入前に外用麻酔薬を塗布します。</li>
          <li className="mb-1">
            注入：極めて細い針で顔や首に細かく注射していきます。製剤の中にも局所麻酔薬が配合されているため、痛みは比較的軽微です。
          </li>
          <li className="mb-1">アフターケア：治療部位に感染防止のため外用薬を塗布します。</li>
        </ol>
        <p className="mb-4">
          最適な治療スケジュールとしては、初回治療の後、必要な場合は1ヶ月後に追加治療を行い、その後は6ヶ月ごとのメンテナンスが推奨されています。
        </p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">ボライト治療後のダウンタイムは比較的軽度ですが、以下のような症状が現れることがあります：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">腫れ：施術後に腫れが生じることがありますが、数時間～数日で軽快します。</li>
          <li className="mb-1">内出血：最も一般的な副作用であり、1週間程度で軽快します。</li>
          <li className="mb-1">
            その他のリスク：アレルギー、感染、硬結、皮膚の凹凸、血管閉塞などのリスクもありますが、これらは稀であり、必ず生じるものではありません。
          </li>
        </ul>
        <p>
          治療効果は約1ヶ月後には実感できますが、最大の効果は3〜4ヶ月後に現れるとされています。効果の持続期間は約9ヶ月程度です。
        </p>
      </>
    ),
  },
  {
    id: "dermapen",
    name: "ダーマペン4",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">ダーマペン4</h3>
        <p className="mb-4">
          ダーマペン4は微細な針で肌に穴を開け、肌の自然治癒力を活性化させる革新的な美容医療治療です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          ダーマペン4は極細の針で肌に無数の微細な穴を開けることで、肌の自己修復プロセスを活性化させる治療法です。この微細な穴が肌に適度な刺激を与えることで、コラーゲンやエラスチンの生成が促進されます。
        </p>
        <p className="mb-4">
          ダーマペン4の主な効果には、ニキビ跡の改善、小ジワや毛穴の開きの改善、肌質の全般的な向上、さらには傷跡やケロイドの改善なども含まれます。髪の毛よりも細い針を使用するため、旧世代のマイクロニードリング治療と比較して痛みが少なく、針の深さを調整することで様々な肌の悩みに対応できることが大きな特徴です。
        </p>

        <h4 className="text-lg font-medium mb-2">薬剤の違いによる効果の変化</h4>
        <p className="mb-3">
          ダーマペン4の大きな利点の一つは、様々な薬剤と併用できることです。実際、使用する薬剤によって治療効果は大きく変わり、患者一人ひとりの肌の悩みに合わせた治療が可能になります。当院では、PDRN塗布、エクソソーム塗布、マヌカピーリング追加施術の3種類があります。
        </p>

        <h5 className="text-base font-medium mb-2">PDRN（ポリデオキシリボヌクレオチド）　REINACure</h5>
        <p className="mb-3">
          PDRNはサーモン由来のDNA成分で、細胞の再生能力を高める効果があります。また当院のPDRN製剤は、PDRNのみでなくグロースファクター、植物幹細胞、ペプチドやコラーゲンも含まれており、PDRN単体の製剤に比べて多くの効果をしっかりと得ることができます。
        </p>
        <p className="mb-3">ダーマペン4と組み合わせることで、以下のような効果が期待できます：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">
            肌の引き締め効果：PDRNは肌細胞を活性化し、コラーゲンやエラスチンの生成を促進することで、肌にハリと弾力を与え、たるみやシワを改善します。
          </li>
          <li className="mb-1">高保湿効果：乾燥肌やカサつきを改善し、肌に潤いを与えます。</li>
          <li className="mb-1">抗炎症作用：ニキビ後の赤みなど、炎症後色素沈着を改善する効果があります。</li>
          <li className="mb-1">美白効果：メラニン生成を抑制し、シミやくすみを改善する効果も期待されています。</li>
        </ul>

        <h5 className="text-base font-medium mb-2">エクソソーム</h5>
        <p className="mb-3">
          エクソソームは細胞間で情報をやり取りする役割を持つ顆粒状物質で、細胞の修復や再生に大きく貢献します。ダーマペン4と併用することで：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">肌の再生プロセスを著しく活性化し、若々しい肌へと導きます。</li>
          <li className="mb-1">コラーゲン合成、血管形成、細胞増殖を促進し、創傷治癒をサポートします。</li>
          <li className="mb-1">肌のハリや艶感が向上し、より自然な若返り効果を実現します。</li>
        </ul>

        <h5 className="text-base font-medium mb-2">マヌカピーリング（マヌカハニーフェイシャル）</h5>
        <p className="mb-3">
          マヌカハニーを主成分としたピーリングをダーマペン4と組み合わせる治療法です。マヌカハニーの特性が活かされ、以下のような効果が期待できます：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">
            高い抗菌作用：マヌカハニーに含まれるメチルグリオキサールによる強力な抗菌効果で、ニキビや肌荒れを改善します。
          </li>
          <li className="mb-1">
            毛穴の黒ずみ・詰まりの改善：グリコール酸や乳酸などが毛穴の汚れや皮脂を効果的に除去します。
          </li>
          <li className="mb-1">ターンオーバー促進効果：肌の生まれ変わりを促進し、色素沈着を改善します。</li>
          <li className="mb-1">保湿作用：マヌカハニーは天然の保護膜となり水分を肌に閉じ込めてくれる効果があります。</li>
          <li className="mb-1">抗炎症作用：マヌカハニーは創傷治癒も促す強力な抗炎症作用を持っています。</li>
        </ul>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          ダーマペン4のダウンタイムは、使用する薬剤や針の深さ、個人の肌質によって大きく異なります。一般的なダウンタイムは1〜2週間程度ですが、特にエクソソームを用いた治療ではこれが大幅に短縮されます。
        </p>

        <h5 className="text-base font-medium mb-2">一般的なダウンタイム（1〜2週間）</h5>
        <p className="mb-3">通常のダーマペン4施術後は以下のような症状が現れることがあります：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">赤み：最も一般的な症状で、5日〜10日程度持続することがあります。</li>
          <li className="mb-1">腫れ：針の深さや施術の強度によっては、軽度から中等度の腫れが生じることがあります。</li>
          <li className="mb-1">乾燥・皮むけ：治療後1〜3日目から軽度の皮むけが始まることがあります。</li>
          <li className="mb-1">
            内出血：血管が豊富な部位では内出血が起こることがあり、これは1〜2週間程度残存する可能性があります。
          </li>
        </ul>

        <h5 className="text-base font-medium mb-2">エクソソームを用いた場合のダウンタイム（2〜3日）</h5>
        <p className="mb-3">
          エクソソームを併用したダーマペン4治療では、通常よりもダウンタイムが大幅に短縮されることが大きな利点です：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">赤みや腫れが少なく、施術後の不快感が軽減されます。</li>
          <li className="mb-1">通常1〜2週間かかるダウンタイムが、わずか2〜3日程度に短縮されます。</li>
          <li className="mb-1">肌の回復プロセスが加速するため、治療効果も早期に現れ始めます。</li>
        </ul>
        <p>
          エクソソームの細胞修復効果により、ダーマペン4による微細な損傷からの回復が著しく早まることがこの短いダウンタイムの理由です。多忙な方や、ダウンタイムが気になる方には特におすすめの選択肢となります。
        </p>
      </>
    ),
  },
  {
    id: "manuka-peeling",
    name: "マヌカピーリング",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">マヌカピーリング</h3>
        <p className="mb-4">
          マヌカピーリングは、マヌカハニーを配合した革新的なピーリング治療です。従来のピーリングに比べて刺激が少なく、効果が高いことが特徴です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          マヌカハニーはオーストラリアおよびニュージーランドに生息する希少性の高いマヌカの木の花から採取したハチミツです。含有するメチルグリオキサールは強い殺菌・抗菌作用を持ち、高く評価されている成分です。日本人の肌に合わせて開発されており、赤みや刺激などのリスクを抑えた設計となっています。
        </p>
        <p className="mb-4">
          主な効果として、高い殺菌作用・抗炎症作用・保湿作用があり、肌のキメを均一に整え、光沢(ツヤ)を与え、ざらつきを改善し、肌を滑らかにします。特に、くすみ、小じわ、肌のハリ・つや、ニキビ肌、毛穴などの悩みに効果的です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">マヌカピーリングの施術は以下のステップで行われます：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            ピーリング配合洗顔でメイク落とし：特殊な洗顔料で肌表面の汚れやメイクを優しく落とします
          </li>
          <li className="mb-1">エンザイマジェルプロ（オプション）：酵素の力で角質を柔軟にします</li>
          <li className="mb-1">
            マヌカピーリングと中和：マヌカピーリング剤を肌に塗布し、適切な時間の後、中和剤で中和します
          </li>
          <li className="mb-1">ローションで沈静化：専用ローションで肌を鎮静させます</li>
          <li className="mb-1">Pureasyの化粧水とWiqoクリームで保湿：高品質な化粧水とクリームで肌を保湿します</li>
        </ol>
        <p className="mb-4">治療時���の目���は約20分程度で、施術後はメイクをしてお帰りいただけます。</p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          マヌカピーリングは赤みや刺激などのリスクを抑えた設計であり、治療後すぐにメイクができ、日常生活に戻ることができます。ただし、紫外線には注意が必要で、日焼け止めの使用が推奨されています。
        </p>
        <p className="mb-3">
          施術の効果は、2〜4週間毎に5回程度行った後、メンテナンス治療として1〜3ヶ月に1度行うことを推奨します。
        </p>
        <p className="mb-4">なお、以下の方は治療を避けるべきとされています：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">ハチミツにアレルギーのある方</li>
          <li className="mb-1">妊娠またはその可能性がある方、授乳中の方</li>
        </ul>
      </>
    ),
  },
  {
    id: "massage-peeling",
    name: "マッサージピーリング",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">マッサージピーリング</h3>
        <p className="mb-4">
          マッサージピーリングには主にPRX-T33とペパーミントピールの2種類があります。どちらも真皮層に作用する新世代のピーリング剤で、従来のピーリングとは異なるメカニズムを持っています。
        </p>

        <h4 className="text-lg font-medium mb-2">PRX-T33</h4>
        <p className="mb-3">
          PRX-T33は、特殊な処方により皮膚の深層に作用し、強い剥離作用のあるトリクロロ酢酸(TCA)の効果を活かしながら、"皮膚剥離が基本的に起こらない"皮膚への刺激を最小限に抑えた新世代のピーリング剤です。
        </p>

        <h5 className="text-base font-medium mb-2">治療効果</h5>
        <p className="mb-3">PRX-T33の主成分と作用は以下の通りです：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">
            高濃度トリクロロ酢酸(TCA)33%：真皮層に作用し、角化細胞や繊維芽細胞の増殖因子を活性化させることで、コラーゲンの生成を促進します
          </li>
          <li className="mb-1">
            低濃度過酸化水素(H2O2)：表皮をTCAの酸性成分から保護することで、表皮の剥離を防止します
          </li>
          <li className="mb-1">
            コウジ酸5%：メラニン色素を作る酵素であるチロシナーゼの活性化を抑制し、しみや肝斑に効果を発揮します
          </li>
        </ul>
        <p className="mb-4">
          PRX-T33は従来のピーリングとは異なり、表皮剥離なしに真皮に作用するため、赤みや皮むけが起こりにくいという特徴があります。副反応がほぼ起きることなく美肌効果が期待できる一方で、刺激が少ないのが魅力です。
        </p>

        <h5 className="text-base font-medium mb-2">治療ステップ</h5>
        <p className="mb-3">PRX-T33の施術は以下のステップで行われます：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">ピーリング配合洗顔でメイク落とし：洗顔料で肌の汚れやメイクを落としていただきます</li>
          <li className="mb-1">
            PRX-T33塗布してマッサージ：薬剤を肌に塗布し、マッサージしながら浸透させた後、適切な時間置きます
          </li>
          <li className="mb-1">拭き取り：余剰な薬液を適切に拭き取ります</li>
          <li className="mb-1">Pureasyの化粧水とWiqoクリームで保湿：専用の化粧水とクリームで肌を保湿します</li>
        </ol>

        <h5 className="text-base font-medium mb-2">ダウンタイム</h5>
        <p className="mb-4">
          PRX-T33は施術直後から皮膚の改善効果を実感できることが特徴です。施術後2～3日は軽度の乾燥感がありますが、赤みが出たり、皮がむけたりという激しい症状は起こりにくいとされています。ただし、肌質や体質によっては、一時的な赤みや軽度の皮むけが生じる可能性は完全には否定できません。施術後はメイクをして帰ることができます。
        </p>

        <h4 className="text-lg font-medium mb-2">ペパーミントピール</h4>
        <p className="mb-3">
          ペパーミントピールは、敏感肌でも施術できる「次世代のピーリング」です。PRX-T33と同様にTCAを使用しますが、TCA濃度が低く設計されており、メントールの効果により刺激が少ないのが特徴です。
        </p>

        <h5 className="text-base font-medium mb-2">治療効果</h5>
        <p className="mb-3">ペパーミントピールには以下の成分が含まれています：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">5種類のピーリング成分：トリクロロ酢酸、グリコール酸、リンゴ酸、乳酸、サルチル酸</li>
          <li className="mb-1">3種類の保湿成分：パンテノール、モノ酸ベタイン、ピログルタミン酸ナトリウム</li>
          <li className="mb-1">抗しわペプチド：アセチルヘキサペプチド-19</li>
          <li className="mb-1">メントール：清涼感と鎮痛効果</li>
        </ul>
        <p className="mb-4">
          主な効果としては、肌のハリ・ツヤ・弾力の改善、シミ・そばかす・くすみの改善、皮膚の角質によるざらつきの改善、肌質改善、毛穴の開き・たるみ改善が挙げられます。
        </p>

        <h5 className="text-base font-medium mb-2">ダウンタイム</h5>
        <p className="mb-3">
          ペパーミントピールはマッサージピール(PRX-T33)に比べて刺激が少なく、敏感肌や脂性肌、ニキビ肌の方でも受けやすい特徴があります。施術後の乾燥やひりつきも比較的起こりにくく、ニキビにも有効です。
        </p>
        <p className="mb-4">
          ただし、一部の方には刺激が強く、赤みやひりつきが出ることがあります。特に脂性肌の方などに刺激が強く出ることがあります。また、まれに治療部位が過度に赤くなり、かさぶたを生じる場合があります。
        </p>
      </>
    ),
  },
  {
    id: "electroporation",
    name: "エレクトロポレーション",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">エレクトロポレーション</h3>
        <p className="mb-4">
          エレクトロポレーションは、特殊な電流を用いて皮膚のバリア機能に一時的な隙間を開け、美容成分を肌に直接入れ込む技術です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">
          エレクトロポレーションの最大の特徴は、通常アミノ酸やビタミン類などの有効成分を含んだ化粧品や美容液を用いても角質層によって吸収される割合が低いところを、バリアゾーンを緩めることで有効成分が20～30倍の効果で直接肌の内部に浸透することです。イオン導入では難しかった高分子やイオン化されていない成分も大量に浸透させることができます。
        </p>
        <p className="mb-3">使用する美容成分によって様々な効果が期待でき、主に以下の成分が用いられます：</p>

        <h5 className="text-base font-medium mb-2">トラネキサム酸</h5>
        <p className="mb-4">
          トラネキサム酸はアミノ酸の一種で、メラニン生成阻害作用と抗炎症作用があります。今まで難しいとされていた肝斑治療も可能になり、しみ・そばかすの改善や美白効果が期待できます。
        </p>

        <h5 className="text-base font-medium mb-2">ビタミンC</h5>
        <p className="mb-4">
          ビタミンCの主な効能としては、抗酸化作用による肌老化の防止、ニキビ跡改善、肌荒れ改善、肌のターンオーバー正常化などがあります。また、皮脂分泌抑制によるニキビ改善、メラニン生成抑制による美白とくすみの改善、コラーゲン生成促進による肌のハリ向上、毛穴の開き改善なども期待できます。
        </p>

        <h5 className="text-base font-medium mb-2">植物幹細胞美容液</h5>
        <p className="mb-4">
          りんご幹細胞を含む美容液は肌の再生や保湿を促進する成分として注目されています。エレクトロポレーションやダーマペン用に使われる成分として、シワや毛穴、シミが気になる方に効果的です。
        </p>

        <h5 className="text-base font-medium mb-2">ヒト脂肪・神経幹細胞美容液</h5>
        <p className="mb-4">
          最先端の美容成分として、ヒト脂肪細胞や神経細胞由来の幹細胞培養液を含む美容液も導入されています。これらの成分は肌の自己再生能力を高め、真皮層でのコラーゲン生成を促進します。特に加齢によるたるみやハリ不足に効果的で、自然な若返り効果が期待できます。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">エレクトロポレーションの施術は以下のステップで行われます：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">洗顔：メイクなどを落としていただきます</li>
          <li className="mb-1">エレクトロポレーションで薬剤を浸透させます</li>
        </ol>
        <p className="mb-4">
          施術時間は約30分程度で、通常1ヶ月に1度のペースで3～5回程度の施術を行うことが推奨されています。
        </p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          エレクトロポレーションは基本的にダウンタイムがなく、痛みもないため、予定の合間などでも気軽に施術を受けることができます。真皮深層レベルまで痛みなく有効成分を浸透させることができる点が大きな利点です。
        </p>
        <p className="mb-4">
          施術後はすぐにメイクができ、日常生活に戻ることができます。効果は施術後すぐに実感される方もいますが、一般的には1～2週間程度で現れ始めます。繰り返し継続して施術を受けることで肌質の改善が目指せます。
        </p>
      </>
    ),
  },
  {
    id: "rejuran-eye",
    name: "リジュランアイ",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">リジュランアイ</h3>
        <p className="mb-4">
          リジュランアイは、目の小じわやたるみクマを改善するために開発された特殊な美容注射です。ポリヌクレオチド(PDRN)という成分を使用しており、これはサケのDNA由来の物質で、肌の修復や再生を促進する作用があります。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">リジュランアイの主な効果としては以下のようなものがあります：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            肌の再生促進：PDRNは肌細胞の再生を促進し、コラーゲンやエラスチンの生成をサポートします。これにより、目の下の薄い皮膚が強化され、たるみやシワが改善され、結果的にクマが目立たなくなります。
          </li>
          <li className="mb-1">
            血行促進と修復：目のクマの原因の一つは血行不良によるものです。リジュランアイは血行促進効果を持ち、目の下の青いクマ(血行不良によるクマ)の改善が期待できます。
          </li>
          <li className="mb-1">
            保湿効果：リジュランアイは保湿効果が非常に高く、目の周りのデリケートな肌をしっかりと保湿します。乾燥による小じわやクマが改善され、肌にハリが戻ります。
          </li>
          <li className="mb-1">
            抗酸化効果：PDRNには抗酸化作用があり、目元の肌を外的ストレスから保護し、長期的に肌の健康を維持します。
          </li>
        </ol>
        <p className="mb-4">
          リジュランアイが特に効果的なクマのタイプは、青クマ(血行不良)、茶クマ(色素沈着)、たるみによるクマです。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">
          リジュランアイの施術方法は、通常、目元専用の極細の針を使用して、目の周りに少量ずつ注入します。施術時間は短く、ダウンタイムもほとんどありません。
        </p>
        <p className="mb-4">
          治療回数については、基本的に2～3週間ごとに1回のペースで、計4回の治療を行うことが推奨されています。この4回のセッションが完了した後は、効果の持続のために半年に1回程度のメンテナンス治療が推奨されています。
        </p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p className="mb-3">
          リジュランアイ施術後の主なダウンタイム症状は内出血です。注射を行う治療のため、内出血が起こる可能性は高いです。内出血は通常1週間程度で自然に消失します。クリニックではコンシーラーを用意しており、施術後すぐにカバーすることも可能なので、施術直後の予定にも対応できます。
        </p>
        <p className="mb-4">
          その他のダウンタイムとしては、軽度の腫れや赤みが生じることがありますが、これらは通常数日以内に治まります。
        </p>
        <p>
          効果の持続性については、4回の治療サイクルを完了することで、6ヶ月から1年程度の効果持続が期待できます。個人差はありますが、定期的なメンテナンス治療を行うことで長期的な効果を維持することができます。
        </p>
      </>
    ),
  },
  {
    id: "save-eyes",
    name: "SaveEyes",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">SaveEyes</h3>
        <p className="mb-4">
          SaveEyesはリジュランアイの類似品目元専用の注入剤です。リジュランアイと同様にPDRN（ポリヌクレオチド）を主成分としており、目の小じわやクマやたるみの改善を目的としています。
        </p>
        <p className="mb-3">
          基本的な効果メカニズムはリジュランアイと似ていますが、製品の特性や副成分には違いがあります。リジュランアイを受けた方で効果を感じられなかった方や、別の選択肢を探している方に対する代替治療としてもおすすめです。
        </p>
        <p className="mb-4">
          治療頻度や方法��リジ��ランアイと同様に、2〜3週間ごとに1回のペースで計4回の治療が基本となります。内出血などのダウンタイムもリジュランアイと同程度と考えられます。
        </p>
        <p>
          どちらの製品がより効果的かは個人の肌質や目元の状態によって異なるため、カウンセリングの際に医師と相談の上、最適な選択をすることが重要です。
        </p>
      </>
    ),
  },
  {
    id: "omni-laser",
    name: "Omniレーザーシステム",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">Omniレーザーシステム</h3>
        <p className="mb-4">
          Omniレーザーシステムは、4種類の異なる波長（450nm、532nm、1064nm、1550nm）を一台に統合した先進的な当院開発の複合型レーザー治療装置です。それぞれの波長が異なる肌の問題にアプローチすることで、多様な肌トラブルに対応できる革新的なシステムとなっています。
        </p>

        <h4 className="text-lg font-medium mb-2">各波長の特性と効果</h4>

        <h5 className="text-base font-medium mb-2">450nm波長：赤み・イボ・殺菌効果</h5>
        <p className="mb-4">
          450nmのブルーレーザー波長は、特に赤ら顔、赤いシミ、毛細血管拡張症に効果を発揮します。また強力な殺菌作用も兼ね備えているため、炎症を起こしている赤ニキビや黄ニキビ治療にも有効です。イボ取りの局所的な治療にも適しています。
        </p>

        <h5 className="text-base font-medium mb-2">532nm波長：シミ取りの特化型</h5>
        <p className="mb-4">
          532nmの波長はメラニン色素を効果的にターゲットとするため、シミ治療に極めて有効です。色素性病変に対して優れた効果を発揮し、多くの場合シミの除去が可能となります。1回で完全に取れるかについては個人差があります。
        </p>

        <h5 className="text-base font-medium mb-2">1064nm波長：レーザートーニングの要</h5>
        <p className="mb-4">
          1064nmの波長は、レーザートーニング治療の中核となる波長です。この波長はメラニンをよく吸収する特性がありつつも、表皮下部のメラノサイトを過剰に刺激しないため、肝斑治療に画期的な効果をもたらします。また、肌質改善や毛穴縮小などの効果も期待できます。
        </p>

        <h5 className="text-base font-medium mb-2">1550nm波長：ニキビ跡・シワ改善のスペシャリスト</h5>
        <p className="mb-4">
          1550nmの波長は水に吸収される特性を持ち、フラクショナルテクノロジーを用いてミクロの治癒過程を促進します。この波長は特にニキビ跡の凹み、傷跡修正、しわ改善、たるみ、毛穴縮小、肌質改善に効果を発揮します。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">Omniレーザー治療の基本的な流れは以下の通りです：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            ピーリング作用配合メイク落とし：ピーリング作用のある洗顔によりメイクと古い角質を除去します。
          </li>
          <li className="mb-1">
            治療部位確認：医師が治療対象となる部位を詳細に観察し、最適な波長と出力設定を決定します。
          </li>
          <li className="mb-1">
            表面麻酔もしくは局所麻酔：レーザーの種類、治療箇所により麻酔の有無と種類が変わります。例えば、450nmでイボ除去を行う場合は局所麻酔が必要ですが、レーザートーニングでは通常麻酔は不要です。
          </li>
          <li className="mb-1">
            レーザー照射：選択した波長のレーザーを治療部位に照射します。照射時間は治療内容により異なりますが、通常は15〜30分程度です。
          </li>
          <li className="mb-1">
            冷却と保湿（イボ取りを除く）：照射後の肌を鎮静化するために冷却し、専用の保湿剤を塗布します。イボ取りの場合は組織の除去が目的のため、この工程は省略されます。
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "hifu",
    name: "HIFUリフトアップ",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">HIFUリフトアップ</h3>
        <p className="mb-4">
          HIFU（High-Intensity Focused
          Ultrasound）は、高密度焦点式超音波を使って、皮膚の深層にある筋膜層（SMAS層）にエネルギーを集中させる革新的な治療法です。このSMAS層はフェイスリフト手術でも引き上げる層であり、HIFUはメスを使わずにこの層に直接アプローチすることで、リフトアップ効果を実現します。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">HIFUの主な効果は以下の通りです：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">フェイスラインのタイトニング</li>
          <li className="mb-1">頬のたるみ改善</li>
          <li className="mb-1">目元のたるみ改善</li>
          <li className="mb-1">首のたるみ改善</li>
          <li className="mb-1">ほうれい線の軽減</li>
        </ul>
        <p className="mb-4">
          HIFU治療の効果は通常4ヶ月程度持続します。施術直後から即時的なタイトニング効果を実感できるケースもありますが、最大の効果は1〜2ヶ月後に現れることが一般的です。定期的なメンテナンス治療により、効果を長期的に維持することが可能です。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">当院のHIFU治療は、以下の2つのシンプルなステップで行われます：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            デザイン：医師が患者様の顔の特徴、骨格、たるみの状態を詳細に分析し、治療プランを立案します。当院では、このデザイン工程に特に力を入れており、患者様一人ひとりの顔の立体構造を考慮した最適なエネルギー照射ポイントを決定します。
          </li>
          <li className="mb-1">
            治療：デザインに基づいて、HIFUエネルギーを照射します。治療時間は全顔で約 20〜30分程度です。痛みは冷却機能により治療部位を冷やすことで非常に少なくなっています。
          </li>
        </ol>
        <p className="mb-4">
          当院の強みは、特に「デザイン」工程にあります。画一的な照射ではなく、患者様一人ひとりの顔の立体構造を詳細に分析し、最適な照射ポイントを決定することで、より自然で効果的なリフトアップを実現しています。このカスタマイズされたアプローチにより、患者様満足度の高い結果を提供しています。
        </p>

        <h4 className="text-lg font-medium mb-2">ダウンタイム</h4>
        <p>ダウンタイムは赤みを認めることが稀にあります。</p>
      </>
    ),
  },
  {
    id: "vitamin-c",
    name: "高濃度ビタミンC点滴",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">高濃度ビタミンC点滴</h3>
        <p className="mb-4">
          高濃度ビタミンC点滴は、通常の経口摂取では達成できない高濃度のビタミンCを直接血管から体内に送り込む治療法です。これにより、抗酸化作用を最大限に活かし、美肌、疲労回復、免疫力向上など様々な効果が期待できます。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">高濃度ビタミンC点滴の主な効果は以下の通りです：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">美肌・美白効果：コラーゲン生成を促進し、シミやくすみを改善します</li>
          <li className="mb-1">抗酸化作用：活性酸素から細胞を守り、老化防止に寄与します</li>
          <li className="mb-1">疲労回復効果：エネルギー代謝を改善し、慢性的な疲労を軽減します</li>
          <li className="mb-1">免疫力向上：白血球機能を強化し、感染症への抵抗力を高めます</li>
          <li className="mb-1">抗癌作用：一部のがん細胞に対して選択的な毒性を示すことが研究で示されています</li>
          <li className="mb-1">抗ストレス作用：ストレスホルモンのバランスを整え、精神的な安定に寄与します</li>
        </ul>
        <p className="mb-4">
          多くの研究により、高濃度ビタミンCの点滴投与は、経口摂取では得られない高い血中濃度を実現し、これにより治療効果を最大化できることが示されています。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">高濃度ビタミンC点滴の治療時間は約30〜60分です。治療の流れは以下の通りです：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            カウンセリングと検査：初めて20g以上の高用量を希望される方は、G6PD（グルコース-6-リン酸脱水素酵素）検査が必要です。当院では検査機器を導入しており、わずか5分程度で結果を得ることができます。これにより、同日中に治療を受けることが可能です。
          </li>
          <li className="mb-1">
            点滴治療：静脈に針を留置し、ビタミンC溶液を30〜60分かけてゆっくりと点滴します。点滴中はリラックスした状態でお過ごしいただけます。
          </li>
        </ol>

        <h4 className="text-lg font-medium mb-2">G6PD検査について</h4>
        <p className="mb-3">
          G6PD欠損症は、赤血球の機能を保つための酵素が欠損している状態です。この状態で高濃度のビタミンC点滴（特に20g以上）を受けると、赤血球が破壊される溶血性貧血を起こすリスクがあります。日本人では0.1〜0.5%の割合でG6PD活性が低いと報告されており、安全性を確保するためにも検査が重要です。
        </p>
        <p>
          当院では院内で迅速にG6PD検査を行うことができるため、検査結果を待って同日に点滴治療を受けることが可能です。これにより、患者様の時間を大切にしながら、安全な治療を提供しています。
        </p>
      </>
    ),
  },
  {
    id: "exotherapy",
    name: "育毛エクソセラピー",
    content: (
      <>
        <h3 className="text-xl font-semibold mb-3">エクソセラピー</h3>
        <p className="mb-4">
          エクソセラピーは、脂肪由来幹細胞から分泌される情報伝達物質であるエクソソームを使用した先進的な育毛治療です。エクソソームは細胞間の情報コミュニケーションを担う重要な物質で、損傷を受けた細胞に働きかけて修復・再生を促進します。
        </p>

        <h4 className="text-lg font-medium mb-2">治療効果</h4>
        <p className="mb-3">エクソセラピーには以下のような効果が期待できます：</p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-1">毛髪の成長促進</li>
          <li className="mb-1">毛髪の太さ・密度の向上</li>
          <li className="mb-1">頭皮環境の改善</li>
          <li className="mb-1">発毛因子の活性化</li>
          <li className="mb-1">毛周期の正常化</li>
        </ul>
        <p className="mb-4">
          臨床研究では、治療開始から12週間後に毛髪密度と太さの顕著な改善が報告されています。エクソソームが毛周期の成長期部分の誘導と維持を促進し、脱毛を減少させ毛包周辺の炎症を軽減させる効果があることが示されています。
        </p>

        <h4 className="text-lg font-medium mb-2">治療ステップ</h4>
        <p className="mb-3">エクソセラピーの治療手順は以下の通りです：</p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-1">
            治療エリア確認：医師が患者様の頭皮と毛髪の状態を詳細に観察し、治療が必要なエリアを特定します。治療前に頭皮の状態や薄毛の程度を写真撮影し、効果測定の基準とします。
          </li>
          <li className="mb-1">
            表面麻酔：頭皮に表面麻酔剤を塗布し、治療時の不快感を軽減します。表面麻酔が効果を発揮するまで約 20〜30分待ちます。
          </li>
          <li className="mb-1">
            治療：エクソソームを含む溶液を頭皮に注入します。マイクロニードルデバイスや極細針を使用することで、精密な注入が可能です。治療時間は頭皮の状態や治療範囲によって異なりますが、通常40〜50分程度です。
          </li>
        </ol>
        <p className="mb-4">
          治療後は特別なダウンタイムはなく、当日から通常の洗髪も可能です。ただし、24時間は強い摩擦や刺激は避けることが推奨されます。最適な効果を得るためには、通常4〜6週間間隔で3〜5回の治療が推奨されています。
        </p>
      </>
    ),
  },
]

export default function TreatmentsPage() {
  const [openTreatment, setOpenTreatment] = useState<string | null>(null)

  const toggleTreatment = (id: string) => {
    if (openTreatment === id) {
      setOpenTreatment(null)
    } else {
      setOpenTreatment(id)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f4ec] py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/beauty" className="inline-flex items-center text-[#b89e69] hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            美容クリニックのページに戻る
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#b89e69] mb-12">施術内容一覧</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 mb-4">
            アポロンビューティークリニックでは、様々な美容治療を提供しています。
            各施術の詳細については、以下のボタンをクリックして確認してください。
          </p>
        </div>

        <ul className="space-y-4">
          {treatments.map((treatment) => (
            <li key={treatment.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleTreatment(treatment.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-[#b89e69]">{treatment.name}</span>
                {openTreatment === treatment.id ? (
                  <ChevronUp className="h-5 w-5 text-[#b89e69]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#b89e69]" />
                )}
              </button>

              <div
                className={`px-6 py-4 bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
                  openTreatment === treatment.id ? "block" : "hidden"
                }`}
              >
                {treatment.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
