import { TweetItem } from "@/componets/tweet/tweet-item";
import { TweetPost } from "@/componets/tweet/tweet-post";
import { GeneralHeader } from "@/componets/ui/general-header";
import { tweet } from "@/data/tweet";

const Page = () => {
  return (
    <div>
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg ">Voltar</div>
      </GeneralHeader>
      <div className=" border-t-2 border-gray-900 ">
        <TweetItem tweet={tweet}/>
        <div className="border-y-8 border-gray-900">
          <TweetPost/>
        </div>
        <TweetItem tweet={tweet} hideComments />
        <TweetItem tweet={tweet} hideComments />
        <TweetItem tweet={tweet} hideComments />
      </div>
    </div>
    
  )
};
export default Page;