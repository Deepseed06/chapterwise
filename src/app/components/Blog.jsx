"use client"
import ExploreButton from "./ExploreButton"
import Image from 'next/image';
import blogImg from "../../../public/assets/blog.png"

const Blog = () => {
const content = [
    {title: "Top 10 Self-Help Books of 2024",
    description: "Discover the most impactful self-help books this year"
    },
    
    {
    title: "How Chapter Summaries Enhance Your Reading",
    description: "Learn how to break down chapters can improve your reading comprehension"
    },
    {
    title: "Join Our Community Book Club",
    description: "Connect with others and discuss books"
    },
    
]
  return (
    <div className="w-full px-8 lg:px-24 text-center -mt-16">
      <div className="    ">
      <h2 className="text-xl font-semibold py-8 my-4 lg:text-2xl text-left border-b ">Latest Insights from the ChapterWise Blog</h2>
      <p className="text-sm lg:text-xl  text-left">
        Stay updated with the latest trends, reading tips and community happenings. 
        Explore our top blog posts 
        and dive deeper into your reading journey </p>
      </div>
    <div className="md:grid md:grid-cols-2 gap-20 text-center">
        <div className='hidden md:block'>
        <Image src={blogImg} alt='blog'/>
        </div>
        <div className='flex flex-col items-left'>

        {content.map((item) => (
            <div className='text-left p-4 w-full' key={item.index}>  
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                
                <ExploreButton className='relative mt-0'/>
            </div>
        ))}
        </div>


        </div>
        </div>
  );
}


export default Blog