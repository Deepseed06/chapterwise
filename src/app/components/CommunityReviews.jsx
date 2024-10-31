import Card from "./Card"
import ExploreButton from "./ExploreButton"
import Button from "./Button"


const CategoryCarousel = () => {
const images = ["Mental Development", "Financial Development", "Emotional Development" , "Spiritual Development", "Parenting"];


  return (
    <div className="px-4 lg:px-24 text-center my-24 ">
      <div className=" py-8   ">
      <h2 className="text-xl font-semibold py-4 lg:my-4 lg:text-2xl text-left border-b ">
        Community Reviews</h2>
      </div>
    <div className="container text-center grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
   
        {images.map((img, index) => (
          <div key={index}>

            <Card 
            buttonText= 'Read Full Review'
            title={img}
            ratingValue={2.5}
            category="Spiritual Development"
            description={"Unlock your potential with strategies to overcome mediocrity and adopt a success-driven mindset. Discover how high achievers think and elevate your mental performance."}
            />
          </div>
        ))}

    </div>
        <div>
                <ExploreButton/>
        </div>

        <div className=" my-16 mt-24 ">
      <h2 className="text-xl font-semibold py-2 my-2 
      lg:text-2xl text-left border-b text-login ">
        Join Our Monthly Book Clubs</h2>
      <p className="text-sm lg:text-xl text-left">
        Participate in our monthly book clubs and enjoy themed 
        discussions with fellow readers. 
        Sign up today and dive into our latest selections!</p>
       <div className="w-48 my-4"> <Button text="Explore Book Clubs" color="signup"/></div>
      </div>
        <div className=" ">
      <h2 className="text-xl font-semibold py-2 my-2 
      lg:text-2xl text-left border-b text-login ">
        Get Involved!</h2>
      <p className="text-sm lg:text-xl  text-left">
      Ready to engage? Join us now and be part of a community 
      that shares your passion for reading!</p>
        <div className="w-48 my-4"><Button text="Sign Up Today" color="signup" /></div>
      </div>
        </div>
  );
}


export default CategoryCarousel