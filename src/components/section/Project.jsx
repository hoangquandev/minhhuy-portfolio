import React from 'react'
import Earth from '../ui/Earth'
import List from '../ui/List'
import TitleSection from '../ui/TitleSection'

const Project = () => {
  return (
    <>
      <div name='work' className='relative'>
        <div className='absolute -top-14 left-6 lg:top-16 lg:left-40'>
          <TitleSection title='Projects' />
        </div>
        <section className='h-[60vw] relative flex justify-center items-center bg-transparent' id='project'>
          <Earth />
          <List />
        </section>
      </div>
    </>
  )
}

export default Project