import Image from 'next/image'
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import Button from "./Button"
import { Rating } from '@mui/material';
import { cn } from '@/lib/utils';

const Card = ({ imageUrl, title, description, category, ratingValue, exploreText, buttonText, className, textClass }) => {
  return (
    <div className={cn('border text-left rounded-xl overflow-hidden min-w-40 lg:w-full min-h-52', className)}>
        {
           imageUrl &&
          <div className="relative flex m-4  md:m-8 min-h-16 md:h-48 text-left ">
              <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl"
              />
          </div>
        }
      <div className={cn("  px-8 py-8 lg:py-8  mb-2 text-xs md:text-sm",textClass)}>
        <h3 className="font-bold text-signup text-sm md:text-xl text-wrap line-clamp-1  xl:line-clamp-1">{title}</h3>
        <p className="line-clamp-3 py-4 lg:py-4  text-signup text-wrap  xl:line-clamp-none ">{description}</p>
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
              className="mt-3 w-full py-3 rounded-xl  text-xs text-nowrap 
              md:text-xl flex items-center  font-medium text-login"
            >
              {exploreText}
              <span className='text-xl'> <BiRightArrowAlt/> </span>
            </button>
      </Link> : <Button text={buttonText} color="signup" width={48} />
           }
      </div>
    </div>
  )
}

export default Card;