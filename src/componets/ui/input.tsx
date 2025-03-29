"use client"

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
  placeholder: string;
  value?:string;
  password?: boolean;
  icon?: IconDefinition
  filled?:boolean;
  onChange?:(newValue: string) => void;
  onEnter?: () => void;
}

export const Input = ({placeholder, onEnter,value,icon, onChange, filled,password}:Props) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.code.toLowerCase() === 'enter' && onEnter) {
      onEnter();
    }
  }
  return (
    <div className={`has-[:focus]:border-white flex items-center h-14  rounded-3xl
       border-2 border-gray-700 ${filled && 'bg-gray-700 '} `}>
      {icon &&
        <FontAwesomeIcon
          icon={icon}
          className="size-6 text-gray-500 ml-4"
        />
      }
      <input
        type={password && !showPassword ? 'password': 'text'}
        className=" flex-1 outline-none bg-transparent h-full px-4 "
        placeholder={placeholder}
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {password && 
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword? faEye : faEyeSlash}
          className="size-6 text-gray-500 mr-4 cursor-pointer"
        />
      } 
    </div>
  )
}