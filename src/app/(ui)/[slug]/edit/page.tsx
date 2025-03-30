import { ProfileFeed } from "@/componets/profile/profile-feed";
import { Button } from "@/componets/ui/button";
import { GeneralHeader } from "@/componets/ui/general-header";
import { Input } from "@/componets/ui/input";
import { Textarea } from "@/componets/ui/textarea";
import { user } from "@/data/user";
import { faCamera, faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Page = () => {
  const isMe = true;
  return(
    <div>
      <GeneralHeader backHref="/">
        <div className="text-lg font-bold">Editar perfil</div>
       
      </GeneralHeader>
      <section className="border-b-2 border-gray-900">
        <div 
          className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center "
          style={{backgroundImage: 'url('+user.cover+')' }   }
        >
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faCamera} className="size-6"/>
          </div>
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faXmark} className="size-6"/>
          </div>
        </div>
        <div className="-mt-12  px-6">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="size-24 rounded-full"
          />
          <div className=" -mt-24 size-24 flex items-center justify-center">
            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-6"/>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4 ">
        <label htmlFor="">
          <p className="text-lg text-gray-500 mb-2">Name</p>
          <Input
            placeholder="Digite seu nome"
            value={user.name}
          />
        </label>
        <label htmlFor="">
          <p className="text-lg text-gray-500 mb-2">Bio</p>
          <Textarea 
            placeholder="Descreva você memos"
            value={user.bio}
            rows={4}
          />
        </label>
        <label htmlFor="">
          <p className="text-lg text-gray-500 mb-2">Link</p>
          <Input
            placeholder="Digite um link"
            value={user.link}
          />
        </label>
        <Button
          label="Salvar alterações"
          size={1}
        />
      </section>
    </div>
  )
};
export default Page;