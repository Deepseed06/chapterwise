import React from 'react'
import Hero from "../components/Hero"
import Blog from "../components/Blog"
import Contact from "../components/Contact"
import Carousel from "../components/Carousel"
import CategoryCarousel from "../components/CategoryCarousel"
import Trending from "../components/Trending"
import CommunityReviews from "../components/CommunityReviews"
import MainLayout from "../screens/MainLayout"
import CommunityHeader from "../components/CommunityHeader"
const LandingPage = () => {
  return (
    <div>
      <MainLayout>
            <Hero/>
            <Carousel/> 
            <CategoryCarousel/>
            <CommunityHeader/>
            <Trending/>
            <CommunityReviews/>
            <Blog/>
            <Contact/>

      </MainLayout>
    </div>
  )
}

export default LandingPage