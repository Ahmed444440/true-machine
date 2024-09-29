import Link from "next/link";
import { fetchData } from '../../../utils/api'
import React from "react";

const About = async ({params}) => {
  const i18nNamespaces = ["home"];
  const { locale } = params
  const { t } =  await initTranslations(locale, i18nNamespaces)
  const aboutData = await fetchData(`api/about-us`,locale)
  const data =  aboutData?.data;
   console.log(data)
  return (
    <section className="bg-white pt-7 mb-10  lg:px-16 px-5">

      <div className="  gap-10 flex flex-col md:flex-row  pt-10 ">
        <div className="w-full md:w-1/2">
          <img
            src={`${data.photo}`}
            className="rounded-lg h-[400px] object-cover"
          />
        </div>
        <div className="w-full md:w-1/2  ">
          <h2 className="text-xl lg:text-3xl  font-semibold">{data?.title}</h2>
          <div className="my-5">
            <div className='border-primary_color  w-[20%] lg:w-[15%] border-t-8 rounded-lg   ' />
          </div>

          <p className="text-slate-600 mb-4 mt-10 leading-10">
          {data?.details}
          </p>
          {/* <button className="mt-4 py-3 px-7 bg-transparent  text-primary_color rounded-md border-solid border-primary_color border-2 hover:bg-primary_color hover:ease-in-out hover:text-white hover:delay-200 ">
            Read More
          </button> */}
          <div className='my-10'>
            <Link href={`/`} className={'hover:bg-primary_color text-slate-700 font-semibold  border-[1px] rounded-md border-gray-400 hover:text-white hover py-3 px-7'} >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
