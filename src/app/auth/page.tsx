"use client"
import React, { useState } from 'react'
import Button from "@/app/components/Button"
import MainLayout from '../screens/MainLayout'
import Link from 'next/link'
import { Checkbox } from '@mui/material'
const Auth = () => {
    const [signInScreen, setSignInScreen] = useState(true)
    const [signupScreen, setSignupScreen] = useState(false)
    const handleSignIn = () =>{
        setSignupScreen(true)
        setSignInScreen(false)
    }
    const handleSignUp = () =>{
        setSignInScreen(true)
        setSignupScreen(false)
    }
  return (
      <div>
        <MainLayout>
         <div className='grid grid-cols-1 lg:grid-cols-2 my-8 py-4 lg:px-24'>
         <div className='bg-signup relative  flex items-center justify-center p-12 text-center'>
            <div className='z-50 bg-center bg-cover bg-auth right-0 bg-no-repeat lg:top-0 -top-20 p-24 absolute'>
                
            </div>
            <div className='-bottom-20 lg:bottom-4 left-0 absolute bg-bottom p-24 bg-no-repeat bg-left-bottom'>

            </div>
            <div className='px-4 max-w-80 text-white text-xs'>
                <h2 className='text-2xl font-bold py-4'>Join ChapterWise Today!</h2>
                <p>Create your free account to start exploring 
                    chapter summaries, personalized book reviews, 
                    and engaging with the community.</p>
            </div>
        </div>
        <div className='px-8 w-full border shadow-lg bg-[#F9F9F9] py-2'>
            <div className='flex  justify-between text-3xl'>
                <div onClick={handleSignIn} className={`p-4 cursor-pointer text-[#BAC6EC] 
                    border-b-2 border-[#BAC6EC] ${ signupScreen?'border-[#BAC6EC] text-[#BAC6EC]':'text-signup border-signup'}  `}>Sign In</div>
                <div onClick={handleSignUp} className={`p-4 cursor-pointer border-b-2 border-signup text-signup
                     ${ signInScreen?'border-signup text-signup':'text-[#BAC6EC] border-[#BAC6EC]'}`}> Sign Up</div>
            </div>
                {
                    signupScreen && (
                        <form action="" method="get">
            <div className='w-full my-6'>
                <label className='font-semibold'>First Name:</label>
                <input type="text" placeholder='Enter Your First Name' className='w-full p-4 border outline-none rounded-xl' />
            </div>
            <div className='w-full my-3'>
                <label className='font-semibold'>Last Name:</label>
                <input type="text" placeholder='Enter Your Last Name' className='w-full p-4 border outline-none rounded-xl' />
            </div>
            <div className='w-full my-3'>
                <label className='font-semibold'>Email Address:</label>
                <input type="text" placeholder='Enter Your Email Address' className='w-full p-4 border outline-none rounded-xl' />
            </div>
            <div className='w-full my-3'>
                <label className='font-semibold'>Password:</label>
                <input type="text" placeholder='Enter Your Password' className='w-full p-4 border outline-none rounded-xl' />
            </div>
            <div className='w-full my-3'>
                <label className='font-semibold'>Confirm Password</label>
                <input type="text" placeholder='Confirm Your Password' className='w-full p-4 border outline-none rounded-xl' />
            </div>

            <div className='flex items-center my-3'><Checkbox/> Agree to the Terms & Conditions and Privacy Policy</div>
       
                </form>
                    )
                }
                {
                    signInScreen && (
                <form action="" method="get">
                        <div className='w-full my-8'>
                            <label className='font-semibold'>Email Address:</label>
                            <input type="text" placeholder='Enter Your Email Address' className='w-full p-4 border outline-none rounded-xl' />
                        </div>
                        <div className='w-full my-2'>
                            <label className='font-semibold'>Password:</label>
                            <input type="text" placeholder='Enter Your Password' className='w-full p-4 border outline-none rounded-xl' />
                        </div>

                        <div className='flex justify-between items-center my-3'>
                            <div><Checkbox/> Remember Me</div>
                            <div>Forgot your Password?<Link href='' className='text-signup font-semibold'>Reset it here</Link></div>
                        </div>
                
                </form>
                    )
                }
            <Button googleIcon={false} width='full' 
            text="Send Message" color="signup"
            className='my-6'
            />
            <div className='relative border-b mb-8 py-2 border-black'>
                <div className='bg-white p-2 rounded-full absolute left-56 -bottom-4'>Or</div>
            </div>
            <div>
            <Button googleIcon={true} width='full' 
            text="Sign Up With Google" color="white"
            className='text-black my-4'
            />
            </div>
        
        <div className='text-center my-8'>
            <p>Already Have An Account? <Link href='' className='text-signup font-semibold'>Login</Link></p>
        </div>
        </div>
        </div>
    </MainLayout>
    </div>
  )
}

export default Auth