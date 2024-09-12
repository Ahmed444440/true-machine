'use client'
import React from "react";
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { Product } from "../../../../../data";
const Products = () => {

    const truncateText = (text, wordCount) => {
        return text?.split(' ').slice(0, wordCount).join(' ') + '...';
    };

    return (
        <>
        
           <div className="title relative">
            <img src="/assets/home-about.jpeg" className="w-full h-[350px] object-cover" alt="img" />
            <div className="overlay absolute bg-black bg-opacity-55 w-full h-full left-0 right-0 top-0" />
             <h1 className="text-xl absolute end-0 start-[35%] top-[40%] lg:text-5xl font-semibold text-white">Sheet Metal Working</h1>
            </div>
        <div className="lg:px-16 px-5 pt-5 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {Product.map((items, index) => (
                            <div key={index} className="shadow-md rounded-md">
                                <div className="">
                                    <div className='overflow-hidden'>
                                        <img className='mx-auto  h-[250px] rounded-md object-cover  duration-300 hover:scale-105  cursor-pointer' alt={'img'} src={items.src} />

                                    </div>
                                    <div className="p-2">
                                    <h2 className="text-xl font-bold text-slate-800  mb-2 mt-5">{items.title}</h2>
                                    <div className=" text-[15px] text-gray-600  font-[500] " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(items.desc, 20))) }} />
                                    <div className='my-8'>
                                        <Link href={`product/${items.title}`} className={'bg-transparent  text-primary_color rounded-md border-solid border-primary_color border-[1px] hover:bg-primary_color hover:ease-in-out hover:text-white hover:delay-200  py-3 px-7'} >
                                            Read More
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
        </div>
        </>
    )
}
export default Products;
