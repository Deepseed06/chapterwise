"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from "@components/Button"
import MainLayout from "@screens/MainLayout"
import { setAuth } from '@/redux/features/authSlice'
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
import { useLoginMutation, useResendOtpMutation } from '@/redux/features/authApiSlice'
import { useAppDispatch } from '@/redux/hooks'

const SignIn = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
	const [login, { isLoading }] = useLoginMutation();
	const [resendOtp] = useResendOtpMutation();
    const [show, setShow] = useState(false);
    
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password} = formData;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
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
                if(error.status===429){
                    toast.error(`${JSON.stringify(error.data.message)}`);

                }
			});

    }

	const loginUser = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

        function setCookieWithDate(name: string, value: string, 
            expirationDate: Date): void {
            const cookieValue = encodeURIComponent(value);
            const expires = expirationDate.toUTCString();
            document.cookie = `${name}=${cookieValue}; expires=${expires}; SameSite=Strict`;
          }
        
        
		login({ email, password })
        .unwrap()
        .then((state) => {
            dispatch(setAuth())
            toast.success('Login Successful');
            const expirationDate = new Date()
            expirationDate.setDate(expirationDate.getDate() + 10)
            setCookieWithDate('refresh', state.data.refresh, expirationDate)
            console.log(state.data.refresh)
           
                router.push('/')
			})
			.catch((error) => {
				toast.error(`${JSON.stringify(error.data.errors[0].message)}`);
                console.log('why')
                if(error.data.errors[0].message==='Your Account is inactive. Kindly verify your account or contact admin for further assistance.'){
                    resendOtp({email})
                    .unwrap()
                    .then(() => {
                        toast.success('An Otp has been sent to your email');
                        setShow(true)
                    })
                    .catch((error) => {
                        console.log(error)
                        if(error.status===429){
                            toast.error(`${JSON.stringify(error.data.message)}`);
                            
                        }else{
                            toast.error(`${JSON.stringify(error.data.errors[0].message)} `);

                        }
                    });
                }
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
                   <h2 className='text-2xl font-bold py-4'>Welcome Back</h2>
                   <p>Login to continue your reading journey and 
                    connect with the community</p>
               </div>
           </div>
           <div className='px-8 w-full border shadow-lg bg-[#F9F9F9] py-2'>
               <div className='flex  justify-between text-2xl md:text-3xl'>
                  <div>
                  <button onClick={() => router.push('/sign-in')} className='p-4 border-b-2
                   border-[#BAC6EC] text-[#BAC6EC]'> 
                   Sign In
                  </button>
                  </div>
                  <div>
                  <button onClick={() => router.push('/sign-up')} className='p-4   text-signup border-signup'>
                   Sign Up
                   </button>
                  </div>
               </div>

           <form onSubmit={loginUser}>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Email</label>
                   <input type="text" 
                   placeholder='Enter Your Email Address' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={email}
                    name='email'
                    required
                   onChange={handleChange}
                   />
               </div>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Password:</label>
                   <input type="password" 
                   placeholder='Enter Your Password' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={password}
                   required
                   name='password'
                   onChange={handleChange}
                   />
               </div>
               <div className='flex items-center justify-between text-xs md:text-sm my-3'>
                <div>
                <Checkbox/> Remember Me
                </div>
                <span>Forgot Password? <Link href='/reset' className='text-signup'>Reset here</Link></span>
                </div>
          
                        

                        <Dialog open={show} onOpenChange={() => setShow(false)}>
                           <DialogTrigger className='w-full'>
                           <Button isLoading={isLoading} googleIcon={false}  width='full' 
                        text="Login" color="signup"
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
                       <Button  googleIcon={true} width='full' 
                       text="Sign Up With Google" color="white"
                       className='text-black my-4'
                       />
                       </div>
           
                   <div className='text-center my-8'>
                       <p>Dont have an account? <Link href='/sign-up' className='text-signup font-semibold'>Sign up now</Link></p>
                   </div>
           </div>
           </div>
    </MainLayout>
    
  )
}

export default SignIn