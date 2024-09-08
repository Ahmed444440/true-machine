import React from 'react'
import SocialMedia from '../socialMedia/SocialMedia'

const Footer = () => {
    return (
        <section className='bg-btn_color py-20 lg:px-16'>
            <div>
                <div className='w-1/3'>
                    <img width={300} className=' invert brightness-0' alt='logo' src='/assets/logo.png' />
                    <p className='text-gray-300 py-5'>With a total of more than 50 Employees including 17 Service Engineers, we all have one goal, to add value to our products.</p>
                    <SocialMedia />
                </div>
                <div className='w-1/3'></div>
                <div className='w-1/3'></div>
            </div>

        </section>
    )
}

export default Footer