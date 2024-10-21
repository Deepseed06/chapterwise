"use client"
import { useState } from 'react'
import Link from 'next/link'
import SearchBar from "./SearchBar"
import {  MenuIcon, X } from 'lucide-react'
import { RiArrowDropDownFill } from 'react-icons/ri'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background shadow-sm px-4 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start ">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
                <span className=' text-login lg:text-3xl '>ChapterWise</span>
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
          <nav className="hidden md:flex space-x-10">
            <Link href="/features" className=" flex items-center text-base font-medium text-primary hover:text-primary-foreground">
              Discover <span> <RiArrowDropDownFill/></span>
            </Link>
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
          <div className='hidden xl:block lg:block'><SearchBar/></div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              href="/login"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-primary hover:bg-primary/90"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-primary hover:bg-primary/90"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#F9F9F9] divide-y-2 divide-muted">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
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
                  <Link href="/features" className=" flex items-center text-base font-medium text-primary hover:text-primary-foreground">
                  Discover <span> <RiArrowDropDownFill/></span>
                  </Link>
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
                href="/signup"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-primary hover:bg-primary/90"
              >
                Login 
              </Link>
              <Link
                href="/signup"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-primary hover:bg-primary/90"
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