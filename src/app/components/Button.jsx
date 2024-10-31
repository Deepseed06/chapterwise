import Image from 'next/image'
import React from 'react'
import google from '../../../public/assets/google.png'
import { cn } from '@/lib/utils'

const Button = ({color, text, width, googleIcon, className}) => {
    
  return (
    <div className={cn(`bg-${color} mt-2 p-4 cursor-pointer flex justify-center w-${width} border
     border-${color} text-white rounded-xl text-center`, className)}>
      {googleIcon && <Image src={google}  alt='google-icon' className='mx-2' />}
      {text}
      </div>

  )
}

export default Button