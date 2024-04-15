import React from 'react'

export default function Description({data,selectedProject}) {
    const crop = (string,maxLength)=>{
        return string.substring(0, maxLength)
    };
return (
    <div className='absolute top-[3px] h-full w-full z-[1]'>
        {
            data.map((project,i)=>{
                const {title,description} = project;
                return(
                    <div
                        key={i}
                        className='bg-[#ec4e39] flex justify-between items-center px-40'
                        style={{clipPath:selectedProject == i ?"inset(0 0 0":"inset(50% 0 50%", transition:'clip-path .4s'}}
                    >
                        <p
                            className=' inline-block text-[#b7ab98] uppercase text-[6vw] font-bold leading-[7.5vw] m-0 relative z-[1]
                            2xl:text-[7vw] xl:text-[6vw] lg:text-[4vw] my-2'
                           
                        >
                            {crop(title,9)}
                        </p>
                        <p
                            style={{
                                width:'40%',
                                fontSize:'10px',
                                fontWeight:700,

                            }}
                        >
                            {description}
                        </p>
                    </div>
                )
            })
        }
    </div>


)
    }