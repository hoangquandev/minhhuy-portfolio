import React from 'react'

const TitleSection = ({ title }) => {
    const nameArr = title.split('')
    return (
        <h2 className='text-lg tracking-widest mb-6 uppercase'>{nameArr.map((item, index) => {
            return (
                <span key={index} className='px-1'>{item}</span>
            )
        })}</h2>
    )
}

export default TitleSection