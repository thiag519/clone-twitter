import { Tweet } from "@/types/tweet"
import Link from "next/link";

type Props = {
  tweet: Tweet;
}

export const TweetItem = ({ tweet }:Props) => {
  return (
    <div className="flex gap-2 p-6 border-b-2 border-gray-900" >
      <div>
        <Link href={`/${tweet.user.slug}`}>
        ...
        </Link>
      </div>
    </div>
  )
}