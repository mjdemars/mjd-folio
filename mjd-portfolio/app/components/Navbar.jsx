import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef } from 'react'
import "../globals.css"

const Navbar = () => {    

    const mobileMenuRef = useRef();

    const openMenu = ()=>{
        mobileMenuRef.current.style.transform = 'translateX(0rem)';
    }

    const closeMenu = ()=>{
        mobileMenuRef.current.style.transform = 'translateX(16rem)';
    }

    return (
        <>
        <div className='fixed w-full -z-10 translate-y-[-50%]'>
            <Image src={assets.purple_gradient} alt='' className='w-full'/>
        </div>

            <nav className='w-full fixed px-3 lg:px-8 xl:px-[2%] py-3
            flex items-center justify-between z-50 backdrop-blur-md'>
                <a href="#top">
                    <Image src={assets.logo} className='w-45 cursor-pointer ml-1 mr-1' alt='logo'/>
                </a>

                {/* <a href="#top" className='font-Vollkorn text-xl'>
                    Maddalen DeMars
                </a> */}

                <ul className='font-Outfit hidden md:flex justify-center items-center gap-6 lg:gap-8 rounded-full
                px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                    <li><a href="#top" className='navButton'>Home</a></li>
                    <li><a href="#about" className='navButton'>About Me</a></li>
                    <li><a href="#projects" className='navButton'>Projects</a></li>
                    <li><a href="#hobbies" className='navButton'>Hobbie Corner</a></li>
                </ul>

                <div>
                    <a href="https://www.linkedin.com/in/maddalen-demars-35645692/" target="_blank" className='buttonLink font-Outfit hidden md:flex items-center gap-3
                    px-5 py-2.5 rounded-full border border-gray-500'>Contact <Image src={assets.arrow_icon} 
                    alt='contact image' className='w-6 cursor-pointer'/></a>

                    <button className='fixed md:hidden right-5 cursor-pointer' onClick={openMenu}>
                        <Image src={assets.menu_icon} alt='menu-icon' className='w-5' />
                    </button>
                </div>


                {/* -- ----- mobile menu ----- -- */}

                <ul ref={mobileMenuRef} className='font-Outfit flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 
                top-0 bottom-0 w-64 z-50 h-screen bg-violet-300 transition duration-500'>

                    <div className='absolute right-5 top-9' onClick={closeMenu}>
                        <Image src={assets.menu_icon} alt='menu_close' className='w-5 
                        cursor-pointer' />
                    </div>

                    <li><a onClick={closeMenu} href="#top">Home</a></li>
                    <li><a onClick={closeMenu} href="#about">About Me</a></li>
                    <li><a onClick={closeMenu} href="#experience">Experience</a></li>
                    <li><a onClick={closeMenu} href="#hobbies">Hobbie Corner</a></li>

                    <a href="https://www.linkedin.com/in/maddalen-demars-35645692/" target="_blank" className='buttonLink font-Outfit px-7 py-1 rounded-full w-2/3 
                    border border-gray-500'>Contact <Image src={assets.arrow_icon} 
                    alt='contact image' className='w-6 cursor-pointer'/></a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar