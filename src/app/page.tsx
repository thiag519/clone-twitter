import { Input } from "@/componets/ui/input";
import { Logo } from "@/componets/ui/logo";
import { redirect } from "next/navigation";

export default function Page() {
  redirect('/home')
  return(
    <div className="min-h-screen flex justify-center items-center ">
      <Logo size={80}/>
    </div>
  )
}
