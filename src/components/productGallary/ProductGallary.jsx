'use client'
import React from 'react'
import { Productgallery } from '../../../data';
import { ImageGallery } from 'react-image-grid-gallery';

const ProductGallary = () => {


    
    const images = Productgallery.map((image) => ({
        src:image?.src,
        alt:image?.alt,
        caption:image?.caption,
          customOverlay: (
              <div className="custom-overlay__caption">
                  <div className='text-2xl font-bold'>{image.caption}</div>
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