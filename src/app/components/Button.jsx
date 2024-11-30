import Image from 'next/image'
import React from 'react'
import google from '../../../public/assets/google.png'
import { cn } from '@/lib/utils'
import Spinner from './Spinner'

const Button = ({color, text, width, googleIcon, className, isLoading}) => {
    
  return (
    <button type='submit' className={cn(`bg-${color} mt-2 p-4 cursor-pointer flex justify-center w-${width} border
     border-${color} text-white rounded-Sxl text-center`, className)}>
      {googleIcon && <Image src={google}  alt='google-icon' className='mx-2' />}
      {
        isLoading ? <Spinner sm/>
        : text
      }
      </button>

  )
}

export default Button