"use client"
import Dropdown from './Dropdown'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import SearchBar from "./SearchBar"
import {  MenuIcon, X } from 'lucide-react'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { useLogoutMutation } from '@/redux/features/authApiSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {logout as setLogout} from '@/redux/features/authSlice'
import Button from './Button'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch = useAppDispatch();
  const {isAuthenticated} = useAppSelector(state=>state.auth)
  const [logout] = useLogoutMutation()
  const handleLogout = (event) => {
		event.preventDefault();
    console.log('logout')
    console.log(isAuthenticated)
       
    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const refresh = getCookie('refresh')
		logout({refresh})
			.unwrap()
			.then(() => {
        dispatch(setLogout())
        document.cookie = `refresh=;expires=Wed,6 Dec 2023 23:59:59 GMT`
       localStorage.removeItem('isLoggedIn')
			})
			.finally(() => {
				router.push('/')
			});
	};

  console.log(isAuthenticated)
  return (
    <header className="bg-background shadow-sm px-4 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between  items-center py-4  ">
          <div className="flex justify-start lg:flex-1">
            <Link href="/">
                <span className=' text-login lg:text-3xl font-semibold '>ChapterWise</span>
            </Link>
          </div>
            <div className='md:hidden'>
            <SearchBar/>
            </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-background rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-primary-foreground hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
             
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden text-signup  md:justify-center w-full font-semibold md:flex lg:flex xl:justify-center md:text-xs xl:text-base  space-x-6">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>    
            <div className=" flex items-center ">
              Discover <span> <RiArrowDropDownFill/></span>
            </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" p-4 space-x-6 flex flex-col space-y-2 items-start rounded-lg bg-white">
              <Dropdown/>
            </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/features" className=" hover:border-b-2 pb-2 pt-2 border-black hover:drop-shadow-[2px_2px_25px_rgb(0,0,225)]">
              Community
            </Link>
            <Link href="/pricing" className="hover:border-b-2 pb-2 pt-2 border-black hover:drop-shadow-[2px_2px_25px_rgb(0,0,225)]">
              About Us
            </Link>
            <Link href="/about" className="hover:border-b-2 pb-2 pt-2 border-black hover:drop-shadow-[2px_2px_25px_rgb(0,0,225)]">
              Blog
            </Link>
            <Link href="/contact" className="hover:border-b-2 pb-2 pt-2 border-black hover:drop-shadow-[2px_2px_25px_rgb(0,0,225)]">
              Contact Us
            </Link>
          </nav>
          <div className='hidden lg:block  md:block w-64 lg:w-96 mx-4'><SearchBar/></div>
          {
            !isAuthenticated ? (
              <div className="hidden space-x-2 md:flex items-center text-xs lg:flex xl:text-base justify-between  md:flex-1">
            <Link
              href="/sign-in
              "
              className="border border-login text-login whitespace-nowrap inline-flex items-center justify-center px-4 py-2   rounded-sm shadow-sm "
              >
              Login
            </Link>
            <Link
              href="/sign-up"
              className=" whitespace-nowrap text-white bg-signup inline-flex items-center justify-center px-4 py-2 shadow-sm  font-medium rounded-lg"
            >
              Sign up
            </Link>
            

          </div>
            )
            :(
  
            <div>
              <Button text='Logout' 
              className='bg-signup rounded-xl'
              handleClick={handleLogout}
              />
            </div>
            )
          }
          
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#F9F9F9] divide-y-2 divide-muted">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className='font-semibold text-login'>
                 ChapterWise
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-background rounded-md p-2 
                    inline-flex items-center justify-center text-primary 
                    hover:text-primary-foreground 
                    hover:bg-primary focus:outline-none focus:ring-2
                    focus:ring-inset focus:ring-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  
                  
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                    <Link href="/" className=" flex items-center text-base font-medium text-primary hover:text-primary-foreground">
                      Discover
                    </Link>
                    </AccordionTrigger>
                    <AccordionContent>
                      <Dropdown/>
                    </AccordionContent>
                  </AccordionItem>
                
                </Accordion>
                  <Link href="/features" className="text-base font-medium text-primary hover:text-primary-foreground">
                    Community
                  </Link>
                  <Link href="/pricing" className="text-base font-medium text-primary hover:text-primary-foreground">
                    About Us
                  </Link>
                  <Link href="/about" className="text-base font-medium text-primary hover:text-primary-foreground">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-base font-medium text-primary hover:text-primary-foreground">
                    Contact Us
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link
                href="/sign-in"
                className="border border-login w-full flex items-center justify-center px-4 py-2 rounded-lg shadow-sm text-base font-medium text-login bg-primary hover:bg-primary/90"
              >
                Login 
              </Link>
              <Link
                href="/sign-up"
                className="w-full bg-signup text-white flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium "
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}