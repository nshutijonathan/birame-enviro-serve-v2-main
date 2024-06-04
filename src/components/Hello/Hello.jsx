import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Navbar from '../Navbar/Navbar';

const Hello = () => {
  return (
    <div className=" w-full h-full relative" id="home">
      <div>
        <div className="relative">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
          >
            <SwiperSlide>
              <img
                src="../cover1.jpeg"
                alt="image not found"
                className="w-full h-screen object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="../cover2.jpeg"
                alt="image not found"
                className="w-full h-screen object-cover"
              />
            </SwiperSlide>
          </Swiper>
          <div className="w-full h-full bg-slate-400 opacity-30 absolute top-0 left-0 z-10 flex justify-center items-center">
           
          </div> 
          <div className='absolute w-full h-full top-0 left-0 items-center flex justify-center z-20'>
          <h1 className="text-center md:px-[60px] text-[30px] md:text-[40px] font-semibold text-white font-popu ">
              Thriving Environment and Development for <br/><span>All</span>{' '}
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-40 w-full ">
        <Navbar />
      </div>
    </div>
  );
};

export default Hello;
