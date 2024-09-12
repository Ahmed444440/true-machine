'use client'
import Breadcrumb from '@/components/breadCrumb/BreadCrumb';
import ProductGallary from '@/components/productGallary/ProductGallary';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react'

const Production = () => {
    const router = usePathname();
    const pathnames = router.split('/').filter((x) => x);
    return (
        <section>
            <div className='relative w-full h-[55vh] lg:h-[80vh] '>
                <Image
                    src='/assets/home-about.jpeg'
                    alt='img'
                    layout='fill'
                    objectFit='cover'
                    quality={100}
                    className='w-full h-full'
                    sizes="(max-width: 600px) 150vw,
               (max-width: 1200px) 50vw,
               "
                />
                <div className='absolute inset-0 bg-black opacity-55' />

                <div className='absolute left-7 bottom-10 lg:top-[40%] lg:start-[40%]'>
                    <h1 className='capitalize  text-3xl lg:text-7xl text-white font-semibold'>
                        {(pathnames)}
                    </h1>
                    <Breadcrumb pathnames={pathnames} />
                </div>
            </div>

            <div className='px-5 lg:px-16 py-10'>
                <div className='text-center'>
                    <h3 className='text-xl lg:text-3xl  font-semibold'>Production</h3>
                    <div className='border-primary_color w-[20%] lg:w-[10%] border-t-8 rounded-lg m-auto my-5' />

                    <p className='lg:w-[60%] m-auto py-3 text-slate-600'>Value technologies offers its customers the most comprehensive and professional after sales service, whether it is technical assistance or the rapid supply of spare parts.</p>
                </div>
                <ProductGallary />
            </div>
        </section>
    )
}

export default Production