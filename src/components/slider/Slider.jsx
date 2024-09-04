'use client'
import React ,{ createContext, useEffect ,useState } from 'react'
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'; 
import 'swiper/css/navigation';  
import 'swiper/css/pagination';
// import required modules
import { Navigation,Pagination } from 'swiper/modules';
import {sliderData} from '../../../data';
const Slider = () => {

  return (
    <div>
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
      
       className="mySwiper text-xl text-center"
       
       >
       { sliderData.map((res)=>(
          <>
          <SwiperSlide className='relative text-center'>
          <div className='w-2/4 absolute  text-white top-60 left-96'>
          <h1 className='text-[70px] font-bold'>{res.title}</h1>
          <p className='mt-10'>{res.des}</p>
          </div>
          <img className='w-full' src={res.src} alt="" />
          
        </SwiperSlide>
          </>

        ))} 
        <div className="swiper-button-prev bg-primary_color !text-sm !text-white p-7 rounded-full"></div>
<div className="swiper-button-next bg-primary_color !text-white p-7 rounded-full "></div>
      
      </Swiper>
    </div>
  )
}

export default Slider