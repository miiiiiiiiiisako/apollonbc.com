import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Online Consultation for Skin, Weight & Hair | Apollon Beauty Clinic" },
  description:
    "English online medical consultations in Japan for skin concerns, weight management, and hair thinning, with prescriptions shipped within Japan.",
  alternates: {
    canonical: "https://apollonbc.com/en/online-consultation",
    languages: {
      en: "https://apollonbc.com/en/online-consultation",
      ja: "https://apollonbc.com/online-medical",
    },
  },
}

const bookingUrl = "https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
const lineUrl = "https://lin.ee/oiYHa2N"
const buttonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"
const primaryButtonClass =
  "inline-flex min-h-12 w-full items-center justify-center rounded bg-[#b89e69] px-5 py-3 text-center text-sm font-medium text-white transition hover:bg-[#a08a59]"

function Section({ title, children, id }: { title: React.ReactNode; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="border-t border-[#ded4c3] py-12 md:py-16">
      <h2 className="mb-7 text-balance font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  )
}

function MedicalCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="flex h-full flex-col border border-[#ded4c3] bg-white/45 p-6 transition hover:bg-white/75 md:p-7">
      <h3 className="mb-4 min-h-[3.5rem] font-serif text-xl font-medium leading-relaxed text-[#4b4338]">{title}</h3>
      <p className="mt-auto text-sm leading-relaxed text-[#665e50]">{description}</p>
    </Link>
  )
}

const medicines = [
  ["Skin", "Tranexamic acid (1-month supply)", "¥3,080"],
  ["Skin", "Juvela / vitamin E (1-month supply)", "¥2,420"],
  ["Skin", "Tathion / glutathione powder (1-month supply)", "¥2,420"],
  ["Skin", "Tranexamic acid + Juvela (1-month supply)", "¥4,950", "Set — ¥550 less than the total price of the individual medicines"],
  ["Skin", "Tranexamic acid + Juvela + Tathion (1-month supply)", "¥6,930", "Set — ¥990 less than the total price of the individual medicines"],
  ["Skin", "Kampo medicine, such as Jumihaidokuto (2-week supply)", "¥3,300"],
  ["Skin", "Epiduo Gel (1 tube)", "¥2,750"],
  ["Skin", "Tretinoin (1 tube)", "¥4,400"],
  ["Skin", "Apollo Acne Mix (1 tube)", "¥2,200"],
  ["Skin", "Isotretinoin 10 mg (1-month supply)", "¥6,600"],
  ["Weight management", "Kampo medicine, such as Bofutsushosan (2-week supply)", "¥3,300"],
  ["Weight management", "Rybelsus 3 mg (1-month supply)", "¥9,900"],
  ["Weight management", "Rybelsus 7 mg (1-month supply)", "¥16,500"],
  ["Weight management", "Mounjaro 2.5 mg (4 pens; 1-month supply)", "¥16,500"],
  ["Weight management", "Mounjaro 5 mg (4 pens; 1-month supply)", "¥29,700"],
  ["Weight management", "SGLT2 inhibitor", "Discussed during consultation"],
  ["Hair", "Dutasteride (1-month supply)", "¥6,600"],
  ["Hair", "Pantogar (1-month supply)", "¥9,900"],
  ["Hair", "Topical minoxidil", "Coming soon", "Coming soon"],
  ["Eyelid", "Upneeq Mini ophthalmic solution 0.1% (box of 30)", "¥5,500", "Coming soon"],
]

