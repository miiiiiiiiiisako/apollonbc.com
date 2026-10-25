"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/y2mate_com_Sunset01HarpHealing_music_in_Okinawa_by_Misako_Matsui_V2-vVe9JFmeL4M3xOA0paQEEgjnxB9MUe.mp3")
    audioRef.current.loop = true
    audioRef.current.addEventListener("loadedmetadata", () => {
      if (audioRef.current) audioRef.current.currentTime = 8
    })
    return () => {
      audioRef.current?.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!audioRef.current) return
    if (isMuted) audioRef.current.pause()
    else audioRef.current.play().catch(() => undefined)
  }, [isMuted])

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8f4ec] text-[#4b4035]">
      <video autoPlay muted loop aria-hidden="true" className="fixed inset-0 z-0 h-full w-full object-cover opacity-70">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Natural%20Spirituality%20Story%20Musical%20Video%20Compilation-ixB3oE1D2TBq5OuLWCvkYraOnv8DGl.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-0 bg-[#f8f4ec]/65" />
      <button onClick={() => setIsMuted((value) => !value)} aria-label={isMuted ? "音声を再生" : "音声を停止"} className="absolute right-5 top-5 z-20 rounded-full border border-[#b89e69]/50 bg-white/60 p-3 text-[#8d7545] backdrop-blur">
        <span aria-hidden="true" className="text-sm">{isMuted ? "音声を再生" : "音声を停止"}</span>
      </button>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <header className="mb-14 text-center">
          <p className="mb-5 text-xs tracking-[0.32em] text-[#b89e69]">APOLLON.BEAUTY.CLINIC</p>
          <h1 className="font-serif text-4xl leading-tight text-[#594b3c] md:text-6xl">美しさと、癒し。</h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[#6f6658]">一人ひとりの調和を見つめる場所。</p>
        </header>

        <section aria-label="サービスを選択" className="grid gap-5 md:grid-cols-2">
          <Link href="/beauty-public" className="group border-t-2 border-[#b89e69] bg-[#fffaf2]/80 px-7 py-8 text-center shadow-sm transition hover:bg-[#fffaf2] md:px-10 md:py-12">
            <p className="text-xs tracking-[0.24em] text-[#b89e69]">BEAUTY CLINIC</p>
            <h2 className="mt-4 font-serif text-3xl text-[#594b3c] md:text-4xl">美容クリニック</h2>
            <p className="mt-5 text-sm leading-7 text-[#6f6658]">紹介制の美容診療・専門相談・オンライン診療・コスメ</p>
            <span className="mt-7 inline-flex text-sm font-medium text-[#8d7545] group-hover:underline">総合案内を見る →</span>
          </Link>
          <Link href="/music" className="group border-t-2 border-[#b89e69] bg-[#fffaf2]/80 px-7 py-8 text-center shadow-sm transition hover:bg-[#fffaf2] md:px-10 md:py-12">
            <p className="text-xs tracking-[0.24em] text-[#b89e69]">MUSIC THERAPY</p>
            <h2 className="mt-4 font-serif text-3xl text-[#594b3c] md:text-4xl">音楽療法</h2>
            <p className="mt-5 text-sm leading-7 text-[#6f6658]">ハープの音色で心身を深く癒し、本来の調和を取り戻す音楽療法</p>
            <span className="mt-7 inline-flex text-sm font-medium text-[#8d7545] group-hover:underline">準備中の案内を見る →</span>
          </Link>
        </section>

        <p className="mt-12 text-center text-xs tracking-wide text-[#6f6658]">Apollon.Beauty.Clinic</p>
      </div>
    </main>
  )
}
