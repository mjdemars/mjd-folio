import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
    const infoList = [
        { icon: assets.code_icon, title: 'Languages', description: 'HTML, CSS, Next Js, Lua, C' },
        { icon: assets.edu_icon,title: 'Education', description: 'Georgia Tech, BS in Computational Media' },
        { icon: assets.projects_icon, title: 'Projects', description: '2 AAA titles, personal games projects' },
    ];

    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Vollken'>
                About Me</h4>
            <h2 className='text-center text-5xl font-Vollken'>
                Maddalen DeMars</h2>

            <div className='flex w-full flex-col lg:flex-row items-center 
            gap-20 my-20'>
                {/* column 1 */}
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user_image' 
                    className='w-full rounded-3xl'/>
                </div>
                
                {/* column 2 */}
                <div className='flex-1'>
                    <p className='max-w-2xl font-Vollken'>
                        I am a UI designer with experience in video game 
                        development, having contributed to multiple <b>AAA titles</b>. 
                        I specialize in controller based systems and primarily work in 
                        implementing data-driven visuals and animations. <br />
                        Through my education and professional experience, 
                        I have developed a deep passion for <b>human centered design </b>
                        and creating intuitive and visually engaging interfaces. 
                        I have worked alongside top-tier industry development teams 
                        to create systems that bolster both narrative and 
                        live season gameplay. 
                    </p>
                    
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, title, description },
                            index)=>(
                                <li className='border-[0.5px] border-gray-400 
                                rounded-xl p-6 mt-2  
                                hover:border-violet-700 hover:scale-[1.1] duration-150'
                                key={index}>
                                    <Image src={icon} alt={title} className='w-15 h-10 mt-3'/>
                                    <h3 className='my-4 font-semibold text-gray-900'>{title}</h3>
                                    <p className='text-indigo-800 text-sm'>{description}</p>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About