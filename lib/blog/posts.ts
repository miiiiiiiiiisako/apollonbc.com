export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "link"; text: string; href: string }

export type BlogReference = {
  number: number
  title: string
  url: string
}

export type BlogPost = {
  slug: string
  language: "ja" | "en"
  title: string
  description: string
  publishedAt: string
  category: string
  body: BlogBlock[]
  costAndRisk: BlogBlock[]
  references: BlogReference[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "filler-correction-before-consultation",
    language: "ja",
    category: "注入治療後の修正相談",
    publishedAt: "2026-11-11",
    title: "目の下のヒアルロン酸が溶けない？ 注入治療のあと、修正を相談する前に知っておきたいこと",
    description: "何年たっても目の下のヒアルロン酸が残っている、相談先が見つからない。注入治療のあとに気になることがあるとき、ご相談の前に知っておいていただきたいことを、院長がまとめました。",
    body: [
      { type: "paragraph", text: "修正のご相談でいちばん多いのが、「目の下に入れたヒアルロン酸が、何年たっても溶けない」というお悩みです。" },
      { type: "paragraph", text: "ヒアルロン酸は溶けるものだから、放っておけばそのうちなくなると思っていた。でも、何年たっても残っている。そう話される方は少なくありません。" },
      { type: "paragraph", text: "今回は、注入治療のあとに気になることがあるとき、ご相談の前に知っておいていただきたいことをまとめました。" },
      { type: "heading", text: "ヒアルロン酸は「すぐに消えるもの」とは限りません" },
      { type: "paragraph", text: "ヒアルロン酸は、時間とともに体の中で分解・吸収されていく、と説明されることが多い製剤です。" },
      { type: "paragraph", text: "一方で、MRIを使った研究では、最後の注入から2年以上たった33人の全員で、ヒアルロン酸と考えられる像が見つかっています。中には、15年たって見つかった例もありました[2]。目の下を含むお顔の中央の部分を調べた別の研究でも、注入から最長15年後にヒアルロン酸と考えられる像が確認されています[3]。" },
      { type: "paragraph", text: "ただし、MRIで見えているものが、すべて注入したヒアルロン酸そのものとは限りません。水分や、新しくできたコラーゲンが含まれている可能性も指摘されています[1]。また、いつ注入したかを患者さんの記憶に頼っている研究が多い、という限界もあります[4]。" },
      { type: "paragraph", text: "それでも、「放っておけば、いずれ必ず消える」とは言い切れない。このことは、ぜひ知っておいていただきたいと思います。" },
      { type: "heading", text: "「これはヒアルロン酸ではない」と言われたら" },
      { type: "paragraph", text: "注入に使われる材料は、ヒアルロン酸だけではありません。ポリ乳酸、カルシウムハイドロキシアパタイト、PMMA（ポリメチルメタクリレート）、シリコン、ポリアクリルアミドゲルなどがあります。これらは、ヒアルロン酸を分解する薬（ヒアルロニダーゼ）では溶かせません[5]。" },
      { type: "paragraph", text: "溶けない材料によるトラブルは、何年もたってから起こることがあります。取り除くには手術が必要になることもあります[6]。脂肪注入の場合も、定着した脂肪は薬で溶かすことができず、取り除くには手術を考えることになります。" },
      { type: "paragraph", text: "自分のお顔に何が入っているのかわからないときは、まず施術を受けたクリニックに記録を確認してみてください。患者さんは、ご自身の診療記録の開示を求めることができ、医療機関は原則としてこれに応じることになっています[7]。クリニックが閉院している場合でも、明細書や同意書、予約の記録、メールなどが手がかりになります。" },
      { type: "heading", text: "目の周りならではの難しさ" },
      { type: "paragraph", text: "目の周りは、ヒアルロン酸が長く残りやすい場所だと考えられています。皮膚が薄く、リンパの流れも限られていることが、むくみや製剤が目立つことにつながりやすいと指摘されています[9]。目の下に入れたヒアルロン酸が長く残り、時間がたってから、むくみや青っぽい色、凹凸として気になってくることもあります[10]。" },
      { type: "paragraph", text: "青っぽく見えるものは「チンダル現象」と呼ばれます。皮膚の浅いところにあるヒアルロン酸に光が当たって散らばり、青く透けて見える状態です。目の下では、製剤の多くを筋肉（眼輪筋）の下、骨に近い深い層に入れることがすすめられています[11]。チンダル現象は、入れる深さや、選ぶヒアルロン酸の種類が合っていないことで起こりやすくなるとされています[12]。" },
      { type: "paragraph", text: "ご相談に来られる方のお顔を拝見すると、深い層ではなく浅いところに製剤があって、チンダル現象が起きていることも少なくありません。" },
      { type: "paragraph", text: "ヒアルロン酸にはたくさんの種類があり、硬さや水分を抱え込む性質がそれぞれ違います。目の周りを整えたいときに大切なのは、必要な場所に、必要な量の、その場所に合ったヒアルロン酸が入っているかどうかです。浅い層を補ったほうがよい場合は、ヒアルロン酸ではなく、肌そのものを整える治療など、別の方法を考えることもあります。どの方法が合うかは、診察でお顔の状態を拝見してからご説明します。" },
      { type: "heading", text: "相談先が見つからない、というお悩み" },
      { type: "paragraph", text: "「施術を受けたクリニックが、なくなっていた」\n「同じグループの別の院で、ここでは対応していないと言われた」" },
      { type: "paragraph", text: "相談先が見つからず、何年も困っていた、というお話を伺うことがあります。" },
      { type: "paragraph", text: "そうしたときに起こりやすいのが、気になる部分を隠そうとして、上からさらに注入を重ねてしまうことです。思った仕上がりにならず、また別のところで足して、というように重ねるほど、何がどこにどれだけ入っているのかがわかりにくくなります。そして、整えることがどんどん難しくなっていきます。" },
      { type: "heading", text: "ご相談の前に、できるだけ教えていただきたいこと" },
      { type: "list", items: ["いつ注入したか（だいたいの年でも大丈夫です）", "どこに注入したか", "何を注入したか（製剤の名前）", "どのくらいの量か", "何回、どこのクリニックで受けたか", "注入以外の治療（脂肪注入、糸のリフト、目の下の脱脂などの手術）"] },
      { type: "paragraph", text: "材料によって、溶かせるかどうかが変わります。同じヒアルロン酸でも、製剤の硬さや、成分どうしをつなぐ加工（架橋）の度合いによって、分解に必要な薬の量が変わることがわかっています[5][8]。" },
      { type: "paragraph", text: "わからない項目があっても構いません。わかる範囲で教えていただければ、診察の大切な手がかりになります。" },
      { type: "heading", text: "一度、真っ白な画用紙に戻す" },
      { type: "paragraph", text: "修正のご相談で私が大切にしているのは、ヒアルロン酸であれば、まず溶かして一度リセットすることを考える、ということです。" },
      { type: "paragraph", text: "よく、画用紙にたとえてお話しします。いろいろな絵が描いてある上から塗りつぶして、また描き直すより、真っ白な画用紙に描き直したほうが、きれいに仕上がりますよね。" },
      { type: "paragraph", text: "お顔も同じです。残っている製剤の上から重ねて整えることも、できなくはありません。ただ、あとになって「なぜここがこうなるんだろう」と感じる原因が、もともと入っていた製剤だった、ということが少なくないんです。一度リセットしてから整えていくほうが、その後も、ご自身が思い描くお顔に近づけていきやすいと感じています。" },
      { type: "paragraph", text: "ただ、溶かす治療にもリスクがあります。注射した部分の腫れや内出血のほか、もともとの組織のボリュームに一時的な影響が出ることや、まれに強いアレルギー反応が起こることもあります。また、すべてが施術前の状態に戻るとお約束できるものではありません。こうしたことも含めて、診察でご説明します。" },
      { type: "heading", text: "「溶けるのは、もったいない」？" },
      { type: "paragraph", text: "「せっかく入れたのに、溶けてしまうのはもったいなくないですか」と聞かれることもあります。私は、溶けることはむしろ良いところだと考えています。" },
      { type: "paragraph", text: "お顔は、年齢とともに少しずつ変わっていきます。ずっと残るものを入れると、その部分だけが20代や30代のころの形のまま残り、まわりとの差が年々大きくなっていくことがあります。それなら、お顔全体が自然に年を重ねていくほうが、ずっと調和がとれていると思うんです。" },
      { type: "paragraph", text: "10代や20代のころに着ていた洋服を、80歳になっても着続けるかというと、そうではないですよね。お顔にも、その時その時に合う形があります。溶ける製剤なら、そのときのお顔に合わせて見直すことができます。" },
      { type: "heading", text: "私が大切にしていること" },
      { type: "paragraph", text: "必要以上の治療はしないこと。" },
      { type: "paragraph", text: "その方がもともと持っている良さを生かしながら、気になっているところや左右差をやわらげていくこと。" },
      { type: "paragraph", text: "みんなが同じ顔になることが美しいとは、私は思っていません。その方が持っている美しさを引き出すお手伝いができればと思っています。" },
      { type: "heading", text: "ご相談について" },
      { type: "paragraph", text: "注入治療後の仕上がりや修正のご相談は、ご紹介のない方もお受けしています。まずはオンライン初診（20分・3,300円）で、これまでの経過や気になっていることを伺います。" },
      { type: "link", text: "→ 注入後の仕上がり・修正相談のページへ", href: "/correction" },
    ],
    costAndRisk: [
      { type: "paragraph", text: "当院の診療はすべて自由診療（保険適用外）です。" },
      { type: "list", items: ["オンライン初診：20分・3,300円", "対面初診（診察・カウンセリング約60分）：16,500円", "ヒアルロン酸の溶解（ヒアルロニダーゼ）：動物由来製剤 29,700円／薬剤1cc〜、人由来製剤 44,000円／薬剤1cc〜"] },
      { type: "paragraph", text: "主なリスク・副作用：注射した部分の痛み、腫れ、赤み、内出血、かゆみが出ることがあります。まれに、じんましんや息苦しさなどの強いアレルギー反応が起こることがあります。注入したヒアルロン酸だけでなく、もともとの組織のボリュームにも一時的な影響が出る場合があります。" },
      { type: "paragraph", text: "ヒアルロニダーゼについて：ヒアルロン酸を分解する目的で使うヒアルロニダーゼは、国内で承認されていない未承認医薬品です。医師の個人輸入により、PRSS.Japan株式会社を通じて入手しています。ヒアルロン酸の分解を目的として国内で承認された同じ成分の医薬品はありません。人由来製剤のHylenex®は米国で承認されていますが、承認された用途にヒアルロン酸の分解は含まれません。未承認医薬品のため、万一重い副作用が起きても、医薬品副作用被害救済制度の対象にはなりません。動物由来製剤を使う場合は、事前に腕で皮膚テストを行います（すべてのアレルギー反応を予測できるわけではありません）。くわしくは、修正相談のページでご案内しています。" },
    ],
    references: [
      { number: 1, title: "ヒアルロン酸フィラーの持続に関するMRI所見の解釈についての論文（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13400034/" },
      { number: 2, title: "中顔面のヒアルロン酸フィラーの残存をMRIで調べた33例の研究（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11250456/" },
      { number: 3, title: "ヒアルロン酸フィラーの残存と体積をMRIで調べた研究（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13327366/" },
      { number: 4, title: "ヒアルロン酸フィラーの持続に関する研究の限界を論じた論文（Aesthetic Surgery Journal）", url: "https://academic.oup.com/asj/advance-article/doi/10.1093/asj/sjag144/8729614" },
      { number: 5, title: "ヒアルロニダーゼとフィラーの種類・分解についての総説（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10836581/" },
      { number: 6, title: "非吸収性（永久）フィラーの合併症と除去についての論文（Aesthetic Plastic Surgery）", url: "http://link.springer.com/article/10.1007/s00266-024-04104-z" },
      { number: 7, title: "厚生労働省「診療情報の提供等に関する指針」", url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc3403&dataType=1" },
      { number: 8, title: "フィラーの架橋の度合いとヒアルロニダーゼの必要量についての論文（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12787120/" },
      { number: 9, title: "目の周りの若返り治療についての総説（皮膚の薄さ・リンパの流れとむくみ・チンダル現象）（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13697260/" },
      { number: 10, title: "目の下のヒアルロン酸注入の長期経過についての研究（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12724988/" },
      { number: 11, title: "目の下のくぼみ（ティアトラフ）へのフィラー治療についての総説（PMC）", url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3560162/" },
      { number: 12, title: "目の下のくぼみに対するヒアルロン酸とポリヌクレオチドを比べた総説（PMC）", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13361502/" },
    ],
  },
  {
    slug: "filler-correction-before-consultation",
    language: "en",
    category: "Injectable treatment correction",
    publishedAt: "2026-11-11",
    title: "Under-eye hyaluronic acid that won't dissolve: What to know before a correction consultation after injectable treatment",
    description: "Hyaluronic acid under your eyes still there after many years, or nowhere to consult? Dr. Misako Matsui explains what to know before a consultation about concerns after injectable treatment.",
    body: [
      { type: "paragraph", text: "The most common concern I hear in correction consultations is, \"The hyaluronic acid filler under my eyes has not dissolved, even after many years.\"" },
      { type: "paragraph", text: "Many people tell me they thought hyaluronic acid would dissolve and disappear on its own over time, yet it is still there years later." },
      { type: "paragraph", text: "In this article, I have gathered what I would like you to know before you consult us about a concern after injectable treatment." },
      { type: "heading", text: "Hyaluronic acid does not always \"disappear quickly\"" },
      { type: "paragraph", text: "Hyaluronic acid filler is often described as being gradually broken down and absorbed by the body over time." },
      { type: "paragraph", text: "However, in an MRI study, findings consistent with hyaluronic acid were seen in all 33 patients whose last injection had been more than two years earlier. In one case, it was found 15 years later[2]. Another study of the central face, including the under-eye area, also found findings consistent with hyaluronic acid up to 15 years after injection[3]." },
      { type: "paragraph", text: "That said, what is seen on MRI may not all be the injected hyaluronic acid itself. It has been pointed out that water or newly formed collagen may also be included[1]. Many studies also rely on patients' memory of when they were injected, which is a limitation[4]." },
      { type: "paragraph", text: "Even so, it cannot be said that filler will \"always disappear eventually if left alone.\" I would like you to be aware of this." },
      { type: "heading", text: "If you were told \"This is not hyaluronic acid\"" },
      { type: "paragraph", text: "Hyaluronic acid is not the only material used for injections. Others include poly-L-lactic acid, calcium hydroxylapatite, PMMA (polymethyl methacrylate), silicone, and polyacrylamide gel. These cannot be dissolved with hyaluronidase, the medicine that breaks down hyaluronic acid[5]." },
      { type: "paragraph", text: "Problems caused by materials that do not dissolve can appear many years later, and surgery may be needed to remove them[6]. With fat grafting as well, fat that has settled cannot be dissolved with medicine, and surgery would be considered to remove it." },
      { type: "paragraph", text: "If you do not know what has been injected into your face, first try checking the records at the clinic where you were treated. In Japan, patients can request disclosure of their medical records, and medical institutions are in principle expected to respond[7]. Even if the clinic has closed, receipts, consent forms, booking records, or emails can be helpful clues." },
      { type: "heading", text: "Why the under-eye area is challenging" },
      { type: "paragraph", text: "The area around the eyes is thought to be a place where hyaluronic acid tends to remain for a long time. It has been pointed out that thin skin and limited lymphatic drainage can make swelling and visible product more likely[9]. Hyaluronic acid injected under the eyes may remain for a long time and later become noticeable as swelling, a bluish tint, or unevenness[10]." },
      { type: "paragraph", text: "A bluish appearance is called the \"Tyndall effect.\" It occurs when light scatters off hyaluronic acid sitting in a shallow layer of the skin, so that it shows through as blue. Under the eyes, it is recommended that most of the product be placed beneath the muscle (orbicularis oculi), in a deep layer close to the bone[11]. The Tyndall effect is said to be more likely when the depth of injection or the type of hyaluronic acid chosen is not appropriate[12]." },
      { type: "paragraph", text: "When I examine the faces of people who come for consultation, I often see the Tyndall effect where product is sitting in a shallow layer rather than a deep one." },
      { type: "paragraph", text: "There are many types of hyaluronic acid, each with different firmness and water-binding properties. When you want to improve the under-eye area, what matters is whether the right type of hyaluronic acid has been placed in the right place, in the right amount. When it would be better to support the shallower layers, we may consider a different approach instead of hyaluronic acid, such as treatments that improve the skin itself. Which approach suits you is explained after I examine your face." },
      { type: "heading", text: "When you cannot find anywhere to consult" },
      { type: "paragraph", text: "\"The clinic where I was treated had closed.\"\n\"Another branch of the same group told me they could not help with this.\"" },
      { type: "paragraph", text: "I sometimes hear from people who could not find anywhere to consult and struggled for years." },
      { type: "paragraph", text: "In such situations, it is common to try to hide the area of concern by injecting more on top. When the result is not what was expected, more is added somewhere else, and the more it is layered, the harder it becomes to know what is where, and how much. It then becomes more and more difficult to correct." },
      { type: "heading", text: "What I would like you to share before your consultation, if possible" },
      { type: "list", items: ["When you were injected (an approximate year is fine)", "Where you were injected", "What was injected (product name)", "How much was injected", "How many times, and at which clinics", "Treatments other than injections (fat grafting, thread lifts, or surgery such as lower eyelid fat removal)"] },
      { type: "paragraph", text: "Whether a material can be dissolved depends on what it is. Even among hyaluronic acid fillers, the amount of medicine needed to break them down is known to vary with the product's firmness and the degree of cross-linking, the process that links the components together[5][8]." },
      { type: "paragraph", text: "It is fine if you do not know some of these items. Whatever you can share will be an important clue for the examination." },
      { type: "heading", text: "Starting again from a blank sheet of paper" },
      { type: "paragraph", text: "In correction consultations, what I value is that, if the filler is hyaluronic acid, I first consider dissolving it and resetting once." },
      { type: "paragraph", text: "I often compare this to drawing paper. Rather than painting over a sheet that already has many drawings on it and drawing again, starting over on a clean white sheet gives a cleaner result." },
      { type: "paragraph", text: "The face is the same. It is possible to adjust things by adding on top of the remaining product. However, it is not uncommon that the reason you later wonder, \"Why does this area look like this?\" turns out to be the product that was already there. I feel that resetting once and then making adjustments makes it easier to move toward the face you have in mind." },
      { type: "paragraph", text: "Dissolving treatment also has risks. Besides swelling and bruising at the injection site, the original tissue volume may be affected temporarily, and rarely a severe allergic reaction may occur. I also cannot promise that everything will return to how it was before treatment. I explain all of this during the examination." },
      { type: "heading", text: "\"Isn't it a waste if it dissolves?\"" },
      { type: "paragraph", text: "I am sometimes asked, \"Isn't it a waste for the filler to dissolve after I had it injected?\" I actually think being able to dissolve is a good thing." },
      { type: "paragraph", text: "The face changes little by little with age. If something that stays permanently is injected, that area alone may stay in the shape it had in your 20s or 30s, and the difference from the surrounding areas may grow year by year. I think it is far more harmonious for the whole face to age naturally together." },
      { type: "paragraph", text: "You would not keep wearing the clothes you wore in your teens or 20s when you are 80. The face also has a shape that suits each stage of life. With a product that can be dissolved, it can be reviewed to suit your face at that time." },
      { type: "heading", text: "What I value" },
      { type: "paragraph", text: "Not providing more treatment than is necessary." },
      { type: "paragraph", text: "Softening the areas that concern you and any asymmetry, while making the most of the qualities you already have." },
      { type: "paragraph", text: "I do not believe that everyone having the same face is beautiful. I hope to help bring out the beauty that each person already has." },
      { type: "heading", text: "About consultations" },
      { type: "paragraph", text: "Consultations about results or corrections after injectable treatment are available without a referral. We start with an online initial consultation (20 min, ¥3,300), where we ask about your history and current concerns. Consultations can be conducted in English." },
      { type: "link", text: "→ Go to the injectable treatment correction consultation page", href: "/en/injectable-correction" },
    ],
    costAndRisk: [
      { type: "paragraph", text: "All care at our clinic is self-pay (not covered by insurance)." },
      { type: "list", items: ["Online initial consultation: 20 min, ¥3,300", "Initial in-person examination and counseling (about 60 min): ¥16,500", "Dissolving hyaluronic acid (hyaluronidase): animal-derived product ¥29,700 per 1 cc of medicine and up; human-derived product ¥44,000 per 1 cc of medicine and up"] },
      { type: "paragraph", text: "Main risks and side effects: Pain, swelling, redness, bruising, or itching may occur at the injection site. Rarely, a severe allergic reaction such as hives or difficulty breathing may occur. The original tissue volume, as well as the injected hyaluronic acid, may be affected temporarily." },
      { type: "paragraph", text: "About hyaluronidase: Hyaluronidase used to break down hyaluronic acid filler is an unapproved medicine in Japan. It is imported personally by the physician through PRSS.Japan Co., Ltd. There is no medicine with the same ingredient approved in Japan for breaking down hyaluronic acid. The human-derived product Hylenex® is approved in the United States, but breaking down hyaluronic acid filler is not one of its approved uses. Because it is an unapproved medicine, serious adverse effects are not covered by Japan's Relief System for Adverse Drug Reactions. Before using the animal-derived product, a skin test is performed on the arm (this test cannot predict every allergic reaction). For details, please see the correction consultation page." },
    ],
    references: [
      { number: 1, title: "Paper on interpreting MRI findings of hyaluronic acid filler persistence (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13400034/" },
      { number: 2, title: "MRI study of hyaluronic acid filler persistence in the midface, 33 patients (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11250456/" },
      { number: 3, title: "MRI study of hyaluronic acid filler persistence and volume (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13327366/" },
      { number: 4, title: "Paper discussing the limitations of studies on hyaluronic acid filler persistence (Aesthetic Surgery Journal)", url: "https://academic.oup.com/asj/advance-article/doi/10.1093/asj/sjag144/8729614" },
      { number: 5, title: "Review of hyaluronidase, filler types, and degradation (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10836581/" },
      { number: 6, title: "Paper on complications and removal of permanent fillers (Aesthetic Plastic Surgery)", url: "http://link.springer.com/article/10.1007/s00266-024-04104-z" },
      { number: 7, title: "Ministry of Health, Labour and Welfare, Guidelines on the Provision of Medical Information (Japanese)", url: "https://www.mhlw.go.jp/web/t_doc?dataId=00tc3403&dataType=1" },
      { number: 8, title: "Paper on filler cross-linking and the amount of hyaluronidase required (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12787120/" },
      { number: 9, title: "Review of periocular rejuvenation (thin skin, lymphatic drainage and swelling, Tyndall effect) (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13697260/" },
      { number: 10, title: "Study on the long-term course of tear trough hyaluronic acid filler (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12724988/" },
      { number: 11, title: "Review of filler treatment for tear trough deformity (PMC)", url: "http://www.ncbi.nlm.nih.gov/pmc/articles/PMC3560162/" },
      { number: 12, title: "Review comparing hyaluronic acid fillers and polynucleotides for under-eye hollows (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13361502/" },
    ],
  },
]

export function getBlogPost(slug: string, language: BlogPost["language"] = "ja") {
  return blogPosts.find((post) => post.slug === slug && post.language === language)
}

export function getBlogPosts(language: BlogPost["language"]) {
  return blogPosts.filter((post) => post.language === language)
}

export function getBlogCategories(language: BlogPost["language"] = "ja") {
  return Array.from(new Set(getBlogPosts(language).map((post) => post.category)))
}
