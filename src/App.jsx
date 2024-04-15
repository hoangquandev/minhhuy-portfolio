
import { useEffect, useRef, useState } from 'react'
import './App.css'
import Hero from './components/section/Hero'
import Logo from './components/ui/nav/Logo'
import Navbar from './components/ui/nav/Navbar'
import SocialNav from './components/ui/nav/SocialNav'
import SoundButton from './components/ui/nav/SoundButton'
import useMousePosition from './hooks/useMousePosition'
import { motion } from 'framer-motion';
import gsap from 'gsap'
import About from './components/section/About'
import WhatIdo from './components/section/WhatIdo'
import Experience from './components/section/Experience'
import Project from './components/section/Project'
import Contact from './components/section/Contact'

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const content = useRef(null)
  const { x, y } = useMousePosition();
  // const size = isHovered ? 400 : 40;
  useEffect(() => {

    window.addEventListener("mousemove", onFirstMove);


    function onFirstMove(e) {
      window.removeEventListener("mousemove", onFirstMove);
      gsap.set(".hidden-content", { autoAlpha: 1, "--x": e.pageX, "--y": e.pageY });


    }
  }, [])
  useEffect(() => {
    let xTo = gsap.quickTo(".hidden-content", "--x", {
      duration: 0.4,
      ease: "power4.out"
    })
    let yTo = gsap.quickTo(".hidden-content", "--y", {
      duration: 0.4,
      ease: "power4.out"
    });
    let tl = gsap.timeline({ paused: true });
    tl.to(".hidden-content", {
      "--size": 20,
      duration: 0.75,
      ease: "back.out(1.7)"
    });

    window.addEventListener("mousemove", (e) => {
      // if (!linkAnimated) {
      // console.log(e);
      yTo(e.pageY);
      xTo(e.pageX);
      // }
    });
    gsap.set(".hidden-content", {
      autoAlpha: 1,
      "--x": window.innerWidth / 3,
      "--y": window.innerHeight / 2
    });

  }, [])
  return (
    <div ref={content} className='relative'>
      <div>
        <Hero name='minh huy' slogan='making good shit since 2023' />
        <About isMask={false} text={"I'm A creative developer - with strong clean code and animation skill - making good website only if the paycheck is equally good."} />
        <WhatIdo />
        <Experience />
        <Project />
        <Contact />
      </div>
      <div
        className='hidden-content text-black'
      >
        <Hero isMask={true} name='minh huy' slogan='hiding bad shit since 2023' />
        <About isMask={true} text={"I'm A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good."} />
        <WhatIdo />
        <Experience />
        <Project />
      </div>
      <Logo />
      <Navbar />
      <SocialNav />
      <SoundButton />
    </div>
  )
}

export default App
