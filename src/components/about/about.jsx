'use client'
import React from "react";

const About = () => {
  return (
    <section className="bg-white pt-7 mb-10">
      <div className="lg:px-16 px-5 mx-auto gap-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:mt-0 md:ml-10 mb-6">
          <h2 className="text-xl lg:text-3xl  font-semibold">About Us</h2>
          <div className='border-primary_color w-[20%] lg:w-[10%] border-t-8 rounded-lg my-5'/>
          <p className="text-slate-600 mb-4">
          VALUE technologies was established in 2003 as a result of long history in the business line of software and machine-tools since 1994, where the business initially started with the CAD /CAM /CAE.
            VALUE technologies was established in 2003 as a result of long history in the business line of software and machine-tools since 1994, where the business initially started with the CAD /CAM /CAE.
          </p>
          <button className="mt-4 py-3 px-7 bg-transparent  text-primary_color rounded-md border-solid border-primary_color border-2 hover:bg-primary_color hover:ease-in-out hover:text-white hover:delay-200 ">
            Read More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/assets/home-about.jpeg"
            className="rounded-lg h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
