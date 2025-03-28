type Props = {
  label: string;
  onClick?: () => void;
  size: 1| 2| 3;
}

export const Button = ( { label, onClick, size }:Props ) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer 
        rounded-3xl  font-bold bg-white text-black
        ${size === 1 && 'h-14 text-lg'}
        ${size === 2 && 'h-10 text-md'}
        ${size === 3 && 'h-7 text-xs'}
        `}  
    >
      {label}
    </div>
  )
}