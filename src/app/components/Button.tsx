import Image from 'next/image'
import React from 'react'
import google from '../../../public/assets/google.png'
import { cn } from '@/lib/utils'
import Spinner from './Spinner'

interface Props {
  color? : string;
  text? : string;
  width? : string | number;
  googleIcon? : boolean;
  className? : string;
  isLoading? : boolean;
  handleClick? : () => void;
}
const Button = ({color, text, width, googleIcon, className, isLoading, handleClick}: Props) => {
    
  return (
    <button onClick={handleClick} type='submit' className={cn(`bg-${color} mt-2 p-4 cursor-pointer flex justify-center w-${width} border
     border-${color} text-white rounded-xl text-center`, className)}>
      {googleIcon && <Image src={google}  alt='google-icon' className='mx-2'  />}
      {
        isLoading ? <Spinner sm/>
        : text
      }
      </button>

  )
}

export default Button