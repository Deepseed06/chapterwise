import Image from 'next/image'
import React from 'react'
import ContactImage from "../../../public/assets/contact.png"
import Button from "./Button"
const Contact = () => {
  return (
    <div className='grid grid-cols-2  my-8 py-4 px-24'>
        <div>
            <div>
            <h2>Contact ChapterWise</h2>
                <p>We're offline right now, but we'll respond 
                    to your messages when we're back online <br />
                    <span>Please submit your email address and 
                        describe the question below</span>
                    
                </p>
            </div>
            <div>
            <div>
                <label>Name:</label>
                <input type="text" placeholder='Enter Your Full Name' />
            </div>
            <div className='w-full border-2'>
                <label>Email Address:</label>
                <input type="text" placeholder='Enter Your Email Address' />
            </div>
            <div>
                <label>Message:</label>
                <input type="text" placeholder='Enter Your Message' />
            </div>
            </div>
            <Button text="Send Message" color="signup"/>
        </div>
        
        <div className='bg-[#BAC6EC] p-12 text-center'>
        <Image src={ContactImage} alt='contact'/>
        </div>
    </div>
  )
}

export default Contact