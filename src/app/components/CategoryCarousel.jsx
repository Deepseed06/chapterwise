"use client"
import "./CategoryCarousel.css"
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React, { useState } from 'react'
import Journey from "../../../public/assets/journey.png"
import Card from "./Card"
import Link from "next/link";
import ExploreButton from "./ExploreButton"

const CategoryCarousel = () => {
const images = ["Mental Development", "Financial Development", "Emotional Development" , "Spiritual Development", "Parenting"];
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow forward" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow backward" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  console.log(imageIndex)
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next+1),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: 2,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next+1),
        
      }
    },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          lazyLoad: true,
          speed: 300,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next+1),
        
      }
    }
  
    ]
  }
 

  return (
    <div className="px-4 lg:px-24 text-center border lg:-mt-16">
      <div className=" py-8   ">
      <h2 className="text-xl font-semibold py-4 my-4 lg:text-2xl text-left border-b ">Enhance Your Growth Journey</h2>
      <p className="text-sm border text-left">Discover books that will enhance your mental, spiritual, emotional, and financial growth,
         helping you build better habits, relationships, 
        and time management skills.</p>
      </div>
    <div className="grid grid-cols-1 border text-center ">
      <Slider {...settings} >
        {images.map((img, idx) => (
           <div key={idx} className="p-2 lg:p-2">
            <Card 
            key={idx}
            title={img}
            imageUrl={Journey}
            exploreText="Discover More"
            description={"Unlock your potential with strategies to overcome mediocrity and adopt a success-driven mindset. Discover how high achievers think and elevate your mental performance."}
            />
            </div>
        ))}
      </Slider>
    </div>
    <Link href="/" className="flex justify-end">
        <ExploreButton/>
    </Link>
        </div>
  );
}


export default CategoryCarousel