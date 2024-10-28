import Link from 'next/link'
import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'

const ExploreButton = () => {
  return (
    <div>
         <Link href={"/"}  >
                <button
                  className="mt-3 w-full py-3 transparent text-base md:text-xl flex items-center justify-center font-medium text-login   
                   focus:outline-none sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Explore More
                  <span className='text-xl'> <BiRightArrowAlt/> </span>
                </button>
                </Link>
    </div>
  )
}

export default ExploreButton