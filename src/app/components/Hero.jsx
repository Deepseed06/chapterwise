import Image from 'next/image'
import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'
import HeroImage from "../../../public/assets/hero-img.png"

export default function Hero() {
  return (
    <section className="bg-background px-4 lg:p-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-20 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 border lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mt-12">
            <h1>
              <span className="mt-1 block text-4xl  font-semibold  sm:text-5xl xl:text-6xl">
                <span className="block text-[#304672]">Unlock Your Reading</span>
                <span className="block text-[#304672] py-2">Journey, One</span>
                <span className="block text-[#304672]">Chapter at a Time</span>
              </span>
            </h1>
            <p className="mt-3 text-signup sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Discover Chapter reviews, personalized reading and join discussions
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center  lg:text-left lg:mx-0">
              
                <Link href={"/"}>
                <button
                  type="submit"
                  className="mt-3 w-full px-10 py-3 border border-transparent text-base font-medium rounded-md 
                  text-white bg-signup shadow-sm hover:bg-primary/90 focus:outline-none   
                  sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Get Started for free 
                </button>
                </Link>
                
                <Link href={"/"}  >
                <button
                  className="mt-3 w-full px-6 py-3 transparent text-base md:text-xl flex items-center  font-medium text-login   
                   focus:outline-none sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Explore More
                  <span className='text-xl'> <BiRightArrowAlt/> </span>
                </button>
                </Link>
              
                
            </div>
          </div>
          <div className=" relative sm:max-w-sm sm:mx-auto lg:mt-0 lg:max-w-xl lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full lg:max-w-md">
                <Image
                  className="border "
                  src={HeroImage}
                  alt="Hero Image"
                  width={900}
                  height={400}
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}