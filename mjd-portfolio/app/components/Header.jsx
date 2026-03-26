import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col 
        items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='profile_img' className='rounded-full w-40'/>
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Vollkorn'>
                Hello! I'm Maddalen DeMars
                <Image src={assets.wave_hand} alt='wave' className='py-1 w-6' />
            </h3>
            <h1 className='text-3xl sm:text-6xl lg:test-[66px] font-Vollkorn' >
                UI technical designer <br />based in SoCal
            </h1>
            <a href="" download
            className='buttonLink px-10 py-3 border rounded-full border-gray-500 flex 
            items-center gap-2 font-Vollkorn'>
                my resume
                <Image src={assets.download_icon} alt='download_icon' className='w-6' />
            </a>
        </div>
    )
}

export default Header