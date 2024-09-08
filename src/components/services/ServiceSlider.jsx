'use client'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import DOMPurify from 'isomorphic-dompurify';

import { ServicesData } from '../../../data';
import Link from 'next/link';

const ServiceSlider = () => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    const breakpoints = {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        310: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
    };
    return (
        <section>

            <Swiper
                slidesPerView={3}
                breakpoints={breakpoints}
                autoplay={{ delay: 4000 }}
                speed={1000}
                loop={true}
                modules={[Navigation, Autoplay, Pagination]}

            >
                <div>
                    {ServicesData?.map((item, index) => (
                        <SwiperSlide key={index} className=" mt-5">
                            <div className="text-center lg:text-start">
                                <div className="p-1 ">
                                    <div className='overflow-hidden'>
                                        <img className='mx-auto  h-[250px] rounded-md object-cover  duration-300 hover:scale-105  cursor-pointer' alt={'img'} src={item.src} />

                                    </div>
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{item.title}</h2>
                                    <div className=" text-[15px] text-gray-600  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(item.desc, 20))) }} />
                                    <div className='my-10'>
                                        <Link href={`/`} className={'hover:bg-btn_color text-btn_color font-semibold  border-[1px] rounded-md border-gray-400 hover:text-white hover py-3 px-7'} >
                                            Read More
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>

            </Swiper>

        </section>
    )
}

export default ServiceSlider