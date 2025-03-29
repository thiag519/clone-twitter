import { HomeFeed } from "@/componets/home/home-feed";
import { HomeHeader } from "@/componets/home/home-header";
import { TweetPost } from "@/componets/tweet/tweet-post";

export default function Page() {
  return (
    <div>
      <HomeHeader/>
      <TweetPost/>
      <HomeFeed/>
    </div>
  )
}