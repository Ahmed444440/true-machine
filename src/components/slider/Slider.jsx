'use client'
import React, { createContext, useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import { fetchData } from '../../../utils/api'
import { useTranslation } from "react-i18next";
import DOMPurify from "isomorphic-dompurify";
const Slider = () => {
  const truncateText = (text, wordCount) => {
    return text?.split(' ').slice(0, wordCount).join(' ') + '...';
};

 const [data , setData]=useState([])

     const {t ,i18n} = useTranslation()
     useEffect(()=>{
            const SliderFetch= async ()=>{
              const SliderData = await fetchData(`api/sliders`,i18n.language)
                 setData(SliderData.data)
               
            }
            SliderFetch()
     },[])
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 1500 }}
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
        {data.map((res) => (
          <>
            <SwiperSlide className='relative text-center z-0'>
              <div className='lg:w-2/4 w-full absolute top-5  text-white lg:top-60 lg:left-96'>
                <h1 className='lg:text-[70px]  font-bold'>{res.title}</h1>
                <p className='lg:mt-12 mt-0 text-sm lg:text-xl'>{res.details}</p>
              </div>
              <img className='w-full h-[65vb] lg:h-[130vb] ' src={`${res.photo}`} alt="" />

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