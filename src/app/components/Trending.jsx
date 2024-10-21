"use client"
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import React, { useState } from 'react'
import Journey from "../../../public/assets/journey.png"
import Card from "./Card"
import Link from "next/link";
import ExploreButton from "./ExploreButton"

const CategoryCarousel = () => {
const images = ["Mental Development", "Financial Development", "Emotional Development" , "Spiritual Development", "Parenting"];


  return (
    <div className="px-24 text-center border lg:-mt-16">
      <div className=" py-8   ">
      <h2 className="text-xl font-semibold py-8 my-4 lg:text-2xl text-left border-b ">Connect with Like-Minded Readers</h2>
      <p className="text-sm lg:text-xl border text-left">
        Join our vibrant community of book lovers!. 
        Engage in discussions, share reviews, and discover 
        new perspectives on your favorite reads</p>
      <h2 className="text-xl font-semibold py-8  lg:text-2xl text-left border-b ">Trending Discussions</h2>
      </div>
    <div className="container text-center grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
   
        {images.map((img) => (
            <Card 
            buttonText= 'Join the Conversation'
            title={img}
            description={"Unlock your potential with strategies to overcome mediocrity and adopt a success-driven mindset. Discover how high achievers think and elevate your mental performance."}
        />
        ))}

    </div>
    <Link href="/" className="flex justify-end">
        <ExploreButton/>
    </Link>
        </div>
  );
}


export default CategoryCarousel