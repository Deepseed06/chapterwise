"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from "@components/Button"
import MainLayout from "@screens/MainLayout"

import { toast } from 'react-toastify'
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
import { useRouter } from 'next/navigation'
import { useRegisterMutation, useResendOtpMutation } from '@/redux/features/authApiSlice'

const SignUp = () => {
   const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();
    const [resendOtp] = useResendOtpMutation();
    const [show, setShow] = useState(false);

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { first_name, last_name, email, password, password2 } = formData;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
        console.log(email)
	};

    const getOtp = () => {
		resendOtp({ email})
			.unwrap()
			.then(() => {
                
                
				toast.success('An Otp has been sent to your email');
                setShow(true)
			})
			.catch((error) => {
                
                console.log(error)
				toast.error(`${JSON.stringify(error.data.errors[0].message)}`);
			});

    }
	const registerUser = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
       
		register({ first_name, last_name, email, password, password2 })
			.unwrap()
			.then(() => {
				toast.success('Please check email to verify account');
                setShow(true)
               
			})
			.catch((error) => {
                if(error.data.errors[0].message==='User with this email already exists.'){
                       
                resendOtp({email})
                .unwrap()
                .then(() => {
                    toast.success('An Otp has been sent to your email');
                 
                    setShow(true)
                })
                .catch((error) => {
                    
                    console.log(error)
                    toast.error(`${JSON.stringify(error.data.errors[0].message)}`);
                });

                }
                console.log(error)
				toast.error(`${JSON.stringify(error.data.errors[0].message)}`);
			});

            localStorage.setItem('email', email)
            
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
                   <h2 className='text-2xl font-bold py-4'>Join ChapterWise Today!</h2>
                   <p>Create your free account to start exploring 
                       chapter summaries, personalized book reviews, 
                       and engaging with the community.</p>
               </div>
           </div>
           <div className='px-8 w-full border shadow-lg bg-[#F9F9F9] py-2'>
               <div className='flex  justify-between text-2xl md:text-3xl'>
                   <button onClick={() => router.push('/sign-in')} className='p-4 text-signup border-signup'>
                     Sign In
                   </button>
                  <button onClick={() => router.push('/sign-up')} className=' p-4 border-b-2 border-[#BAC6EC]
                   text-[#BAC6EC]'> 
                     Sign Up 
                  </button>
               </div>

           <form onSubmit={registerUser}>

               <div className='w-full my-6 '>
                   <label className='font-semibold'>First Name:</label>
                   <input type="text" 
                   placeholder='Enter Your First Name' 
                   className='w-full p-4 border outline-none rounded-xl'
                   value={first_name}
                   name='first_name'
                   onChange={handleChange}
                   />
               </div>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Last Name:</label>
                   <input type="text" 
                   placeholder='Enter Your Last Name' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={last_name}
                    name='last_name'
                   onChange={handleChange}
                   />
               </div>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Email Address:</label>
                   <input type="text" 
                   placeholder='Enter Your Email Address' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={email}
                    name='email'
                   onChange={handleChange}
                   />
               </div>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Password:</label>
                   <input type="password" 
                   placeholder='Enter Your Password' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={password}
                    name='password'
                   onChange={handleChange}
                   />
               </div>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Confirm Password</label>
                   <input type="password" 
                   placeholder='Confirm Your Password' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={password2}
                    name='password2'
                   onChange={handleChange}
                   />
               </div>

               <div className='flex items-center text-xs md:text-sm my-3'><Checkbox/> Agree to the Terms & Conditions and Privacy Policy</div>
          
                           <Dialog open={show} onOpenChange={() => setShow(false)}>
                           <DialogTrigger className='w-full'>
                                   <Button isLoading={isLoading} googleIcon={false}  width='full' 
                                   text="Create Account" color="signup"
                                   className='text-white my-4'
                                   />
                           </DialogTrigger>
                           <DialogContent className='max-w-md p-24 bg-white flex text-center'>
                               <DialogHeader className='flex justify-center items-center'>
                               <DialogTitle className='text-2xl'>Please Verify Your Email</DialogTitle>
                               <DialogDescription className='text-center'>
                               <div className='mb-4'>We have sent a verification otp to your email. Please confirm account to proceed.</div>
                               <div>Verification otp expires in 10 minutes</div>
                                   <Link href='/otp'>
                                   <Button  isLoading={isLoading} googleIcon={false} width='full' 
                                   text="Proceed" color="signup"
                                   className='text-white my-8'/>
                                   </Link>
                                   <button  onClick={getOtp} className='text-signup font-semibold'>Resend Verification</button>
                               </DialogDescription>
                                   </DialogHeader>
                           </DialogContent>
                           </Dialog>
                


  


                </form>
   
                 
            
               <div className='relative border-b mb-8 py-2 border-black'>
                   <div className='bg-white p-2 rounded-full absolute left-1/2  -bottom-4'>Or</div>
               </div>
                       <div>
                       <Button isLoading={false} googleIcon={true} width='full' 
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