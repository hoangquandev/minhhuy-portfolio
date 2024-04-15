import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Magnetic = ({ children }) => {
    const magnetic = useRef(null)
    useEffect(() => {
        const xMove = gsap.quickTo(magnetic.current, 'x', {
            duration: 1,
            ease: "elastic.out(1,0.3)"

        })
        const yMove = gsap.quickTo(magnetic.current, 'y', {
            duration: 1,
            ease: "elastic.out(1,0.3)"

        })

        magnetic.current.addEventListener('mousemove', (e) => {
            {
                const { clientX, clientY } = e
                const { height, width, left, top } = magnetic.current.getBoundingClientRect()
                const x = clientX - (left + width / 2)
                const y = clientY - (top + height / 2)
                xMove(x)
                yMove(y)
            }
        })
        magnetic.current.addEventListener('mouseleave', (e) => {
            {
                xMove(0)
                yMove(0)
            }
        })
    }, [])
    return (
        <div ref={magnetic}>{children}</div>
    )
}

export default Magnetic