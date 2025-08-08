"use client"

import { useEffect, useRef } from "react"

interface TwitterTweetProps {
  tweetId: string
  theme?: "light" | "dark"
}

export function TwitterTweet({ tweetId, theme = "light" }: TwitterTweetProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Twitter widgets.jsをロード
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    // ウィジェットが読み込まれたら、ツイートを作成
    script.onload = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
        // @ts-ignore - Twitterウィジェット用のグローバル変数
        window.twttr?.widgets.createTweet(tweetId, containerRef.current, {
          theme: theme,
          align: "center",
        })
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [tweetId, theme])

  return <div ref={containerRef} className="twitter-tweet-container" />
}

interface TwitterTimelineProps {
  username: string
  height?: number
  theme?: "light" | "dark"
}

export function TwitterTimeline({ username, height = 600, theme = "light" }: TwitterTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Twitter widgets.jsをロード
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    // ウィジェットが読み込まれたら、タイムラインを作成
    script.onload = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
        // @ts-ignore - Twitterウィジェット用のグローバル変数
        window.twttr?.widgets.createTimeline(
          {
            sourceType: "profile",
            screenName: username,
          },
          containerRef.current,
          {
            height: height,
            theme: theme,
            chrome: "noheader, nofooter",
          },
        )
      }
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [username, height, theme])

  return <div ref={containerRef} className="twitter-timeline-container" />
}
