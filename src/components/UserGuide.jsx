import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

import { Button } from "./layout/Button";

const UserGuide = () => {
  return (
    <div className='w-full relative'>
      <img src="/banner/image9.jpg" alt="explore-image" className='w-full hidden lg:block' />
      <img src="/banner/image10.jpg" alt="explore-image" className='w-full block lg:hidden' />

      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 
          className='text-md md:text-3xl lg:text-4xl xl:text-5xl 
          text-white font-semibold font-poppins mb-5 md:mb-7 lg:mb-10'>
          How To Book A totojan?
        </h1>

        <Link to="/explore">
          <Button className='flex items-center 
            text-[10px] sm:text-xs md:text-sm lg:text-xl 
            px-2 py-1.5 md:px-4 md:py-3 hover:text-callto-action hover:bg-white'>
            Explore Here <GoArrowRight className='ml-1 text-xs sm:text-sm lg:text-xl font-bold' />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default UserGuide;