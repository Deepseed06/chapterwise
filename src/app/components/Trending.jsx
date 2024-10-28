"use client"
import React from 'react'
import Card from "./Card"
import Link from "next/link";
import ExploreButton from "./ExploreButton"

const CategoryCarousel = () => {
const images = ["Mental Development", "Financial Development", "Emotional Development" , "Spiritual Development", "Parenting"];


  return (
    <div className="px-4 lg:px-24 text-center lg:-mt-16">
      <div className=" py-8   ">
      <h2 className="text-xl font-semibold py-4 lg:my-4 lg:text-2xl 
      text-left border-b ">Connect with Like-Minded Readers</h2>
      <p className="text-sm lg:text-xl text-left">
        Join our vibrant community of book lovers!. 
        Engage in discussions, share reviews, and discover 
        new perspectives on your favorite reads</p>
      <h2 className="text-xl font-semibold py-8  lg:text-2xl text-left border-b ">Trending Discussions</h2>
      </div>
    <div className="container text-center grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
   
        {images.map((img) => (
          <div key={img.index}>

            <Card 
            buttonText= 'Join the Conversation'
            title={img}
            description="Unlock your potential with strategies to overcome mediocrity and adopt 
            a success-driven mindset. Discover how high achievers think and elevate your mental 
            performance."
            />
            </div>
        ))}

    </div>
    <Link href="/" className="flex justify-end">
        <ExploreButton/>
    </Link>
        </div>
  );
}


export default CategoryCarousel