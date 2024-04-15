import React from 'react'
import TitleSection from '../ui/TitleSection'
import gsap from 'gsap'

const About = ({ text }) => {
    const HandleMouseMove = () => {
        gsap.to(".hidden-content", {
            "--size": 250,
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
        <div name='about' className=' h-[40vh] lg:h-screen w-screen flex justify-center items-center'>
            <div className='w-5/6 lg:w-3/5'>
                <TitleSection title='about me' />
                <div
                    className='text-2xl lg:text-7xl'
                    onMouseMove={HandleMouseMove}
                    onMouseLeave={HandleMouseLeave}
                >
                    <p>
                        {text}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About