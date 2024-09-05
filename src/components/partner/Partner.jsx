'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation';  
import 'swiper/css/pagination';
import {partnerslider} from '../../../data';
const Partner = () => {
    return (
        <div className="text-center">
            <div className="xl:w-[400px] sm:w-full">
                <h1 className="text-5xl text-primary_color font-bold mb-3 ">Our Partners</h1>
                <p className="text-secondary_color">Value Technologies proudly is the partner of the highest end brands for Engineering Solutions Sector and Apparel & non-apparel solutions sector.</p>
            </div>
      <Swiper 
       modules={[Autoplay,Pagination , Navigation]}
       autoplay={{ delay: 1500}}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      speed={1500}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }}
    breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 100,
        },
      }}
      
       className="mySwiper text-xl text-center"
       >
       { partnerslider.map((resp)=>(
          <>
          <SwiperSlide className=' text-center'>
          <img key={resp.id} className='w-full' src={resp.src} alt="" />
          <h1 className='text-[70px] text-xl font-bold'>{resp.title}</h1>
        </SwiperSlide>
          </>

        ))} 
        <div className="swiper-button-prev bg-primary_color !text-sm !text-white p-7 rounded-full"></div>
        <div className="swiper-button-next bg-primary_color !text-white p-7 rounded-full "></div>
      
      </Swiper>
    </div>
    )
};
export default Partner;