'use client'
import React from "react";
import DOMPurify from 'isomorphic-dompurify';
import { Product } from '../../../../data';
import Link from 'next/link';
const description = () => {
    return (
        <>
        <div className="title relative">
            <img src="/assets/home-about.jpeg" className="w-full h-[350px] object-cover" alt="img" />
            <div className="overlay absolute bg-black bg-opacity-55 w-full h-full left-0 right-0 top-0" />
             <h1 className="text-xl absolute end-0 start-[35%] top-[40%] lg:text-5xl font-bold text-white">Sheet Metal Working</h1>
        </div>
        <section className="bg-white pt-7 mb-10">
      <div className="lg:px-16 px-5 mx-auto gap-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:mt-0 md:ml-10 mb-6">
          <h2 className="text-xl lg:text-3xl  font-semibold">Test-Bottle4</h2>
          <div className='border-primary_color w-[20%] lg:w-[20%] border-t-8 rounded-lg my-4'/>
          <p className="text-slate-600 mb-4">
          VALUE technologies was established in 2003 as a result of long history in the business line of software and machine-tools since 1994, where the business initially started with the CAD /CAM /CAE.
            VALUE technologies was established in 2003 as a result of long history in the business line of software and machine-tools since 1994, where the business initially started with the CAD /CAM /CAE.
          </p>
          
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/assets/home-about.jpeg"
            className="rounded-lg h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
        </>
    )
}
export default description;