const disclosures: Array<[string, string[]]> = [
  [
    "Topical tretinoin and Apollo Acne Mix (in-clinic preparation)",
    [
      "These are unapproved medicines. No topical tretinoin product is approved in Japan.",
      "Source: Raw ingredients are obtained from a Japanese manufacturer, Nanoegg, and prepared at the clinic. Apollo Acne Mix is an in-clinic preparation containing tretinoin, an antimicrobial agent, and anti-inflammatory ingredients.",
      "Status in other countries: Topical tretinoin is approved for acne treatment in the United States and other countries.",
      "Main risks: Redness, peeling, dryness, stinging, and increased sensitivity to sunlight. It must not be used during pregnancy or while breastfeeding.",
      "It is not covered by Japan’s Relief System for Adverse Drug Reactions.",
    ],
  ],
  [
    "Isotretinoin (oral)",
    [
      "This is an unapproved medicine. No isotretinoin product is approved in Japan for acne treatment.",
      "Source: Imported under the physician’s responsibility through a pharmaceutical supplier in South Korea.",
      "Status in other countries: Approved for severe acne in the United States and other countries.",
      "Main risks: Dry lips and skin, changes in liver function or lipid levels, and mood changes. Because it may seriously harm a fetus, reliable contraception is required during treatment and for one month after the final dose. Blood donation is not permitted during treatment.",
      "Because our clinic does not conduct blood tests, please have liver function and other appropriate blood tests performed at an internal medicine clinic or another medical facility and share the results during your online consultation.",
      "It is not covered by Japan’s Relief System for Adverse Drug Reactions.",
    ],
  ],
  [
    "Pantogar",
    [
      "This is an unapproved medicine. No medicine with the same ingredients is approved in Japan.",
      "Source: Imported under the physician’s responsibility through a Japanese import agent, PRSS.Japan Co., Ltd.",
      "Status in other countries: Approved in Germany as a medicine for diffuse hair loss.",
      "Main risks: Stomach discomfort, nausea, and, rarely, rash.",
      "It is not covered by Japan’s Relief System for Adverse Drug Reactions.",
    ],
  ],
  [
    "Rybelsus and Mounjaro",
    [
      "These medicines are approved in Japan for type 2 diabetes. Use for weight management is off-label.",
      "Source: Products distributed through authorized channels in Japan are used.",
      "Wegovy and Zepbound are approved in Japan for obesity treatment; health insurance coverage is subject to specific conditions.",
      "Main risks: Gastrointestinal symptoms such as nausea, constipation, and diarrhea; hypoglycemia; acute pancreatitis; and gallbladder disease. Seek medical care promptly if severe abdominal pain continues.",
      "Because this is off-label use, coverage under Japan’s Relief System for Adverse Drug Reactions is highly unlikely.",
    ],
  ],
  [
    "SGLT2 inhibitors",
    [
      "These medicines are approved in Japan for diabetes and certain other conditions. Use for weight management is off-label.",
      "Source: Products distributed through authorized channels in Japan are used.",
      "Main risks: Dehydration, urinary tract or genital infections, and ketoacidosis.",
      "Because this is off-label use, it may not be covered by Japan’s Relief System for Adverse Drug Reactions.",
    ],
  ],
  [
    "Tranexamic acid, Juvela, and Tathion",
    [
      "These are approved medicines in Japan, but their use for aesthetic concerns such as melasma and dullness is off-label.",
      "Source: Products distributed through authorized channels in Japan are used.",
      "Main risks: Tranexamic acid may rarely increase the risk of thrombosis. Please tell us if you have had thrombosis or currently take oral contraceptives. Other risks include gastrointestinal symptoms and rash.",
      "Because this is off-label use, it may not be covered by Japan’s Relief System for Adverse Drug Reactions.",
    ],
  ],
  [
    "Main risks of other products",
    [
      "Dutasteride: Possible decrease in libido. Prescribed to men only. Women who are pregnant or may be pregnant must not touch the capsules.",
      "Minomycin: Dizziness, gastrointestinal symptoms, and pigmentation changes.",
      "Kampo medicines: Gastrointestinal symptoms and, rarely, liver dysfunction.",
      "Upneeq Mini ophthalmic solution: Eye redness, irritation, and blurred vision. Remove contact lenses before use.",
      "Supplements and cosmetics are not medicines, are not intended to treat disease, and do not provide assured results.",
    ],
  ],
]

