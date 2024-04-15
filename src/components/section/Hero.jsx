import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import huyImg from '../../assets/huyimg.png'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);
const Hero = ({ name, slogan, isMask = false }) => {
    const imgRef = useRef(null)
    const container = useRef(null)
    const words = slogan.split(' ')
    const nameArr = name.split('')
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
    useEffect(() => {
        gsap.to(imgRef.current, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                marker: false
            }
        });
    }, [])

    return (
        <div className='relative w-screen h-[50vh] lg:h-screen flex justify-center items-center text-center'>
            {!isMask && <div ref={container} className='absolute w-full h-[50vh] lg:h-full bottom-0 overflow-hidden flex justify-center items-end'>
                <img className='grayscale w-full' ref={imgRef} src={huyImg} alt="" />
            </div>}
            <div className='uppercase z-0'>
                <h2 className='text-base lg:text-2xl tracking-widest mb-6'>{nameArr.map((item, index) => {
                    return (
                        <span key={index} className='px-1'>{item}</span>
                    )
                })}</h2>
                <div
                    onMouseMove={HandleMouseMove}
                    onMouseLeave={HandleMouseLeave}
                >
                    {words.map((item, index) => {
                        return (
                            <p className='text-3xl lg:text-9xl font-bold' key={index}>{item}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero