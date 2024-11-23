// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// required modules
import { Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { PiDownloadSimpleBold } from "react-icons/pi";

import { Button } from './layout/Button';
import { mobileImages, desktopImages } from './layout/projectData';

const Banner = () => {
  return (
    <div className='relative w-full h-full'>
      {/*desktop view carousel*/}
      <Swiper
        spaceBetween={30} slidesPerView={1} loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {desktopImages.map((image, index) => (
          <SwiperSlide key={index} className="hidden md:flex justify-center items-center">
            <img src={image} alt={`Desktop slide ${index}`} className="block w-full h-full object-cover blur-[1px]" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*mobile view carousel*/}
      <Swiper
        spaceBetween={30} slidesPerView={1} loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {mobileImages.map((image, index) => (
          <SwiperSlide key={index} className="md:hidden flex justify-center items-center">
            <img src={image} alt={`Mobile slide ${index}`} className="block w-full h-full object-cover blur-[1px]" />
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className='text-white font-poppins font-semibold text-[15px] md:text-3xl lg:text-4xl xl:text-5xl text-center mb-5 md:mb-7 lg:mb-10'>
          We’re Totojan, best and affordable<br /> toto service provider in India
        </h1>
        <Link to="/#">
          <Button className='flex items-center
            text-[10px] sm:text-xs md:text-sm lg:text-xl 
            px-2 py-1.5 md:px-4 md:py-3 hover:text-callto-action hover:bg-white'>
            Download App <PiDownloadSimpleBold className='ml-1 text-xs sm:text-sm lg:text-xl' />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;