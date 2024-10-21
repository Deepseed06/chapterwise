import Image from 'next/image'
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import Button from "./Button"
import { Rating } from '@mui/material';

const Card = ({ imageUrl, title, description, category, ratingValue, exploreText, buttonText }) => {
  return (
    <div className=" border text-left rounded-lg overflow-hidden max-w-sm">
        {
           imageUrl &&
      <div className="relative m-8  h-48 text-left">
          <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-lg"
          />
          </div>
        }
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-primary text-nowrap">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
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
              className="mt-3 w-full py-3  transparent text-base md:text-xl flex items-center  font-medium text-login   
              focus:outline-none sm:mt-0  sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
            >
              {exploreText}
              <span className='text-xl'> <BiRightArrowAlt/> </span>
            </button>
      </Link> : <Button text={buttonText} color="signup"/>
           }
      </div>
    </div>
  )
}

export default Card;