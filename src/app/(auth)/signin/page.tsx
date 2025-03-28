"use client"

import { SigninForm } from "@/componets/auth/signin-form";
import { Logo } from "@/componets/ui/logo";
import Link from "next/link";

const Page = () => {
    return (
      <div className="max-w-lg mx-auto mt-12  px-6">
        <Logo size={56} />
        <h1 className="mt-10 text-2xl">Entre na sua conta</h1>
        <div className=" mt-10 mb-14 flex flex-col gap-6">
          <SigninForm/>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:flex-row">
          <div className=" text-gray-500 ">Ainda não tem uma conta?</div>
          <Link href="/signup"
            className="hover:underline"
          >Cadastre-se</Link>
        </div>
       
      </div>
    )
}
export default Page;