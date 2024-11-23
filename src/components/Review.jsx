import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { reviewItems } from './layout/projectData';
import Rating from '@mui/material/Rating';

const Review = () => {
  return (
    <div className="w-full text-white px-6 md:p-0 my-10">
      <div className="p-4 md:p-0 md:mx-0">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-semibold font-poppins text-center text-callto-action text-4xl lg:text-5xl mb-8">Feedbacks From Users</h1>
          <hr className="w-20 border-2 border-callto-action rounded-md"></hr>
        </div>
        <div className="lg:px-10 lg:mx-0 xl:px-28 2xl:px-36 xl:mx-8 px-0 -mx-2 max-sm:p-1 md:mx-2 md:px-4">
          <Swiper
            modules={[Pagination, Autoplay, Scrollbar, A11y]}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {reviewItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col mt-10 w-72 h-72 pb-4 mb-10 rounded-md mx-auto shadow-xl border bg-slate-50">
                  <div className="flex flex-1 flex-col justify-between px-3 pb-3">
                    <div className="mt-2 border-b pt-4 dark:border-gray-800">
                      <div className="flex items-center justify-start px-4 pb-4">
                        <img className="h-14 w-12 pb-1 flex-shrink-0 rounded-full object-cover" src={item.img} alt="" />
                        <div className="ml-2 min-w-0">
                          <p className="truncate font-semibold font-lato text-lg text-gray-800 ml-4">{item.name}</p>
                          <p className="truncate text-center text-gray-500">{item.subName}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 mt-2 ml-2 flex items-center justify-start space-x-2">
                      <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                    </div>
                    <div className="flex-1 pt-2">
                      <blockquote>
                        <p className="text-left text-lg text-gray-800 px-2">{item.content}</p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;