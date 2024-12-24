"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from "@components/Button"
import MainLayout from "@screens/MainLayout"
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useResendOtpMutation, useVerifyMutation } from '@/redux/features/authApiSlice'

const Otp = () => {
   const router = useRouter();
	const [verify, {isLoading}] = useVerifyMutation();
	const [otp, setOtp] = useState('');
    const [resendOtp] = useResendOtpMutation();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
		setOtp(value);
	};
    const email =typeof window !=='undefined'? localStorage.getItem('email') : ''
    const getOtp = () => {
		resendOtp({ email})
			.unwrap()
			.then(() => {
				toast.success('An Otp has been sent to your email');
                
			})
			.catch((error) => {
                
                console.log(error)
				toast.error(`${JSON.stringify(error.data.errors[0].message)}`);
			});

    }
	const verifyUser = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
        verify({email, otp, purpose:'password_reset'})
			.unwrap()
			.then(() => {
				toast.success('You can now log in');
                router.push('/')
			})
			.catch((error) => {
				toast.error(`${JSON.stringify(error.data)}`);
			});

	};

    
  return (
        <MainLayout>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-8 py-4 lg:px-24'>
            <div className='bg-signup relative  flex items-center justify-center p-12 text-center'>
               <div className='z-50 bg-center bg-cover bg-auth right-0 bg-no-repeat lg:top-0 -top-20 p-24 absolute'>
                   
               </div>
               <div className='-bottom-20 lg:bottom-4 left-0 absolute bg-bottom p-24 bg-no-repeat bg-left-bottom'>
   
               </div>
               <div className='px-4 max-w-80 text-white text-xs'>
                   <h2 className='text-2xl font-bold py-4'>Email Verification</h2>
                    <p>Enter the 6-digit code ent to you to confirm your login</p>
               </div>
           </div>
           <div className='px-8 w-full border shadow-lg bg-[#F9F9F9] py-2'>


           <form onSubmit={verifyUser}>

               <div className='w-full my-6 '>
                   <label className='font-semibold'>Otp:</label>
                   <input type="text" 
                   placeholder='Enter Your Otp' 
                   className='w-full p-4 border outline-none rounded-xl'
                   value={otp}
                   name='otp'
                   onChange={handleChange}
                   />
               </div>     
                 
                        <Button isLoading={isLoading} googleIcon={false}  width='full' 
                                text="Verify Account" color="signup"
                                className='text-white my-4'
                          />
                    
                </form>
                        <span className='ml-64 '>Didn&apos;t get Otp? <button className='text-signup' onClick={getOtp}>Resend</button></span>
                
           </div>
           </div>
    </MainLayout>
    
  )
}

export default Otp