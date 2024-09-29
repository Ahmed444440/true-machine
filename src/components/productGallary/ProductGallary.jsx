'use client'
import React, { createContext, useEffect, useState } from 'react'
import { fetchData } from '../../../utils/api'
import { useTranslation } from "react-i18next";
import { ImageGallery } from 'react-image-grid-gallery';
import { Productgallery } from '../../../data';

const ProductGallary = () => {

    const [data , setData]=useState(Productgallery)

    const {t ,i18n} = useTranslation()
    useEffect(()=>{
           const ProductionFetch= async ()=>{
             const Production = await fetchData(`api/galleries`,i18n.language)
                setData(Production.data)
              
           }
           ProductionFetch()
    },[])
    
    const images = data.map((image) => ({
        src:image?.photo,
        alt:image?.alt,
        caption:image?.caption,
          customOverlay: (
              <div className="custom-overlay__caption">
                  <div className='text-2xl font-bold'>{image?.caption}</div>
              </div>
          ),
      }));
  return (
   <section className='py-10'>
        <ImageGallery  imagesInfoArray={images} columnWidth={300} columnCount={3} gapSize={10} />
   </section>
  )
}

export default ProductGallary