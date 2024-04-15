
import React, { useContext, useRef } from 'react'
// import MouseContext from './utills/mouseContext';
// import triangle from "../assets/triangle.svg"


export default function PhoneMail({ data, setSelectedContact, selectedContact }) {
    return (
        <div className='w-full'>
            {
                data.map((project, index) => {
                    return <Title key={index} data={{ ...project, index }} setSelectedContact={setSelectedContact} selectedContact={selectedContact} />
                })
            }
        </div>
    )
}

function Title({ data, setSelectedContact, selectedContact }) {
    const { title, index, description, text } = data;
    const container = useRef(null);
    // const mouse = useContext(MouseContext)
    return (
        <div ref={container} className='relative z-[4]  font-bold gap-4'
        >
            <div className=' flex ' key={index}  >
                <div
                // onMouseLeave={()=>{
                //     setSelectedContact(null)
                // }}
                // onMouseEnter={()=>{
                //     setSelectedContact(index)
                //     mouse.setSize(40)     
                // }}
                >
                    <div className='absolute w-[400px] p-2 2xl:text-[18px] xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[#000]  bg-[#ec4e39] font-bold  m-0  z-[2]'
                        style={{ clipPath: selectedContact == index ? "inset(0% 0 0%)" : "inset(50% 0 50%)", transition: 'clip-path .4s' }}
                    >
                        <p>{text}</p>
                        <p className=''>{description}</p>
                    </div>
                    <div className=' font-bold 2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] p-2  m-0 relative z-[-10]'
                        style={{ clipPath: selectedContact == index ? "inset(-50% 0 -50%)" : "inset(0 0 0)", transition: 'clip-path .4s' }}

                    >
                        <div>
                            <p>{title}</p>
                            <p className='text-[#B8AC9980]'>{description}</p>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}