"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import { Input } from "@/componets/ui/input";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

export const SigninForm = () => {
  const router = useRouter();
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const handleEnterButto = () => {
    router.replace('/home')
  }

  return(
    <>
      <Input
        placeholder="Digite seu e-mail"
        value={emailField}
        onChange={t => setEmailField(t)}
        
      />
      <Input
        placeholder="Digite sua senha"
        value={passwordField}
        onChange={t => setPasswordField(t)}
        password
      />
      <Button
        size={1}
        label="Entrar"
        onClick={handleEnterButto}
      />
  </>
  )
}