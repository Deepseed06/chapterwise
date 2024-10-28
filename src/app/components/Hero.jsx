import Image from 'next/image'
import Link from 'next/link'
import HeroImage from "../../../public/assets/hero-img.png"
import ExploreButton from './ExploreButton'

export default function Hero() {
  return (
    <section className="bg-background px-4 lg:px-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:mb-24 md:py-12 lg:py-12">
        <div className=" lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="lg:hidden sm:max-w-sm sm:mx-auto">
            <div className="lg:hidden relative mx-auto w-full ">
                <Image
                  className=" lg:hidden"
                  src={HeroImage}
                  alt="Hero Image"
                  width={900}
                  height={400}
                />
            </div>
          </div>
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
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center  lg:text-left lg:mx-0 lg:flex ">
              
                <Link href={"/"}>
                <button
                  type="submit"
                  className="mt-3 rounded-xl w-full px-10 py-3 text-base font-medium 
                  text-white bg-signup shadow-sm  
                  sm:mt-0  sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Get Started for free 
                </button>
                </Link>
                
             <ExploreButton/>
              
                
            </div>
          </div>
          <div className="hidden relative sm:max-w-sm sm:mx-auto lg:mt-0 lg:max-w-xl lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="lg:flex hidden relative mx-auto w-full lg:max-w-md">
                <Image
                  className="hidden lg:flex"
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