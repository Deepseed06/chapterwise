"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from "@components/Button"
import MainLayout from "@screens/MainLayout"
import { setAuth } from '@/redux/features/authSlice'
import { toast } from 'react-toastify'
import Link from 'next/link'
  
import { Checkbox } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useLoginMutation, useLogoutMutation } from '@/redux/features/authApiSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

const SignIn = () => {
   const router = useRouter();
   const dispatch = useAppDispatch()
	const [login, { isLoading }] = useLoginMutation();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password} = formData;

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};
    

	const loginUser = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
       
		login({ email, password })
			.unwrap()
			.then((state) => {
                dispatch(setAuth())
				toast.success('Login Successful');
                console.log(state)
                document.cookie = `refresh=${state.refresh};expires=Fri,6 Dec 2024 23:59:59 GMT`
                console.log(document.cookie, state.refresh)
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
                   onChange={handleChange}
                   />
               </div>
               <div className='w-full my-3'>
                   <label className='font-semibold'>Password:</label>
                   <input type="text" 
                   placeholder='Enter Your Password' 
                   className='w-full p-4 border outline-none rounded-xl' 
                   value={password}
                    name='password'
                   onChange={handleChange}
                   />
               </div>
               <div className='flex items-center text-xs md:text-sm my-3'>
                <Checkbox/> Agree to the Terms & Conditions and Privacy Policy</div>
          
                        <Button isLoading={isLoading} googleIcon={false}  width='full' 
                        text="Login" color="signup"
                        className='text-white my-4'
                        />

                </form>
   
                 
            
               <div className='relative border-b mb-8 py-2 border-black'>
                   <div className='bg-white p-2 rounded-full absolute left-1/2  -bottom-4'>Or</div>
               </div>
                       <div>
                       <Button isLoading={isLoading} googleIcon={true} width='full' 
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