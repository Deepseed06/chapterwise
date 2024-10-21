import React from 'react'
import FooterImg from "../../../public/assets/image-bg.png"

const Footer = () => {
  return (
    <div className='flex bg-signup p-24 justify-between'>
        <div>ChapterWise</div>
        <div> 
            <h2>Quick Links</h2>
            <p>Discover</p>
            <p>Community</p>
            <p>Blog Post</p>
        </div>
        <div> 
            <h2>Information</h2>
            <p>About us </p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
        </div>
        <div className='flex flex-col'>  
            <h2>Support</h2>
            <p>Contact us</p>
            <p>FAQ</p>
            
        </div>
        <div>
            <p>&copy;Copyright 2022</p> 
            <p>All Rights Reserved - ChapterWise</p>
        </div>
    </div>
  )
}

export default Footer