export default function EnglishOnlineConsultationPage() {
  return (
    <main lang="en" className="min-h-screen bg-[#f8f4ec] text-[#3f3a32]">
      <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <Link href="/en" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link>
          <Link href="/online-medical" hrefLang="ja" className="text-sm text-[#8d7545] underline underline-offset-4">日本語</Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
        <section className="py-14 md:py-20">
          <Link href="/en" className="mb-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">Back to English services</Link>
          <p className="mb-5 text-xs tracking-[0.16em] text-[#8d7545]">ONLINE MEDICAL / NO REFERRAL REQUIRED</p>
          <h1 className="mb-6 max-w-4xl text-balance font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.04em] text-[#3f3a32] md:text-5xl">
            Online consultation for skin, weight management, and hair thinning
          </h1>
          <div className="mb-8 max-w-3xl space-y-3 text-base leading-loose text-[#665e50] md:text-lg">
            <p>Meet with a doctor by video from home and have prescribed medicines delivered to you. Each consultation is approximately 20 minutes. We will discuss your concerns, health, and lifestyle and consider a treatment plan that you can continue.</p>
            <p>Consultations can be conducted in English. You may fill out the pre-consultation questionnaire in English.</p>
            <p>Prescriptions can be shipped to addresses in Japan only.</p>
          </div>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>Book an online consultation</a>
          <p className="mt-3 text-xs leading-relaxed text-[#766d5e]">The booking page is in Japanese. Please choose the category 「肌・ダイエット・育毛診察」 (Skin, Weight &amp; Hair consultation).</p>
        </section>

        <section className="border-t border-[#ded4c3] py-12 md:py-16">
          <p className="mb-3 text-sm tracking-[0.16em] text-[#8d7545]">THREE AREAS OF CARE</p>
          <h2 className="mb-8 font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">Three areas of care</h2>
          <div className="grid gap-5 md:grid-cols-3">
            <MedicalCard title="Skin concerns" description="Acne, acne marks, melasma, dullness, skin texture, and other concerns" href="#skin" />
            <MedicalCard title="Weight management" description="Weight management with the aim of developing habits that support long-term maintenance" href="#weight" />
            <MedicalCard title="Hair thinning" description="Hair thinning and hair loss concerns in men and women" href="#hair" />
          </div>
        </section>

        <Section id="skin" title="Care through both medication and daily skincare">
          <div className="space-y-4 text-sm leading-loose text-[#665e50] md:text-base">
            <p>In addition to oral medicines, topical medicines, and Kampo medicine, we place importance on choosing and using everyday skincare products appropriately. Reviewing your skincare routine can also change the condition of your skin. We will ask what products you currently use and suggest a combination suited to you.</p>
            <p>You may also discuss the use of supplements when appropriate.</p>
            <p className="text-xs text-[#766d5e]">Results vary from person to person.</p>
          </div>
        </Section>

        <Section id="weight" title="Toward weight that can be maintained over time">
          <div className="space-y-4 text-sm leading-loose text-[#665e50] md:text-base">
            <p>Using medicine to reduce weight without other changes can also reduce muscle mass and metabolism, which may make weight regain more likely. At our clinic, medicine is used as an opportunity to review daily habits. While adjusting diet, exercise, and routines, we aim to help you develop the ability to manage your own weight.</p>
            <p>For people with a high BMI or medical conditions such as diabetes, treatment is considered according to their health status.</p>
            <p className="text-xs text-[#766d5e]">Results vary, and weight loss is not guaranteed.</p>
          </div>
        </Section>

        <Section id="hair" title="Hair care based on the possible cause">
          <div className="space-y-4 text-sm leading-loose text-[#665e50] md:text-base">
            <p>Oral medicines may be suggested according to the possible cause and individual health factors, including male-pattern hair loss and diffuse hair loss in women. You may also discuss shampoo, conditioner, other hair-care products, and supplements.</p>
            <p className="text-xs text-[#766d5e]">Results vary from person to person.</p>
          </div>
        </Section>

        <Section
          id="eyelid"
          title={<>Eye-drop treatment for acquired ptosis <span className="inline-flex rounded border border-[#ded4c3] px-2 py-1 align-middle text-xs font-normal text-[#8f8678]">Coming soon</span></>}
        >
          <div className="space-y-4 text-sm leading-loose text-[#665e50] md:text-base">
            <p>For people whose upper eyelid has drooped due to aging or another acquired cause, treatment with Upneeq Mini ophthalmic solution 0.1% may be considered. This medicine is approved in Japan and acts on a muscle that raises the eyelid. It is used once daily. Its effect is temporary and lasts only while the medicine continues to be used.</p>
            <h3 className="font-serif text-lg font-medium text-[#4b4338]">Before your online consultation</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Please send two photos showing both eyes on LINE before the appointment: one looking straight ahead and one looking upward.</li>
              <li>Join the video consultation in a bright location where your face and eyes can be seen clearly.</li>
              <li>Tell us in the questionnaire if you have glaucoma, heart disease, high blood pressure, another medical condition, take medicines, or use contact lenses.</li>
            </ul>
            <h3 className="font-serif text-lg font-medium text-[#4b4338]">A prescription may not be possible</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>If another eye condition is present.</li>
              <li>If an eyelid drooped suddenly, only one eye worsened suddenly, you see double, symptoms worsen in the evening, pupil size differs between the eyes, or symptoms occur with a headache.</li>
            </ul>
            <p>These symptoms can be signs of another condition, so consultation with an ophthalmologist or neurologist may be recommended.</p>
            <p className="text-xs text-[#766d5e]">Results vary from person to person.</p>
          </div>
        </Section>

        <Section title="Consultation fees (tax included)">
          <div className="overflow-hidden border border-[#ded4c3] bg-white/45">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-3">Consultation</th><th className="p-3">Fee</th></tr></thead>
              <tbody>
                <tr><td className="border-t p-3">Initial / regular follow-up, about 20 min</td><td className="border-t p-3">¥3,300</td></tr>
                <tr><td className="border-t p-3">Continuing follow-up within 2 months of your last consultation</td><td className="border-t p-3">¥2,200</td></tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#665e50]">
            <li>The continuing follow-up fee applies when the appointment is within two months of your last consultation and the same treatment plan is continued for the same concern. It applies whether or not you purchased medicine at the previous consultation.</li>
            <li>If you do not meet the conditions for a continuing follow-up, the ¥1,100 difference will be charged.</li>
            <li>For treatment review and adjustment, a consultation every two months is recommended.</li>
          </ul>
        </Section>

        <Section title="Medicine prices (tax included; self-pay care)">
          <div className="overflow-x-auto border border-[#ded4c3] bg-white/45">
            <table className="w-full min-w-[680px] text-left text-xs sm:text-sm">
              <thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-3">Area</th><th className="p-3">Medicine</th><th className="p-3">Price</th></tr></thead>
              <tbody>
                {medicines.map(([category, name, price, note]) => (
                  <tr key={`${category}-${name}`}>
                    <td className="border-t p-3 align-top text-[#8d7545]">{category}</td>
                    <td className="border-t p-3 align-top">
                      {name}
                      {note && <span className="ml-2 inline-flex rounded border border-[#ded4c3] px-1.5 py-0.5 text-[10px] text-[#8f8678]">{note.startsWith("Set") ? "Set" : note}</span>}
                      {note?.startsWith("Set") && <span className="mt-1 block text-xs text-[#766d5e]">{note.replace("Set — ", "")}</span>}
                    </td>
                    <td className="border-t p-3 align-top">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#665e50]">The physician decides whether a prescription is appropriate and determines the medicine and amount during the consultation. Information about medicines not listed above will be provided during the consultation.</p>
        </Section>

        <Section title="Shipping and payment">
          <div className="space-y-5 text-sm leading-loose text-[#665e50]">
            <p>Shipping: Standard ¥550 / Refrigerated, including Mounjaro, ¥1,100</p>
            <p>Prescriptions can be shipped to addresses in Japan only.</p>
            <h3 className="font-serif text-lg font-medium text-[#4b4338]">Payment process</h3>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Pay the consultation fee when booking.</li>
              <li>Attend the online consultation.</li>
              <li>When the medicine is shipped, we will email an invoice for the medicine, a payment URL, and a PDF with instructions for use.</li>
              <li>If you need a receipt, it can be sent after payment.</li>
            </ol>
            <p>We aim to ship within one week after payment is confirmed.</p>
          </div>
        </Section>

        <Section title="How to use the service">
          <ol className="grid gap-4 md:grid-cols-5">
            {[
              "Book and choose 「肌・ダイエット・育毛診察」; pay the consultation fee",
              "Complete the pre-consultation questionnaire",
              "Attend the online consultation, about 20 minutes",
              "Pay for prescribed medicines",
              "Receive the shipment at your address in Japan",
            ].map((item, index) => (
              <li key={item} className="border border-[#ded4c3] bg-white/45 p-4 text-sm leading-relaxed">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#b89e69] text-sm text-white">{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Unapproved medicines and off-label use">
          <div className="space-y-6 text-sm leading-loose text-[#665e50]">
            <p>Some medicines provided by our clinic are unapproved in Japan or are used for a purpose outside their approved indications. They are prescribed under the physician’s judgment and responsibility.</p>
            {disclosures.map(([title, items]) => (
              <div key={title} className="border-b border-[#ded4c3] pb-5">
                <h3 className="mb-2 font-serif text-lg font-medium text-[#4b4338]">{title}</h3>
                <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Important information about online consultations">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#665e50]">
            <li>Physical examination and testing cannot be performed online. Depending on the consultation, an in-person examination or consultation at another medical facility may be recommended.</li>
            <li>If you are pregnant or breastfeeding, have a medical condition, or take medicines, tell us in the booking questionnaire.</li>
            <li>A prescription may not be possible based on the physician’s assessment.</li>
          </ul>
        </Section>

        <section className="border-t border-[#ded4c3] py-12 text-center">
          <h2 className="mb-4 font-serif text-2xl font-medium text-[#3f3a32] md:text-3xl">Book an online consultation</h2>
          <p className="mb-6 text-sm leading-relaxed text-[#665e50]">The booking page is in Japanese. Please choose the category 「肌・ダイエット・育毛診察」 (Skin, Weight &amp; Hair consultation).</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={primaryButtonClass}>Book an online consultation</a>
            <a href={lineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>Ask on LINE</a>
          </div>
        </section>
        <div className="pt-2 text-center">
          <Link href="/music" className="text-xs text-[#8d7545] underline underline-offset-4">Music therapy consultations</Link>
        </div>
      </div>
    </main>
  )
}
