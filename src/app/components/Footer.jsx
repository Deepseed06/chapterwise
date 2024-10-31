import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center relative bg-footer bg-left bg-no-repeat justify-center  text-white  bg-signup p-8 lg:py-24'>
        <div className='text-sm md:text-3xl lg:mr-16  px-2 lg:-ml-8  font-bold'>ChapterWise</div>
        <div className='text-left  flex  items-start justify-start text-wrap 
        md:mb-0 lg:text-nowrap 
        md:gap-5 lg::grid-cols-4 md:grid-cols-3'>

        <div className='text-xs md:text-lg px-2 space-y-2  '> 
            <h2 className='font-semibold '>Quick Links</h2>
            <p>Discover</p>
            <p>Community</p>
            <p>Blog Post</p>
        </div>
        <div className=' text-xs md:text-lg px-2 space-y-2 '> 
            <h2 className='font-semibold'>Information</h2>
            <p>About us </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='flex flex-col text-xs md:text-lg text-left px-2 space-y-2 ml-4'>  
            <h2 className='font-semibold'>Support</h2>
            <p>Contact us</p>
            <p>FAQ</p>
            
        </div>
        <div className='hidden lg:text-sm  lg:py-8 md:block text-xs md:mr-24 md:text-lg px-2 text-left md:text-left border-l'>
            <p className='font-light '>&copy;Copyright 2022</p> 
            <p className='font-light'>All Rights Reserved - ChapterWise</p>
        </div>
        
    </div>
    <div className='md:hidden text-xs absolute right-40% ml-16 bottom-0  lg:w-96  md:text-lg px-2 text-left md:text-left border-l'>
            <p className='font-light '>&copy;Copyright 2022</p> 
            <p className='font-light'>All Rights Reserved - ChapterWise</p>
        </div>
    </div>
  )
}

export default Footer