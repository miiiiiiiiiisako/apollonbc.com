"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/y2mate_com_Sunset01HarpHealing_music_in_Okinawa_by_Misako_Matsui_V2-vVe9JFmeL4M3xOA0paQEEgjnxB9MUe.mp3")
    audio.loop = true
    audio.volume = 0.05
    audio.addEventListener("loadedmetadata", () => { audio.currentTime = 8 })
    audioRef.current = audio
    return () => { audio.pause(); audioRef.current = null }
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    if (audio) {
      if (isMuted) {
        audio.currentTime = 8
        audio.play().catch(() => undefined)
      } else {
        audio.pause()
      }
    }
    setIsMuted((value) => !value)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f4ec] text-[#3f3a32]">
      <video autoPlay muted loop className="fixed inset-0 z-0 h-full w-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Natural%20Spirituality%20Story%20Musical%20Video%20Compilation-ixB3oE1D2TBq5OuLWCvkYraOnv8DGl.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0 bg-[rgba(248,244,236,0.68)]" />
      <button onClick={toggleMute} aria-label={isMuted ? "音声を再生" : "音声を停止"} className="absolute right-5 top-5 z-10 rounded-full bg-white/60 p-2 text-[#8d7545]">
        {isMuted ? "♪" : "Ⅱ"}
      </button>
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16 text-center">
        <p className="mb-5 text-xs tracking-[0.28em] text-[#8d7545]">Apollon.Beauty.Clinic</p>
        <h1 className="mb-5 font-serif text-4xl font-medium tracking-wide text-[#4b4338] md:text-5xl">Beauty and healing space.</h1>
        <p className="mb-12 text-sm tracking-[0.12em] text-[#665e50]">Refresh body and mind.</p>
        <div className="grid w-full max-w-2xl gap-5 sm:grid-cols-2">
          <Link href="/beauty-public" className="group border border-[#b89e69] bg-[#f8f4ec]/85 px-7 py-9 text-left transition hover:bg-white/90">
            <p className="mb-3 text-xs tracking-[0.2em] text-[#8d7545]">BEAUTY CLINIC</p>
            <h2 className="mb-3 font-serif text-2xl text-[#4b4338]">美容クリニック</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#665e50]">紹介制の美容診療・専門相談・オンライン診療・コスメ</p>
            <span className="text-sm text-[#8d7545] underline underline-offset-4">総合案内を見る →</span>
          </Link>
          <Link href="/music" className="group border border-[#b89e69] bg-[#f8f4ec]/85 px-7 py-9 text-left transition hover:bg-white/90">
            <p className="mb-3 text-xs tracking-[0.2em] text-[#8d7545]">MUSIC THERAPY</p>
            <h2 className="mb-3 font-serif text-2xl text-[#4b4338]">音楽療法</h2>
            <p className="mb-6 text-sm leading-relaxed text-[#665e50]">ハープの音色で心身を深く癒し、本来の調和を取り戻します。</p>
            <span className="text-sm text-[#8d7545] underline underline-offset-4">音楽療法を見る →</span>
          </Link>
        </div>
        <p className="mt-8 text-xs text-[#766d5e]">音楽療法の一部サービスは準備中です。</p>
      </section>
    </main>
  )
}
