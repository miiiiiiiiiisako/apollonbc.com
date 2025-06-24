"use client"

import { useEffect, useState } from "react"

interface TwitterTimelineSimpleProps {
  username: string
  width?: number
  height?: number
  theme?: "light" | "dark"
}

export function TwitterTimelineSimple({
  username,
  width = 400,
  height = 600,
  theme = "light",
}: TwitterTimelineSimpleProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Twitter widgets.jsスクリプトを動的に読み込み
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"

    script.onload = () => {
      setIsLoaded(true)
      // 5秒後にタイムラインが読み込まれていない場合はエラーとする
      setTimeout(() => {
        const timeline = document.querySelector(".twitter-timeline")
        if (timeline && timeline.textContent?.includes("Tweets by")) {
          setHasError(true)
        }
      }, 5000)
    }

    script.onerror = () => {
      setHasError(true)
    }

    // スクリプトが既に存在しない場合のみ追加
    if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
      document.body.appendChild(script)
    } else {
      setIsLoaded(true)
    }

    // コンポーネントがアンマウントされる時にスクリプトを削除
    return () => {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript)
      }
    }
  }, [])

  if (hasError) {
    return (
      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Xの投稿を読み込めませんでした</h3>
        <p className="text-gray-600 mb-4">
          アカウントが一時的に利用できない状態です。
          <br />
          最新情報は直接Xアカウントをご確認ください。
        </p>
        <a
          href={`https://x.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          @{username}を見る
        </a>
      </div>
    )
  }

  return (
    <div className="twitter-timeline-container">
      {!isLoaded && (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b89e69] mx-auto mb-4"></div>
          <p className="text-gray-600">Xの投稿を読み込み中...</p>
        </div>
      )}
      <a
        className="twitter-timeline"
        href={`https://x.com/${username}`}
        data-lang="ja"
        data-width={width.toString()}
        data-height={height.toString()}
        data-theme={theme}
        style={{ display: isLoaded ? "block" : "none" }}
      >
        Tweets by {username}
      </a>
    </div>
  )
}
