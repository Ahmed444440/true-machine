import React from 'react'
import SocialMedia from '../socialMedia/SocialMedia'
import { navbar } from '../../../data'
import Link from 'next/link'

const Footer = () => {
    return (
        <section className='bg-btn_color py-20 lg:px-16'>
            <div className=' lg:flex gap-10 items-center'>
                <div className='w-1/3'>
                    <img width={300} className=' invert brightness-0' alt='logo' src='/assets/logo.png' />
                    <p className='text-gray-300 py-5'>With a total of more than 50 Employees including 17 Service Engineers, we all have one goal, to add value to our products.</p>
                    <SocialMedia />
                </div>
                <div className='w-1/3  '>
                    <h3 className='text-white text-lg my-5'>Company Links</h3>
                    {
                        navbar.map((item) => (
                            <ul key={item.id}>
                                <li className='text-white text-sm my-3 '>
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <div className='w-1/3'>
                    <h3 className='text-white text-lg my-5'>Contact Info</h3>
                    <div className='text-white'>
                        {/* address */}

                        <h4 className=''>Address</h4>
                        <p>72 Mossadak St,Eldokki,Giza, 12311,Egypt</p>
                    </div>

                    <div className='text-white'>
                        {/* Email */}
                        <h4>Email</h4>
                        <p>sales@gmail.com</p>
                    </div>

                    <div className='text-white'>
                        {/* phone */}
                        <h4>Phone</h4>
                        <p>+20 23 33 83 657 / +20 23 33 83 659</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer