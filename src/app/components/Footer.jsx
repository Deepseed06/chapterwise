import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center bg-footer bg-left bg-no-repeat justify-center  text-white  bg-signup p-8'>
        <div className='text-lg px-2 mr-2 font-semibold'>ChapterWise</div>
        <div className='w-full grid grid-cols-2 gap-5 lg:grid-cols-4 md:grid-cols-3'>

        <div className='text-xs md:text-lg px-2  text-center '> 
            <h2 className='font-semibold '>Quick Links</h2>
            <p>Discover</p>
            <p>Community</p>
            <p>Blog Post</p>
        </div>
        <div className='text-xs md:text-lg px-2 '> 
            <h2 className='font-semibold'>Information</h2>
            <p>About us </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='flex flex-col text-xs md:text-lg text-center px-2 '>  
            <h2 className='font-semibold'>Support</h2>
            <p>Contact us</p>
            <p>FAQ</p>
            
        </div>
        <div className='text-xs md:text-lg px-2 text-left md:text-center border-l'>
            <h2 className='font-semibold'>Support</h2>
            <p className='font-semibold'>&copy;Copyright 2022</p> 
            <p>All Rights Reserved - ChapterWise</p>
        </div>
    </div>
    </div>
  )
}

export default Footer