"use client"
import React from 'react'
import Button from "@components/Button"
import MainLayout from "@screens/MainLayout"


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
const SignUp = () => {
  
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
               <div className='flex  justify-between text-3xl'>
                   <Link href='/sign-in' className='p-4 cursor-pointer border-b-2 text-signup border-signup'>
                   
                   Sign In
                    
                   </Link>
                  <Link href='/sign-up' className='p-4 border-b-2 border-[#BAC6EC] text-[#BAC6EC]'> Sign Up
                    
                  </Link>
               </div>
           <form action="" method="get">
               <div className='w-full my-6 '>
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
   
               <div className='flex items-center text-xs md:text-sm my-3'><Checkbox/> Agree to the Terms & Conditions and Privacy Policy</div>
          
                   </form>
                           <Dialog>
                           <DialogTrigger className='w-full'>
                                   <Button googleIcon={false} width='full' 
                                   text="Create Account" color="signup"
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
                   <div className='bg-white p-2 rounded-full absolute left-1/2  -bottom-4'>Or</div>
               </div>
                       <div>
                       <Button googleIcon={true} width='full' 
                       text="Sign Up With Google" color="white"
                       className='text-black my-4'
                       />
                       </div>
           
                   <div className='text-center my-8'>
                       <p>Already Have An Account? <Link href='/sign-in' className='text-signup font-semibold'>Login</Link></p>
                   </div>
           </div>
           </div>
    </MainLayout>
    
  )
}

export default SignUp