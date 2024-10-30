import Image from 'next/image'
import React from 'react'
import ContactImage from "../../../public/assets/contact.png"
import Button from "@/app/components/Button"
import MainLayout from '../screens/MainLayout'
const Auth = () => {
  return (
      <div>
        <MainLayout>
         <div className='grid grid-cols-1 lg:grid-cols-2 my-8 py-4 lg:px-24'>
        <div className='px-8 w-full border shadow-lg py-8'>
            <div className='flex items-center text-center flex-col'>
            <h2 className='text-signup py-8 font-semibold'>Contact ChapterWise</h2>
                <p className='text-[#C3C7CB]'>We&#39;re offline right now, but we&#39;ll respond 
                    to your messages when we&#39;re back online 
                    <span>Please submit your email address and 
                        describe the question below</span>
                    
                </p>
            </div>
            <div>
            <div className='w-full my-4'>
                <label>Name:</label>
                <div className='p-4 border'>
                <input type="text" placeholder='Enter Your Full Name' className='w-full outline-none' />
                </div>
            </div>
            <div className='w-full my-8'>
                <label>Email Address:</label>
                <div className='p-4 w-full border'>
                <input type="text" placeholder='Enter Your Email Address' className='w-full outline-none' />
                </div>
                    
            </div>
            <div className=' w-full my-8'>
                <label>Message:</label>
                <textarea name="Message" id="" className='border w-full p-4'></textarea>

            </div>
            </div>
            <Button width='full' text="Send Message" color="signup"/>
        </div>
        
        <div className='bg-[#BAC6EC] flex items-center justify-center p-12 text-center'>
        <Image src={ContactImage} alt='contact'/>
        </div>
    </div>
    </MainLayout>
    </div>
  )
}

export default Auth