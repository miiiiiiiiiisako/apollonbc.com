import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Facial Palsy Consultation | Apollon Beauty Clinic" },
  description: "English consultation information for facial asymmetry, tightness, and expression concerns that remain after facial palsy.",
  alternates: {
    canonical: "https://www.apollonbc.com/en/facial-palsy",
    languages: {
      en: "https://www.apollonbc.com/en/facial-palsy",
      ja: "https://www.apollonbc.com/facial-palsy",
    },
  },
}

const bookingUrl = "https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
const lineUrl = "https://lin.ee/oiYHa2N"
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-t border-[#ded4c3] py-12 md:py-16"><h2 className="mb-7 text-balance font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2>{children}</section>
}

function ActionButtons() {
  return <div className="grid gap-3 sm:grid-cols-2"><a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-[#b89e69] font-medium text-white hover:bg-[#a08a59]`}>Book an online consultation (20 min, ¥3,300)</a><a href={lineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>Ask on LINE</a></div>
}

const concerns = [
  "Asymmetry around the mouth is noticeable when smiling or speaking",
  "Moving the mouth also moves the eye area, or closing the eyes also moves the mouth",
  "Tightness or pulling around the cheeks, mouth, or eyes",
  "Stronger movement on the unaffected side makes the asymmetry appear greater",
  "Concern about facial expression in photographs or conversation",
]

const faqs = [
  ["Can I consult without a referral?", "Yes. Consultation for expression concerns after facial palsy is available without a referral. Our regular aesthetic care is strictly referral-only."],
  ["Will the palsy be cured?", "This treatment does not cure the palsy itself. It aims to reduce asymmetry and tightness that remain afterward. The degree of change varies from person to person."],
  ["How soon after onset may I consult?", "The main focus is symptoms that remain after the course of treatment for the palsy has stabilized. The timing varies, so please discuss your situation during an online initial consultation."],
  ["Can I use Japanese health insurance?", "No. This is self-pay care and Japanese health insurance does not apply."],
  ["Is a discount available?", "The procedure fee for Botox treatment for facial palsy is offered at 10% off the standard fee. Examination fees are not discounted."],
] as const

export default function EnglishFacialPalsyPage() {
  return <main lang="en" className="min-h-screen bg-[#f8f4ec] font-sans text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between gap-4"><Link href="/en" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><Link href="/facial-palsy" hrefLang="ja" className="text-sm text-[#8d7545] underline underline-offset-4">日本語</Link></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-14 md:py-20">
        <Link href="/en" className="mb-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">Back to English services</Link>
        <p className="mb-5 text-xs tracking-[0.16em] text-[#8d7545]">FACIAL PALSY CONSULTATION / NO REFERRAL REQUIRED</p>
        <h1 className="mb-6 max-w-4xl text-balance font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.04em] text-[#3f3a32] md:text-5xl">For facial asymmetry or tightness that remains after facial palsy</h1>
        <div className="mb-8 max-w-3xl space-y-4 text-base leading-loose text-[#665e50] md:text-lg"><p>Facial asymmetry, tightness, or a different feeling when smiling may continue after treatment for facial palsy. The physician carefully evaluates facial movement and your history and considers with you whether Botox treatment may be appropriate.</p><p>No referral is required. All examinations and counseling are conducted by the clinic director, Dr. Misako Matsui.</p><p>Consultations can be conducted in English.</p></div>
        <ActionButtons />
        <p className="mt-3 text-xs leading-relaxed text-[#766d5e]">The booking page is in Japanese. Please choose 「顔面神経麻痺・注入修正」 (Facial palsy / Injectable correction).</p>
        <p className="mt-2 text-xs leading-relaxed text-[#766d5e]">To ask a question before booking, add us on LINE and send &quot;顔面神経麻痺相談&quot; (you may also write your question in English).</p>
      </section>

      <Section title="Are you experiencing any of these concerns?"><ul className="grid gap-3 md:grid-cols-2">{concerns.map(item => <li key={item} className="border border-[#ded4c3] bg-white/45 p-4 text-sm leading-relaxed text-[#665e50]">{item}</li>)}</ul></Section>

      <Section title="Our approach to treatment"><h3 className="mb-4 font-serif text-xl font-medium leading-relaxed text-[#4b4338] md:text-2xl">Adjusting overactive muscles to support facial balance</h3><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p>After facial palsy, some muscles may remain weak while others may move or tense excessively.</p><p>We examine facial movement, muscle tension, and left-right balance. Botox may be used to reduce excessive movement or tension with the aim of reducing asymmetry and tightness. In some cases, movement on the unaffected side is adjusted.</p><p>The effect and duration vary from person to person. Effects generally fade gradually over several months, so ongoing treatment may be discussed while monitoring your progress.</p></div></Section>

      <Section title="Before requesting a consultation"><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p>If the palsy began recently or recovery is still in progress, prioritize treatment and assessment at an ear, nose and throat clinic, neurology clinic, or another medical facility that treats facial palsy. Our consultation mainly concerns symptoms remaining after the treatment course for facial palsy has stabilized. If you are currently being treated elsewhere, consult your treating physician as well.</p><p className="border-l border-[#b89e69] pl-4">This treatment does not cure the palsy itself. It is not appropriate for everyone, and treatment may not be recommended after examination.</p></div></Section>

      <Section title="How the consultation works"><ol className="space-y-6">{[
        ["Book an online initial consultation", "On the booking page, choose 「顔面神経麻痺・注入修正」 (Facial palsy / Injectable correction)."],
        ["Online initial consultation (20 min, ¥3,300)", "We ask about your history and concerns and consider whether the symptoms may be suitable for this treatment."],
        ["In-person examination", "If an in-person examination is considered necessary and possible, we visually examine and palpate facial movement, muscle tension, and asymmetry."],
        ["Treatment and follow-up", "If treatment is considered appropriate, we explain the procedure, fees, and risks. Treatment is performed after you understand and agree. We review the effect and adjust future treatment."],
      ].map(([title, body], index) => <li key={title} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b89e69] text-sm text-white">{index + 1}</span><div><h3 className="font-serif text-lg font-medium text-[#4b4338]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#665e50]">{body}</p></div></li>)}</ol><p className="mt-8 text-sm leading-loose text-[#665e50]">For a question before booking, add us on LINE and send &quot;顔面神経麻痺相談&quot;. You may write your question in English. A diagnosis or treatment plan cannot be provided on LINE.</p></Section>

      <Section title="Fees (self-pay care; Japanese health insurance does not apply)">
        <div className="space-y-6 text-sm leading-relaxed text-[#665e50]"><div><h3 className="mb-3 font-serif text-lg font-medium text-[#4b4338]">Examination fees</h3><ul className="space-y-2"><li>Online initial consultation: 20 min, ¥3,300</li><li>First in-person examination: about 60 min, ¥16,500</li><li>When treatment is performed on the same day as the first in-person examination: examination fee ¥13,200 + treatment fee</li><li>Follow-up: examination fee ¥5,500 (about 20 min) + treatment fee</li></ul><p className="mt-3 text-xs">The online initial consultation fee is required separately from the in-person examination fee.</p></div>
          <div><h3 className="mb-3 font-serif text-lg font-medium text-[#4b4338]">Botox treatment for facial palsy (prices after 10% discount)</h3><div className="overflow-x-auto border border-[#ded4c3] bg-white/45"><table className="w-full min-w-[460px] text-left text-xs sm:text-sm"><thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-3">Units</th><th className="p-3">Initial</th><th className="p-3">Follow-up / continuing</th></tr></thead><tbody><tr><td className="border-t p-3">25 U</td><td className="border-t p-3">¥59,400</td><td className="border-t p-3">¥49,500</td></tr><tr><td className="border-t p-3">50 U</td><td className="border-t p-3">¥99,000</td><td className="border-t p-3">¥89,100</td></tr></tbody></table></div><ul className="mt-3 space-y-1 text-xs"><li>Examination fees are charged separately and are not discounted. The physician determines whether treatment is appropriate and the required number of units.</li><li>Continuing prices apply when treatment is within four months of the previous treatment for the same symptoms and purpose.</li><li>The treatment and fee are explained before the procedure.</li></ul></div>
        </div>
      </Section>

      <Section title="Medicine used for treatment"><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p><strong>Medicine used:</strong> We use Botox Vista® injection, a botulinum toxin type A product manufactured by Allergan.</p><p><strong>Off-label use:</strong> This medicine is approved in Japan for glabellar or lateral canthal lines in adults under age 65 and masseter muscle prominence in adults under age 65. Use for facial asymmetry or tightness after facial palsy is off-label.</p><p><strong>Source:</strong> Purchased from the domestic marketing authorization holder through authorized distribution channels.</p><p><strong>Approved medicines in Japan:</strong> Domestic medicines with the same ingredient include Botox Vista® injection for the uses above and Botox® injection for conditions including blepharospasm and hemifacial spasm, but neither is approved for symptoms after facial palsy. An approval condition requires that Botox Vista® be used only by physicians who have completed the required training.</p><p><strong>Safety information in other countries:</strong> It was first approved in the United States in 1989, but symptoms after facial palsy are not among its approved uses. The US prescribing information warns that effects may spread away from the injection site and cause generalized weakness, double vision, drooping eyelids, difficulty swallowing, difficulty speaking, or difficulty breathing from hours to weeks after injection. In rare cases, this can be life-threatening.</p><p><strong>Relief system:</strong> Because this is off-label use, serious adverse effects are not covered by Japan&apos;s Relief System for Adverse Drug Reactions.</p></div></Section>

      <Section title="Main risks and side effects"><div className="space-y-4 text-sm leading-loose text-[#665e50]"><p>Pain, bruising, or swelling at the injection site; temporary changes in facial expression; difficulty moving the eyelid or mouth; and headache may occur. The degree and duration of the effect vary. Asymmetry may remain, or the expected change may not occur.</p><p>Treatment may not be available if you are pregnant or breastfeeding, have a nerve or muscle disorder such as myasthenia gravis, or have had an allergic reaction to a botulinum toxin product.</p><p>If you develop difficulty swallowing, difficulty speaking, or difficulty breathing after treatment, seek medical care promptly.</p></div></Section>

      <Section title="Frequently asked questions"><div className="space-y-5">{faqs.map(([question, answer]) => <div key={question} className="border-b border-[#ded4c3] pb-5"><h3 className="font-serif text-lg font-medium text-[#8d7545]">Q. {question}</h3><p className="mt-2 text-sm leading-relaxed text-[#665e50]">A. {answer}</p></div>)}</div></Section>

      <Section title="If you have urgent symptoms"><p className="border border-[#c9a9a0] bg-[#fffaf7] p-5 text-sm leading-loose text-[#714d46]">If you suddenly have difficulty moving your face, seek medical care promptly. If this occurs with limb weakness or slurred speech, call 119. LINE is not an emergency service.</p></Section>

      <Section title="Important information for online consultations"><ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#665e50]"><li>Complete the connection test before entering the consultation.</li><li>Google Chrome is recommended.</li><li>LINE replies may not be immediate.</li><li>There is no cancellation fee.</li><li>You can change or cancel through the booking system until 24 hours before the appointment time.</li><li>After that time, contact us on LINE. Please make a new booking yourself through the booking system.</li></ul></Section>

      <section className="border-t border-[#ded4c3] py-12 text-center"><h2 className="mb-4 font-serif text-2xl font-medium md:text-3xl">Booking and questions</h2><p className="mb-6 text-sm leading-relaxed text-[#665e50]">On the booking page, choose 「顔面神経麻痺・注入修正」 (Facial palsy / Injectable correction).</p><ActionButtons /><p className="mt-4 text-xs text-[#766d5e]">After adding us on LINE, send &quot;顔面神経麻痺相談&quot;. You may write your question in English.</p><Link href="/en" className="mt-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">Back to English services</Link></section>
    </div>
  </main>
}
