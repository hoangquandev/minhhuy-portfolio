import React, { useState } from 'react'
import TextSlide from '../../TextSlide'
import gsap from 'gsap'

const routes = [
    {
        page: 'about'
    },
    {
        page: 'work'
    },
    {
        page: 'contact'
    },
]
const Nav = () => {
    const [currentSection, setSection] = useState('about')
    const HandleMouseMove = () => {
        gsap.to(".hidden-content", {
            "--size": 0,
            duration: 0.75,
            ease: "back.out(1.1)"
        });
    }
    const HandleMouseLeave = () => {
        gsap.to(".hidden-content", {
            "--size": 20,
            duration: 0.75,
            ease: "back.out(1.1)"
        });
    }
    return (
        <nav
            onMouseMove={HandleMouseMove}
            onMouseLeave={HandleMouseLeave}
            className='fixed top-6 right-6 lg:top-10 lg:right-16 text-sm lg:text-base z-50'>
            <ul className='text-right uppercase font-medium w-28'>
                {
                    routes.map((item, index) => {

                        return (
                            <li key={index} onClick={() => setSection(item.page)} className='py-[0.375rem] cursor-pointer'>
                                <TextSlide currentSection={currentSection} text={item.page} />
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav