'use server'
import React from 'react'
import ServiceSlider from './ServiceSlider'
import DOMPurify from 'isomorphic-dompurify'
import initTranslations from '@/app/i18n';
import { fetchData } from '../../../utils/api';

const Services = async({params}) => {
  const truncateText = (text, wordCount) => {
    return text?.split(' ').slice(0, wordCount).join(' ') + '...';
};


    // api/categories
    const i18nNamespaces = ["home"];
    const { locale } = params
    const { t } =  await initTranslations(locale, i18nNamespaces)
    const productData = await fetchData(`api/services`,locale)
    const productCatagory =  productData?.data;


  return (
    <section className='px-5 lg:px-16 py-10'>
        <div className='text-center'>
            <h3 className='text-xl lg:text-3xl  font-semibold'>High Quality Sheet Metal Cutting and Bending Machines            </h3>
            <div className='border-primary_color w-[20%] lg:w-[10%] border-t-8 rounded-lg m-auto my-5'/>


            {/* <div className="lg:w-[60%] m-auto py-3 text-slate-600 " dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize((truncateText(items.details || '', 20))) }} /> */}

        </div>
        <ServiceSlider productCatagory={productCatagory} locale={locale}/>
    </section>
  )
}

export default Services