import Image from 'next/image'
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import Button from "./Button"
import { Rating } from '@mui/material';

const Card = ({ imageUrl, title, description, category, ratingValue, exploreText, buttonText }) => {
  return (
    <div className=" border text-left rounded-xl overflow-hidden max-w-sm">
        {
           imageUrl &&
          <div className="relative m-4  md:m-8 h-24 md:h-64 text-left ">
              <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
              />
          </div>
        }
      <div className=" bg-[#DDE2F6] px-8 py-8 mb-2 text-xs md:text-sm">
        <h3 className="font-bold text-signup text-sm md:text-xl mb-2 text-primary text-nowrap">{title}</h3>
        <p className="text-muted-foreground text-signup py-4 ">{description}</p>
        <p className='text-xs font-semibold text-login'>{category}</p>
        {
          ratingValue && category ? 
          <div className='text-orange-400 flex justify-start my-4'>Rating:{""}
            <Rating
            name="simple-controlled"
            value={ratingValue}
            precision={0.5}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
            /> </div>: ""
        }
           {
            exploreText ?  <Link href={"/"}  >
            <button
              className="mt-3 w-full py-3 rounded-xl  transparent text-base md:text-xl flex items-center  font-medium text-login   
              focus:outline-none sm:mt-0  sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              {exploreText}
              <span className='text-xl'> <BiRightArrowAlt/> </span>
            </button>
      </Link> : <Button text={buttonText} color="signup" />
           }
      </div>
    </div>
  )
}

export default Card;