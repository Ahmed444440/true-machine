'use client'
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="bg-white pt-7 mb-10  lg:px-16 px-5">

      <div className="  gap-10 flex flex-col md:flex-row  pt-10 ">
        <div className="w-full md:w-1/2">
          <img
            src="/assets/home-about.jpeg"
            className="rounded-lg h-[400px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2  ">
          <h2 className="text-xl lg:text-3xl  font-semibold">About Us</h2>
          <div className="my-5">
            <div className='border-primary_color  w-[20%] lg:w-[15%] border-t-8 rounded-lg   ' />
          </div>

          <p className="text-slate-600 mb-4 mt-10 leading-10">
            VALUE technologies was established in 2003 as a result of long history in the business line of software and machine-tools since 1994, where the business initially started with the CAD /CAM /CAE.
            VALUE technologies was established in 2003 as a result of long history in the business line of software and machine-tools since 1994, where the business initially started with the CAD /CAM /CAE.
          </p>
          {/* <button className="mt-4 py-3 px-7 bg-transparent  text-primary_color rounded-md border-solid border-primary_color border-2 hover:bg-primary_color hover:ease-in-out hover:text-white hover:delay-200 ">
            Read More
          </button> */}
          <div className='my-10'>
            <Link href={`/`} className={'hover:bg-btn_color text-btn_color font-semibold  border-[1px] rounded-md border-gray-400 hover:text-white hover py-3 px-7'} >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
