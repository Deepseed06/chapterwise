"use client"
import "./CategoryCarousel.css"
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React, { useState } from 'react'
import Journey from "../../../public/assets/journey.png"
import Card from "./Card"
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

  const [_imageIndex, setImageIndex] = useState(0);
 
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
          slidesToShow: 3,
          centerMode: true,
          centerPadding: 0,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          beforeChange: (current, next) => setImageIndex(next+1),
        
      }
    },
      {
        breakpoint: 500,
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
    }
  
    ]
  }
 

  return (
    <div className=" mr-2 lg:px-24 text-center lg:-mt-16">
      <div className=" py-8 px-8   ">
      <h2 className="text-xl font-semibold py-4 my-4 lg:text-2xl text-left border-b ">Enhance Your Growth Journey</h2>
      <p className="text-sm text-left">Discover books that will enhance your mental, spiritual, emotional, and financial growth,
         helping you build better habits, relationships, 
        and time management skills.</p>
      </div>
    <div className=" text-center ">
      <Slider {...settings} >
        {images.map((img, idx) => (
           <div key={idx} className=" p-4 lg:p-2">
            <Card 
            key={idx}
            title={img}
            imageUrl={Journey}
            exploreText="Discover More"
            textClass='py-2'
            description="Unlock your potential with strategies to overcome 
            mediocrity and adopt a success-driven mindset. Discover how high 
            achievers think and elevate your mental performance."
            />
            </div>
        ))}
      </Slider>
    </div>
    <div>
        <ExploreButton/>
    </div>
        </div>
  );
}


export default CategoryCarousel