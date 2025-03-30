import { tweet } from "@/data/tweet"
import { TweetItem } from "../tweet/tweet-item"
import { TweetPost } from "../tweet/tweet-post"

export const ProfileFeed = () => {
  return (
    <div>
      <TweetItem tweet={tweet}/>
      <TweetItem tweet={tweet}/>
      <TweetItem tweet={tweet}/>
    </div>
  )
}