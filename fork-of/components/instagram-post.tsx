import Image from "next/image"
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react"

interface InstagramPostProps {
  imageUrl: string
  username: string
  caption: string
  likes: number
  timestamp: string
}

export function InstagramPost({ imageUrl, username, caption, likes, timestamp }: InstagramPostProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      {/* ヘッダー */}
      <div className="flex items-center p-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
          <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center">
            <div className="h-6 w-6 rounded-full overflow-hidden">
              <Image
                src={`/placeholder.svg?height=60&width=60`}
                alt={username}
                width={60}
                height={60}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="ml-3">
          <p className="font-semibold text-sm">{username}</p>
        </div>
      </div>

      {/* 画像 */}
      <div className="relative aspect-square">
        <Image src={imageUrl || "/placeholder.svg"} alt={caption} fill className="object-cover" />
      </div>

      {/* アクション */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <Heart className="h-6 w-6" />
            <MessageCircle className="h-6 w-6" />
            <Send className="h-6 w-6" />
          </div>
          <Bookmark className="h-6 w-6" />
        </div>
        <p className="font-semibold text-sm mb-1">{likes}件のいいね</p>
        <p className="text-sm">
          <span className="font-semibold">{username}</span> {caption}
        </p>
        <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
      </div>
    </div>
  )
}
