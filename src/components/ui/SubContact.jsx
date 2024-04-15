
import React, { useContext, useRef } from 'react'
// import MouseContext from './utills/mouseContext';
import triangle from "../../assets/triangle.svg"


export default function SubContact({ data, setSelectedContact, selectedContact }) {
    return (
        <div className=''>
            {
                data.map((project, index) => {
                    return <Title key={index} data={{ ...project, index }} setSelectedContact={setSelectedContact} selectedContact={selectedContact} />
                })
            }
        </div>
    )
}

function Title({ data, setSelectedContact, selectedContact }) {
    const { title, index, description } = data;
    const container = useRef(null);
    // const mouse = useContext(MouseContext)
    return (
        <div
            ref={container}
            className='relative  z-[4] flex 2xl:text-[44px] xl:text-[36px] lg:text-[28px] md:text-[24px] sm:text-[20px] font-bold gap-4'>
            <div className=' flex  gap-4  '
                key={index}
            >
                <img src={triangle} alt="" className='' />

                <div className=''

                >
                    <div className='absolute w-[400px] text-[#000] flex bg-[#ec4e39] font-bold z-[2]'
                        style={{ clipPath: selectedContact == index ? "inset(0% 0 0%)" : "inset(50% 0 50%)", transition: 'clip-path .4s' }}
                    >
                        {description}
                    </div>
                    <div className=' text-[#b7ab98]   font-bold  m-0 relative z-[-10]'
                        style={{ clipPath: selectedContact == index ? "inset(-50% 0 -50%)" : "inset(0 0 0)", transition: 'clip-path .4s' }}
                    >
                        {title}
                    </div>
                </div>

            </div>


        </div>
    )
}