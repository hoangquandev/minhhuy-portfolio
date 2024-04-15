import React, { useState } from 'react'
import Titles from './Titles'
import Description from './Description'

const List = () => {
  const data = [
    {
        title: "Fashion game",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5,
        link:''
    },
    {
        title: "Todo list",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5,
        link:''

    },
    {
        title: "Nike",
        description: "Defined the visual conc",
        speed: 0.67,
        link:'https://nike-project-blush.vercel.app/'

    },
    {
        title: "Blog",
        description: "I was just one person on a",
        speed: 0.8,
        link:'https://figma01-beta.vercel.app/'

    },
    {
        title: "Ecommerce",
        description: "Designed a 1M+ users.",
        speed: 0.8,
        link:'https://ecommerce-ver2.vercel.app/'

    },
    
]
  const [selectedProject,setSelectedProject] = useState(null)
  return (
    <div className='w-full absolute z-[1]  '>
      <Titles data ={data} setSelectedProject={setSelectedProject}/>
      <Description data ={data} selectedProject={selectedProject}/>
    </div>
  )
}

export default List