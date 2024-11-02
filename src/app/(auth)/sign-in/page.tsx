"use client"
import React from 'react'
import Button from "@components/Button"
import MainLayout from '@screens/MainLayout'
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Checkbox } from '@mui/material'
const SignIn = () => {

  return (
      
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
            <div className='flex  justify-between text-2xl md:text-3xl'>
                <Link href='/sign-in' className='p-4  text-[#BAC6EC] border-b-2 border-[#BAC6EC]'>
                     Sign In
                </Link>

                <Link href='/sign-up' className='p-4 cursor-pointer border-b-2 text-signup border-signup'> 
                    Sign Up
                </Link>
            </div>

                <form action="" method="get">
                        <div className='w-full my-8'>
                            <label className='font-semibold'>Email Address:</label>
                            <input type="text" placeholder='Enter Your Email Address' className='w-full p-4 border outline-none rounded-xl' />
                        </div>
                        <div className='w-full my-2'>
                            <label className='font-semibold'>Password:</label>
                            <input type="text" placeholder='Enter Your Password' className='w-full p-4 border outline-none rounded-xl' />
                        </div>

                        <div className='flex flex-col md:flex-row text-xs md:text-sm justify-between items-left md:items-center my-3 '>
                            <div><Checkbox/> Remember Me</div>
                            <div>Forgot your Password?<Link href='/reset' className='text-signup font-semibold'>Reset it here</Link></div>
                        </div>
                
                </form>
                        <Dialog>
                        <DialogTrigger className='w-full'>
                                    <Button googleIcon={false} width='full' 
                                    text="Login" color="signup"
                                    className='text-white my-4'
                                    />
                        </DialogTrigger>
                        <DialogContent className='max-w-md p-24 bg-white flex text-center'>
                            <DialogHeader className='flex justify-center items-center'>
                            <DialogTitle className='text-2xl'>Please Verify Your Email</DialogTitle>
                            <DialogDescription className='text-center'>
                            <p className='mb-4'>We have sent a verification link to your email. Please confirm account to proceed.</p>
                            <p>Verification link expires in 24 hours</p>
                                <Link href='/'>
                                <Button googleIcon={false} width='full' 
                                text="Proceed" color="signup"
                                className='text-white my-8'/>
                                </Link>
                                <Link href='' className='text-signup font-semibold'>Resend Verification</Link>
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                        </Dialog>

         
            <div className='relative border-b mb-8 py-2 border-black'>
                <div className='bg-white p-2 rounded-full absolute left-1/2 -bottom-4'>Or</div>
            </div>
            <div>
                <Button googleIcon={true} width='full' 
                text="Sign In With Google" color="white"
                className='text-black my-4'
                />
           
            </div>
                
                <div className='text-center my-8'>
                <p>Already Have An Account? <Link href='' className='text-signup font-semibold'>Login</Link></p> 
                </div>
        </div>
        </div>
    </MainLayout>
    
  )
}

export default SignIn