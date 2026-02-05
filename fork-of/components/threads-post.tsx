import Image from "next/image"
import { Heart, MessageCircle, Repeat, Send } from "lucide-react"

interface ThreadsPostProps {
  username: string
  content: string
  timestamp: string
  likes: number
  replies: number
}

export function ThreadsPost({ username, content, timestamp, likes, replies }: ThreadsPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
      <div className="flex">
        {/* プロフィール画像 */}
        <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
          <Image
            src={`/placeholder.svg?height=100&width=100`}
            alt={username}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          {/* ユーザー名 */}
          <div className="flex items-center justify-between">
            <p className="font-semibold">{username}</p>
            <div className="flex items-center space-x-1">
              <p className="text-xs text-gray-500">{timestamp}</p>
              <span className="text-gray-500">•••</span>
            </div>
          </div>

          {/* 投稿内容 */}
          <p className="my-2 text-sm">{content}</p>

          {/* アクション */}
          <div className="flex space-x-4 mt-3">
            <Heart className="h-5 w-5" />
            <MessageCircle className="h-5 w-5" />
            <Repeat className="h-5 w-5" />
            <Send className="h-5 w-5" />
          </div>

          {/* いいね・返信数 */}
          <p className="text-xs text-gray-500 mt-2">
            {likes}件のいいね • {replies}件の返信
          </p>
        </div>
      </div>
    </div>
  )
}
