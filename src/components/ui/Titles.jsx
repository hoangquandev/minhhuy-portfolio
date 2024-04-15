
import { useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'


export default function Titles({ data, setSelectedProject }) {

    return (
        <div className='w-full' style={{ borderTop: '1px solid rgba(183, 171, 152, 0.25)' }}>
            {
                data.map((project, i) => {
                    return <Title key={i} data={{ ...project, i }} setSelectedProject={setSelectedProject} />
                })
            }
        </div>
    )
}

function Title({ data, setSelectedProject }) {
    const { title, speed, i, link } = data;
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', `${15 / speed}vw end`]

    })
    const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;
    // const mouse = useContext(MouseContext)
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">

            <div ref={container}
                style={{
                    borderTop: '1px solid rgba(183, 171, 152, 0.25)',
                    borderBottom: '1px solid rgba(183, 171, 152, 0.25)',
                }}
                className='relative z-[2] px-8 lg:px-40'>
                <div className='inline-block '
                    onMouseLeave={() => { setSelectedProject(null) }}
                    onMouseEnter={() => {
                        setSelectedProject(i)
                        // console.log(i);
                    }}>
                    <motion.p
                        style={{ clipPath: clip }}
                        className='inline-block text-[#b7ab98] uppercase text-[6vw] font-bold leading-[7.5vw] my-2 relative z-[2]
                               2xl:text-[7vw] xl:text-[6vw] lg:text-[4vw] md:text-[3vw] '
                    >
                        {title}
                    </motion.p>

                </div>


            </div>
        </a>
    )
}