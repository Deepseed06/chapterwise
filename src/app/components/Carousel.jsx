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
    <div className="container text-center lg:py-16 ">
      <Slider {...settings} >
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"} key={idx}>
            <Image src={img} alt={img} width={500} height={900} className="img"/>
          </div>
        ))}
      </Slider>
    </div>
    <Link href={"/"}>
                <button
                  type="submit"
                  className="mt-3  px-8 py-3  text-base font-medium rounded-xl 
                  text-white bg-signup"
                >
                  Get Started for free 
                </button>
                </Link>
        </div>
  );
}

  export default Carousel