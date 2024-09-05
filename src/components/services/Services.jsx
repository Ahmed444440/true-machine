import React from 'react'
import ServiceSlider from './ServiceSlider'

const Services = () => {
  return (
    <section className='lg:px-16 py-10'>
        <div className='text-center'>
            <h3 className='text-3xl  font-semibold'>Truemachine Technologies Services</h3>
            <p className='w-[60%] m-auto py-3 text-slate-600'>Value technologies offers its customers the most comprehensive and professional after sales service, whether it is technical assistance or the rapid supply of spare parts.</p>
        </div>
        <ServiceSlider/>
    </section>
  )
}

export default Services