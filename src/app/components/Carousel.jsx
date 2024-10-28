"use client"
import "./Carousel.css"
import { useState } from "react";
import Slider from "react-slick";
import atomic from "../../../public/assets/talking.png";
import talking from "../../../public/assets/talking.png";
import thinking from "../../../public/assets/talking.png";
import shout from "../../../public/assets/talking.png";
import sing from "../../../public/assets/talking.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const images = [atomic, talking, thinking, sing, shout];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next+1),
    responsive:[
     {
        breakpoint: 768,
        settings: {
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next),
        
      }
    }
    ]
  };

  return (
    <div className="px-16 lg:py-16 text-center border lg:mb-24 lg:-mt-16">
      <div className=" text-[#304672] font-semibold">
      <h2 className="text-3xl py-4 lg:text-5xl ">A world of knowlede in <br /> your pocket</h2>
      <p>What are you interested in?</p>
      </div>
    <div className=" text-center lg:py-16 ">
      <Slider {...settings} >
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
            <Image src={img} alt={img} className="img"/>
          </div>
        ))}
      </Slider>
    </div>
    <Link href={"/"}>
                <button
                  type="submit"
                  className="mt-3  w-full px-14 py-3 border border-transparent text-base font-medium rounded-xl 
                  text-white bg-signup shadow-sm hover:bg-primary/90 focus:outline-none   
                  sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Get Started for free 
                </button>
                </Link>
        </div>
  );
}

  export default Carousel