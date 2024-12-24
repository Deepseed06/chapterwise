'use client'
import React from 'react'
import MainLayout from '../screens/MainLayout'
import Image from 'next/image'
import ExploreImg from '../../../public/assets/explore.png'
import BookImg from '../../../public/assets/atomic.png'
import Card from '@components/Card'
import { useAppSelector } from '@/redux/hooks'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from 'react'
import Pagination from '@components/pagination'
import Button from '../components/Button'

const ITEMS_PER_PAGE = 10
const TOTAL_ITEMS = 100

const Discover = () => {
    const images = ["What Book Changed Your Life?", "Best Book Of the Year!", "Share Your Reading Goals"];
    const genres = ["Mental Development", "Financial Development", "Emotional Development" , "Spiritual Development", "Parenting"];
    const {isAuthenticated} = useAppSelector(state=>state.auth)
    const [_currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Here you would typically fetch data for the new page
    console.log(`Fetching data for page ${page}`)
  }
  return (
    <div>

    {
      isAuthenticated && (
    
        <MainLayout>
    <section className="bg-background px-4 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:mb-8 md:py-12 lg:py-12">
        <div className=" lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="lg:hidden sm:max-w-sm sm:mx-auto">
            <div className="lg:hidden relative mx-auto w-full ">
                <Image
                  className=" lg:hidden"
                  src={ExploreImg}
                  alt="Hero Image"
                  width={900}
                  height={400}
                />
            </div>
          </div>
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mt-12">
            <h1>
              <span className="mt-1 block text-4xl  font-semibold  sm:text-5xl xl:text-6xl">
                <span className="block text-[#304672]">Explore Your Next</span>
                <span className="block text-[#304672] py-2">Great Read</span>
              </span>
            </h1>
            <p className="mt-3 text-signup sm: sm:text-xl lg:text-lg xl:text-xl">
            Personalized book suggestions from real readers. 
            Help uncover tomorrow&apos;s hits by voting 
            for the ones you love.
            </p>
           
          </div>
          <div className="hidden relative sm:max-w-sm sm:mx-auto lg:mt-0 lg:max-w-xl lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="lg:flex hidden relative mx-auto w-full lg:max-w-md">
                <Image
                  className="hidden lg:flex"
                  src={ExploreImg}
                  alt="Hero Image"
                  width={900}
                  height={400}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='flex flex-col lg:flex-row px-3 md:px-8 my-8 p-8 border lg:mx-24  shadow-signup '>
            <div className='lg:hidden mb-8'>
              <span className='p-4'>Browse Genres :</span>
            <Select >
          <SelectTrigger className="w-full px-4  mt-2">
            <SelectValue placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
            </div>

        <div className='border px-4 py-4 hidden md:block'>
            <span className='text-xl border-b-2 py-4 text-nowrap flex'>Browse Genres</span>
            {
                genres.map((index, item) => (
                    <div key={index} className=' items-center space-x-2 text-red-500 hidden lg:flex'>
                        <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                        <div className='my-4 flex text-nowrap'>{item}</div>
                    </div>
                ))
            }
            <div></div>

        </div>
        <div className="container flex flex-col space-y-8 border px-4  py-4" >
            <span className='text-xl border-b-2 py-6 flex'>Discover Your Next Favorite Book</span> 
        {images.map((text, index) => (
          <div key={index} >
            <Card   
            buttonText= 'Read Full Review'
            title={text}
            ratingValue={3}
            category='Mental Development'
            imageUrl={BookImg.src}
            className='flex flex-col py-2 md:flex-row bg-[#DDE2F6]'
            textClass='px-2'
            description="Unlock your potential with strategies to 
            overcome mediocrity and adopt ."
            />
            </div>
        ))}

    <Pagination
        totalItems={TOTAL_ITEMS}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </div>
    </section>
    <div className=" px-8 ">
      <h2 className="text-xl font-semibold py-2 my-2 
      lg:text-2xl text-left border-b text-login ">
        Join Our Monthly Book Clubs</h2>
      <p className="text-sm lg:text-xl text-left">
        Participate in our monthly book clubs and enjoy themed 
        discussions with fellow readers. 
        Sign up today and dive into our latest selections!</p>
       <div className="w-48 my-4"> <Button text="Explore Book Clubs" color="signup"/></div>
      </div>
        </MainLayout>
      )
}
        </div>
  )
}

export default Discover