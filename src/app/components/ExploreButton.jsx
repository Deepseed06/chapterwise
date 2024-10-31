import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const ExploreButton = ({className}) => {
  return (
    <div className='relative '>
         <Link href={"/"}  >
                <button
                  className= {cn("mt-8  flex items-center right-0 absolute py-3 text-base md:text-xl font-medium text-login",className)}
                >
                  Explore More
                  <span className='text-xl'> <BiRightArrowAlt/> </span>
                </button>
                </Link>
    </div>
  )
}

export default ExploreButton