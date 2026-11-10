import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Injectable Treatment Correction Consultation | Apollon Beauty Clinic" },
  description: "English consultations for concerns about appearance or facial expression after filler or Botox treatments received at another clinic.",
  alternates: {
    canonical: "https://www.apollonbc.com/en/injectable-correction",
    languages: {
      en: "https://www.apollonbc.com/en/injectable-correction",
      ja: "https://www.apollonbc.com/correction",
    },
  },
}

const bookingUrl = "https://web.booking.clius.jp/reserve/apollonbc-onlin_medical-counseling"
const lineUrl = "https://lin.ee/oiYHa2N"
const buttonClass = "inline-flex min-h-12 w-full items-center justify-center rounded border border-[#b89e69] px-5 py-3 text-center text-sm text-[#8d7545] transition hover:bg-[#b89e69] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#b89e69] focus:ring-offset-2"

function BookingButton() {
  return <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-[#b89e69] font-medium text-white hover:bg-[#a08a59]`}>Book an online consultation (20 min, ¥3,300)</a>
}

function LineButton() {
  return <a href={lineUrl} target="_blank" rel="noopener noreferrer" className={buttonClass}>Ask on LINE</a>
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="scroll-mt-8 border-t border-[#ded4c3] py-12 md:py-16"><h2 className="mb-7 text-balance font-serif text-2xl font-medium leading-relaxed tracking-wide text-[#3f3a32] md:text-3xl">{title}</h2>{children}</section>
}

const concerns = [
  ["After Botox treatment", ["Asymmetry around the eyebrows, eyes, or mouth", "Facial expressions or your smile seem different from before treatment", "Questions about how the effect has developed or whether further adjustment may be considered"]],
  ["After hyaluronic acid filler treatment", ["Fullness, unevenness, or asymmetry", "The treated area looks unnatural", "Questions about options, including dissolving or correction"]],
] as const

const faqs = [
  ["Can I consult without a referral?", "Yes. You may contact us about concerns or correction after injectable treatment without a referral. Our regular aesthetic care is strictly referral-only."],
  ["Can I consult about treatment received at another clinic?", "Yes. We will review your treatment history and current condition and consider whether we can assist. Some concerns may not be treatable at our clinic."],
  ["Is it okay if I do not know the product name or amount injected?", "Please tell us whatever you know. If you have an invoice or treatment record, it may be helpful during the consultation."],
  ["Can you always restore my appearance to its original condition?", "Options depend on the product, treatment, time elapsed, and current condition. Complete improvement or restoration to the pretreatment condition is not guaranteed."],
] as const

export default function InjectableCorrectionPage() {
  return <main lang="en" className="min-h-screen bg-[#f8f4ec] font-sans text-[#3f3a32]">
    <header className="border-b border-[#ded4c3] bg-[#f8f4ec]/95 px-5 py-5 backdrop-blur"><div className="mx-auto flex max-w-5xl items-center justify-between gap-4"><Link href="/en" className="text-sm font-semibold tracking-wide text-[#8d7545]">Apollon.Beauty.Clinic</Link><Link href="/correction" hrefLang="ja" className="text-sm text-[#8d7545] underline underline-offset-4">日本語</Link></div></header>
    <div className="mx-auto max-w-5xl px-5 pb-24 md:px-8">
      <section className="py-14 md:py-20">
        <Link href="/en" className="mb-8 inline-block text-sm text-[#8d7545] underline underline-offset-4">Back to English services</Link>
        <p className="mb-5 text-xs tracking-[0.16em] text-[#8d7545]">INJECTABLE CORRECTION / NO REFERRAL REQUIRED</p>
        <h1 className="mb-6 max-w-4xl text-balance font-serif text-[2.15rem] font-medium leading-[1.45] tracking-[0.04em] text-[#3f3a32] md:text-5xl">Consultation for concerns after filler or Botox treatment</h1>
        <div className="max-w-3xl space-y-4 text-base leading-loose text-[#665e50] md:text-lg">
          <p>At Apollon Beauty Clinic, you may consult us about appearance or facial expression concerns after hyaluronic acid filler, Botox, or another injectable treatment received at another clinic.</p>
          <p>Our regular aesthetic care is strictly referral-only. Consultation about appearance and correction after injectable treatment is available without a referral.</p>
          <p>All examinations and counseling, from your first visit through follow-up care, are conducted by the clinic director, Dr. Misako Matsui. An initial in-person examination and counseling appointment is approximately 60 minutes.</p>
          <p>Consultations can be conducted in English.</p>
        </div>
        <p className="my-6 text-sm leading-relaxed text-[#8d7545]">Online initial consultation: 20 min, ¥3,300 / Initial in-person examination and counseling: about 60 min, ¥16,500<br />When treatment is performed on the same day as the initial in-person examination: examination fee ¥13,200 + treatment fee / Follow-up: examination fee ¥5,500 (about 20 min) + any required treatment fee<br />The ¥13,200 fee is not an addition to the regular ¥16,500 initial in-person fee. It is the examination fee applied when treatment is performed on the same day.</p>
        <div className="grid gap-3 sm:grid-cols-2"><BookingButton /><LineButton /></div>
        <p className="mt-3 text-xs leading-relaxed text-[#766d5e]">The booking page is in Japanese. Please choose 「顔面神経麻痺・注入修正」 (Facial palsy / Injectable correction).</p>
        <p className="mt-2 text-xs leading-relaxed text-[#766d5e]">To ask a question before booking, add us on LINE and send &quot;修正相談&quot; (you may also write your question in English). We cannot give a diagnosis or treatment plan on LINE.</p>
        <div className="mt-7 border border-[#c9a9a0] bg-[#fffaf7] p-4 text-sm leading-relaxed text-[#714d46]">If you have visual changes, severe pain, pale or dark skin discoloration, difficulty breathing, or difficulty swallowing, do not wait for a reply on LINE. Contact the clinic that performed your treatment or an emergency medical facility promptly.</div>
      </section>

      <Section id="concerns" title="Are you experiencing any of these concerns?">
        <div className="grid gap-5 md:grid-cols-2">{concerns.map(([title, items]) => <div key={title} className="flex h-full flex-col border border-[#ded4c3] bg-white/45 p-6"><h3 className="mb-4 font-serif text-lg font-medium leading-relaxed text-[#4b4338]">{title}</h3><ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#665e50]">{items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div>
        <div className="mt-5 bg-white/35 p-5 text-sm leading-relaxed text-[#665e50]">You may also tell us about wrinkles, hollowing, or facial changes after treatment such as under-eye fat removal. If you do not know the treatment or product name, provide whatever information you have.</div>
      </Section>

      <Section id="approach" title="We begin by evaluating your current condition">
        <p className="leading-loose text-[#665e50]">We review the time since treatment, the product and injection area, pre-existing asymmetry, and facial movement to evaluate your current condition. We then consider options such as observation, additional adjustment, or dissolving hyaluronic acid filler. We cannot promise that every condition can be corrected or restored to its pretreatment state.</p>
      </Section>

      <Section id="cases" title="Examples of concerns you may discuss">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="border border-[#ded4c3] bg-white/45 p-5"><h3 className="mb-3 font-serif font-medium leading-relaxed text-[#4b4338]">Asymmetry around the mouth when smiling after Botox</h3><p className="text-sm leading-relaxed text-[#665e50]">We review changes before and after treatment and facial movement, then consider observation or adjustment during the examination.</p></div>
          <div className="border border-[#ded4c3] bg-white/45 p-5"><h3 className="mb-3 font-serif font-medium leading-relaxed text-[#4b4338]">Wrinkles or hollowing became more noticeable after under-eye surgery</h3><p className="text-sm leading-relaxed text-[#665e50]">We evaluate the skin, volume, and balance with surrounding areas and consider whether treatment such as hyaluronic acid filler may be appropriate.</p></div>
        </div>
        <p className="mt-5 text-xs text-[#766d5e]">These are examples of consultation topics. They do not guarantee an individual outcome or improvement from treatment.</p>
      </Section>

      <Section id="flow" title="From your online initial consultation">
        <p className="mb-6 text-sm leading-loose text-[#665e50]">Please begin by booking an online initial consultation. Questions before booking are accepted on LINE. A diagnosis and specific treatment plan are determined after a physician&apos;s examination.</p>
        <ol className="space-y-6">{[
          ["Book an online initial consultation", "On the booking page, choose 「顔面神経麻痺・注入修正」 (Facial palsy / Injectable correction)."],
          ["Online initial consultation (20 min, ¥3,300)", "We ask when and what treatment you received, what currently concerns you, and how the condition has changed."],
          ["In-person examination", "If an in-person examination is considered necessary and possible, we visually examine and palpate facial movement and treated areas."],
          ["Treatment and next steps", "We explain the options, fees, and main risks. Treatment or observation is decided after you understand and agree."],
        ].map(([title, body], index) => <li key={title} className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b89e69] text-sm text-white">{index + 1}</span><div><h3 className="font-serif text-lg font-medium text-[#4b4338]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#665e50]">{body}</p></div></li>)}</ol>
        <div className="mt-8 grid gap-3 sm:grid-cols-2"><BookingButton /><LineButton /></div>
        <div className="mt-6 border border-[#ded4c3] bg-white/35 p-5 text-sm leading-relaxed text-[#665e50]"><h3 className="mb-3 font-serif text-lg font-medium text-[#4b4338]">Important information for online consultations</h3><ul className="list-disc space-y-1 pl-5"><li>Complete the connection test before entering the consultation.</li><li>Google Chrome is recommended.</li><li>LINE replies may not be immediate.</li><li>There is no cancellation fee.</li><li>You can change or cancel through the booking system until 24 hours before the appointment time.</li><li>After that time, contact us on LINE. Please make a new booking yourself through the booking system.</li></ul></div>
      </Section>

      <Section id="fees" title="Examination and treatment fees">
        <div className="mb-7 border border-[#ded4c3] bg-white/45 p-5 text-sm leading-relaxed text-[#665e50]"><h3 className="mb-3 font-serif text-lg font-medium text-[#4b4338]">The clinic director provides all care from the initial visit through follow-up.</h3><p>Regardless of whether this is your first or a follow-up visit, all examinations and counseling are conducted by the clinic director, Dr. Misako Matsui.</p><p className="mt-3">The physician directly discusses your concerns and treatment history, evaluates your facial condition, expression, and balance, and explains treatment options, risks, and fees. During follow-up care, we discuss the plan while reviewing your progress and changes.</p><p className="mt-3">We explain not only what treatment may do, but also what may be difficult and when observation without treatment is an option. We value sufficient discussion so that you can make an informed decision.</p><p className="mt-3">Approximately 60 minutes are reserved for physician examination and counseling at the first in-person appointment. Treatment time is separate.</p></div>
        <p className="mb-5 text-sm leading-relaxed text-[#665e50]">Appearance and correction consultations are self-pay care and differ from our regular referral-only aesthetic dermatology menu and campaign pricing.</p>
        <div className="overflow-x-auto border border-[#ded4c3] bg-white/45"><table className="w-full min-w-[560px] text-left text-xs sm:text-sm"><thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-3">Service</th><th className="p-3">Time</th><th className="p-3">Fee</th></tr></thead><tbody><tr><td className="border-t p-3">Online initial consultation</td><td className="border-t p-3">20 min</td><td className="border-t p-3">¥3,300</td></tr><tr><td className="border-t p-3">Initial in-person, consultation only</td><td className="border-t p-3">60 min</td><td className="border-t p-3">¥16,500</td></tr><tr><td className="border-t p-3">Initial in-person, treatment on the same day</td><td className="border-t p-3">Examination + treatment time</td><td className="border-t p-3">Examination ¥13,200 + treatment fee</td></tr><tr><td className="border-t p-3">Follow-up</td><td className="border-t p-3">—</td><td className="border-t p-3">Examination ¥5,500 (about 20 min) + required treatment fee</td></tr></tbody></table></div>
        <h3 className="mb-3 mt-8 font-serif text-lg font-medium text-[#8d7545]">Hyaluronic acid filler treatment</h3><p className="leading-relaxed text-[#665e50]">¥88,000 per syringe (1 cc) and up</p>
        <h3 className="mb-3 mt-8 font-serif text-lg font-medium text-[#8d7545]">Hyaluronic acid filler removal</h3><p className="leading-relaxed text-[#665e50]">Animal-derived product: ¥29,700 per 1 cc of medicine and up<br />Human-derived product: ¥44,000 per 1 cc of medicine and up</p>
        <h3 className="mb-3 mt-8 font-serif text-lg font-medium text-[#8d7545]">Facial balance Botox</h3><PriceTable first25="¥66,000" follow25="¥55,000" first50="¥110,000" follow50="¥99,000" />
        <h3 className="mb-3 mt-8 font-serif text-lg font-medium text-[#8d7545]">Botox treatment for facial palsy</h3><PriceTable first25="¥59,400" follow25="¥49,500" first50="¥99,000" follow50="¥89,100" />
        <p className="mt-4 text-sm leading-relaxed text-[#665e50]">Examination fees are charged separately and are not discounted. Continuing prices apply when treatment is within four months of the previous treatment for the same symptoms and purpose. We explain the treatment and fee before the procedure.</p>
      </Section>

      <section className="border-t border-[#ded4c3] py-10"><div className="border border-[#ded4c3] bg-white/35 p-5"><h2 className="mb-3 font-serif text-xl font-medium leading-relaxed">For facial expression concerns after facial palsy</h2><p className="mb-4 text-sm leading-relaxed text-[#665e50]">See the dedicated page for facial asymmetry or tightness that remains after facial palsy.</p><Link href="/en/facial-palsy" className={buttonClass}>View facial palsy consultation information</Link></div></section>

      <Disclosure title="Medical devices used for hyaluronic acid filler injections">
        <p><strong>Products used:</strong> We use hyaluronic acid filler products approved in Japan: Allergan&apos;s Juvéderm Vista® series and Galderma&apos;s Restylane® series.</p>
        <p><strong>Off-label use:</strong> Each product has approved purposes and injection sites. Injection into a site outside the approved sites is off-label. Before treatment, we explain whether the product and site constitute off-label use.</p>
        <p><strong>Source:</strong> The Juvéderm Vista® series is purchased from Allergan and the Restylane® series from Galderma through authorized distribution channels in Japan.</p>
        <p><strong>Approved devices in Japan:</strong> The Juvéderm Vista® and Restylane® series are hyaluronic acid filler products approved in Japan.</p>
        <p><strong>Safety information in other countries:</strong> These series are also approved in the United States. Reported serious complications include skin necrosis and visual impairment, including blindness, if the product enters or compresses a blood vessel.</p>
        <p><strong>Relief system:</strong> Injury resulting from off-label use may not be covered by a public relief system.</p>
      </Disclosure>

      <Disclosure title="Medicines used to remove hyaluronic acid filler">
        <p><strong>Unapproved medicines:</strong> Hyaluronidase used to break down hyaluronic acid filler is not approved under Japan&apos;s Pharmaceuticals and Medical Devices Act.</p>
        <p><strong>Medicines and source:</strong><br />Animal-derived: MesoMedica Hyaluronidase, manufactured by Aesthetic Experts Labs in Spain<br />Human-derived: Hylenex®, manufactured by Halozyme in the United States; recombinant human hyaluronidase<br />Both are imported personally by the physician through PRSS.Japan Co., Ltd. See the <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/kojinyunyu/index.html" target="_blank" rel="noreferrer" className="text-[#8d7545] underline underline-offset-4">Ministry of Health, Labour and Welfare information on purchasing medicines from overseas</a> for the risks of personally imported medicines.</p>
        <p><strong>Approved medicines in Japan:</strong> There is no medicine with the same ingredient approved in Japan for breaking down hyaluronic acid filler.</p>
        <p><strong>Safety information in other countries:</strong> Hylenex® was approved in the United States in 2005, but its approved uses include assisting the absorption and dispersion of other injected medicines; breaking down hyaluronic acid filler is not an approved use. The US prescribing information warns about allergic reactions and the spread of infection when injected into an infected area. We have not confirmed information showing that MesoMedica Hyaluronidase is approved as a medicine in major European or North American countries. Serious risks may therefore not yet be known.</p>
        <p><strong>Skin test before an animal-derived product:</strong> Before treatment, a small amount is injected under the skin of the upper arm to check for an immediate allergic reaction. The animal-derived product is used only if no problem is found. If a reaction occurs, it is not used and another option, such as a human-derived product, is proposed. This test cannot predict every allergic reaction.</p>
        <p><strong>Main risks and side effects:</strong> Pain, swelling, redness, bruising, or itching may occur at the injection site. Rarely, a severe allergic reaction such as hives or difficulty breathing may occur. The original tissue volume, as well as the injected hyaluronic acid, may be affected temporarily.</p>
        <p><strong>Relief system:</strong> Because these are unapproved medicines, serious adverse effects are not covered by Japan&apos;s Relief System for Adverse Drug Reactions.</p>
      </Disclosure>

      <Disclosure title="Medicine used for Botox treatment">
        <p><strong>Medicine used:</strong> We use Botox Vista® injection, a botulinum toxin type A product manufactured by Allergan.</p>
        <p><strong>Off-label use:</strong> This medicine is approved in Japan for glabellar or lateral canthal lines in adults under age 65 and masseter muscle prominence in adults under age 65. Use for other sites or purposes is off-label.</p>
        <p><strong>Source:</strong> Purchased from the domestic marketing authorization holder through authorized distribution channels.</p>
        <p><strong>Approved medicines in Japan:</strong> Domestic medicines with the same ingredient include Botox Vista® injection for the uses above and Botox® injection for conditions including blepharospasm and hemifacial spasm. An approval condition requires that Botox Vista® be used only by physicians who have completed the required training.</p>
        <p><strong>Safety information in other countries:</strong> It was first approved in the United States in 1989. The US prescribing information warns that effects may spread away from the injection site and cause generalized weakness, double vision, drooping eyelids, difficulty swallowing, difficulty speaking, or difficulty breathing from hours to weeks after injection. In rare cases, this can be life-threatening.</p>
        <p><strong>Relief system:</strong> In the event of serious adverse effects from off-label use, Japan&apos;s Relief System for Adverse Drug Reactions does not apply.</p>
      </Disclosure>

      <Section id="faq" title="Frequently asked questions"><div className="space-y-5">{faqs.map(([question, answer]) => <div key={question} className="border-b border-[#ded4c3] pb-5"><h3 className="font-serif text-lg font-medium text-[#8d7545]">Q. {question}</h3><p className="mt-2 text-sm leading-relaxed text-[#665e50]">A. {answer}</p></div>)}</div></Section>
      <Section id="urgent" title="If you have urgent symptoms"><div className="border border-[#c9a9a0] bg-[#fffaf7] p-5 text-sm leading-loose text-[#714d46]">If you have visual changes, severe pain, pale or dark skin discoloration, difficulty breathing, or difficulty swallowing, do not wait for a reply on LINE. Contact the clinic that performed your treatment or an emergency medical facility promptly. If you suddenly have difficulty moving your face, seek medical care promptly. If this occurs with limb weakness or slurred speech, call 119. LINE is not an emergency service.</div></Section>
      <section className="border-t border-[#ded4c3] py-12 text-center"><h2 className="mb-4 font-serif text-2xl font-medium">Please consult us rather than deciding alone</h2><p className="mb-6 text-sm leading-relaxed text-[#665e50]">Book an online initial consultation. For a question before booking, add us on LINE and send &quot;修正相談&quot;.</p><div className="grid gap-3 sm:grid-cols-2"><BookingButton /><LineButton /></div></section>
    </div>
  </main>
}

function PriceTable({ first25, follow25, first50, follow50 }: { first25: string; follow25: string; first50: string; follow50: string }) {
  return <div className="overflow-x-auto border border-[#ded4c3] bg-white/50"><table className="w-full min-w-[460px] text-left text-sm"><thead className="bg-[#eee7da] text-[#8d7545]"><tr><th className="p-3">Units</th><th className="p-3">Initial</th><th className="p-3">Follow-up / continuing</th></tr></thead><tbody><tr><td className="border-t p-3">25 U</td><td className="border-t p-3">{first25}</td><td className="border-t p-3">{follow25}</td></tr><tr><td className="border-t p-3">50 U</td><td className="border-t p-3">{first50}</td><td className="border-t p-3">{follow50}</td></tr></tbody></table></div>
}

function Disclosure({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="border-t border-[#ded4c3] py-10"><h2 className="mb-4 font-serif text-xl font-medium leading-relaxed text-[#3f3a32]">{title}</h2><div className="space-y-4 text-sm leading-relaxed text-[#665e50]">{children}</div></section>
}
