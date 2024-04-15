import React, { useContext, useEffect, useRef } from 'react'
import gsap from 'gsap'


const Experience = () => {
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
    <div className=' h-[500px]  xl:mx-48 lg:mx-40 md:mx-32 sm:mx-24 2xl:text-[5rem] xl:text-[4rem] lg:text-[3rem]
                     md:text-[2rem] sm:text-[1rem] leading-[66px] z-10 mix-blend-differenc'>
      <div className='uppercase text-[16px] font-bold leading-[28px] mx-20 md:mx-0 tracking-[0.5rem] mb-20 '>
        my skills
      </div>
      <p className=''
        onMouseMove={HandleMouseMove}
        onMouseLeave={HandleMouseLeave}
      >
        Over <span >a year</span > of learning front-end include: <span >HTML</span >,
        <span > CSS</span >,
        <span > Javascript</span >,
        <span > Reactjs</span >,
        <span > Redux</span >,
        <span > Tailwind css</span >,
        <span > Bootstrap </span >,
        <span > Material-UI </span >,
        <span > Threejs </span >
      </p>
    </div>
  )
}

export default Experience