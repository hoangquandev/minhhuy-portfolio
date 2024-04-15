import React, { useContext, useState } from 'react'
// import MouseContext from './utills/mouseContext'
import SubContact from '../ui/SubContact'
import PhoneMail from '../ui/PhoneMail'

const Contact = () => {
    const data = [
        {
            title: "Dribbble ",
            description: "Fake work",

        },
        {
            title: "Youtube",
            description: "Random tutorials",

        },
        {
            title: "Linkedin",
            description: "Serious me",

        },

    ]
    const data2 = [
        {
            title: "Instagram ",
            description: "Not Tiktok",

        },
        {
            title: "Facebook",
            description: "Mostly dog stories",

        },
        {
            title: "Github",
            description: " My storage ",

        },
    ]
    const data3 = [
        {
            title: "Email ",
            description: "mhuy2898@gmail.com",
            text: '100% chance i read it'

        },
        {
            title: "Phone",
            description: "+84 905 914 397",
            text: `5% chance i don't pick up`

        },

    ]
    const [selectedContact, setSelectedContact] = useState(null)
    const [selectedContact2, setSelectedContact2] = useState(null)
    const [selectedContact3, setSelectedContact3] = useState(null)

    // const mouse = useContext(MouseContext)
    return (
        <div className='w-screen'  >
            <div className='w-full h-full flex flex-col text-center justify-center items-center text-[#b7ab98] font-bold  z-10 mix-blend-difference'>
                <p className='text-[2rem] tracking-[0.5rem] p-10 uppercase'>
                    my motto
                </p>
                <p className=' 2xl:text-[8rem] xl:text-[6rem] lg:text-[4rem] md:text-[2rem] sm:text-[1rem] flex p-10 uppercase ' >
                    "Writing Code, Shaping Tomorrow"
                </p>

                <p>-Developers-</p>
            </div>
            <div name='contact' className='  text-[#b7ab98] font-bold mx-20 2xl:mx-80 xl:mx-72 lg:mx-64 md:mx-56 sm:mx-48 mt-40'>
                <div className='uppercase text-[16px] leading-[28px] tracking-[0.5rem] mb-12'>
                    connect
                </div>
                <div className=' justify-between lg:flex sm:block'>
                    <ul className='flex flex-col '>
                        <SubContact data={data} setSelectedContact={setSelectedContact} selectedContact={selectedContact} />

                    </ul>
                    <ul>
                        <SubContact data={data2} setSelectedContact={setSelectedContact2} selectedContact={selectedContact2} />

                    </ul>
                    <div className='flex flex-col justify-around'>
                        <PhoneMail data={data3} setSelectedContact={setSelectedContact3} selectedContact={selectedContact3} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact