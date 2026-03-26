import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
    const infoList = [
        { icon: assets.projects_icon, title: 'Call of Duty: Modern Warfare II (2022)', description: 'Infinity Ward', link: '/page1' },
        { icon: assets.mw3_backer,title: 'Call of Duty: Modern Warfare II (2023)', description: 'Infinity Ward', link: '/page1' },
        { icon: assets.foxtrot_backer, title: 'Fox Trot (2019)', description: 'Personal Project', link: '/page1' },
    ];

    return (
        <div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Vollken'>
                Projects</h4>
            <h2 className='text-center text-5xl font-Vollken'>
                Recents</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl max-h-xl mt-5 mx-auto">
               {infoList.map(({ icon, title, description, link },
                    index)=>(
                        <a className='border-[1px] border-gray-400 overflow-hidden
                        rounded-xl p-6 cursor-pointer mt-2 transition-transform duration-200
                        hover:border-violet-700 hover:border-[3px] hover:scale-[1.1] duration-150' 
                        href={link}
                        key={index}
                        style={{ 
                            backgroundImage: `url(${icon.src})`,
                        }}
                        >
                            <h3 className='relative mt-[30%] my-4 p-4 rounded-xl z-10 bg-white bg-opacity-20 text-center font-semibold text-gray-900 text-3xl'>{title}</h3>
                            <p className='relative mb-30 p-2 rounded-xl z-10 bg-violet-200 bg-opacity-20 text-center text-indigo-900 text-xl'>{description}</p>
                        </a>
                    )
                )}
            </div>
        </div>
    )
}

export default Projects