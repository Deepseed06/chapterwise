"use client"
import Button from "@/app/components/Button"
import MainLayout from '../../screens/MainLayout'
import Link from 'next/link'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
const Reset = () => {
  return (
      
        <MainLayout>
        <div className='grid grid-cols-1 lg:grid-cols-2 my-8 py-4 lg:px-24'>
        <div className='bg-signup relative  flex items-center justify-center p-12 text-center'>
            <div className='z-50 bg-center bg-cover bg-auth right-0 bg-no-repeat lg:top-0 -top-20 p-24 absolute'>
                
            </div>
            <div className='-bottom-20 lg:bottom-4 left-0 absolute bg-bottom p-24 bg-no-repeat bg-left-bottom'>

            </div>
            <div className='px-4 max-w-80 text-white text-xs'>
                <h2 className='text-2xl font-bold py-4'>Reset Your Password</h2>
                <p>Forgot your password? No worries! 
                  Enter your email below, and we&apos;ll send 
                  you instructions to reset it.</p>
            </div>
        </div>
        <div className='p-12 border'>

            <form action="" method="get">
                    <div className='w-full my-4'>
                        <label className='font-semibold'>Email Address:</label>
                        <input type="text" placeholder='Enter Your Email Address' className='w-full p-4 border outline-none rounded-xl' />
                    </div>
            </form>
            <Dialog>
            <DialogTrigger className='w-full'>
                        <Button googleIcon={false} width='full' 
                        text="Send Reset Instructions" color="signup"
                        className='text-white'
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

              <div className='text-center mt-2'>
              Check your email for a link 
              to reset your password. If you don&apos;t 
              see it&apos; check your spam folder or try again.
              </div>
            <div className='text-center my-8'>
              <p>Have An Account? <Link href='/sign-in' className='text-signup 
              font-semibold'>Login here</Link></p>
            </div>
          <div className='relative border-b mb-8 py-2 border-black'>
              <div className='bg-white p-2 rounded-full absolute left-1/2 -bottom-4'>Or</div>
          </div>
        
      
            <div className='text-center my-8'>
              <p>Don&apos;t Have An Account? <Link href='/sign-up' className='text-signup 
              font-semibold'>Create one now!</Link></p>
            </div>
      </div>
    </div>
</MainLayout>

  )
}

export default Reset