import React, { useEffect, useRef, useState } from 'react'
import audio1 from '../../../assets/audio-site.mp3'
const SoundButton = () => {
    const [music, setMusic] = useState(true)
    const audio = useRef(null)

    const handleMusic = () => {
        if (music) {
            setMusic(false)
            audio.current.play()


        }
        else {
            audio.current.pause()

            setMusic(true)
        }
    }



    return (
        <div className='fixed bottom-10 right-6 lg:bottom-16 lg:right-16 flex flex-col gap-10 z-50' onClick={handleMusic} >
            <div className='-rotate-90 h-[30px] overflow-hidden  relative'  >
                <audio src={audio1} ref={audio} />
                <div
                    style={music ? { top: '-100%' } : { top: '0' }}
                    className='absolute text-[#B7AB98] text-base lg:text-lg uppercase cursor-pointer font-bold transition-all duration-500'

                >on
                </div>
                <div
                    style={music ? { top: '0' } : { top: '100%' }}
                    className='absolute text-[#B7AB98] text-base lg:text-lg uppercase cursor-pointer font-bold transition-all duration-500'

                >off
                </div>
            </div>
            <div className=' text-[#B8AC9980] text-base lg:text-lg uppercase -rotate-90 hover:text-[#B7AB98] cursor-pointer font-bold'
            >sound
            </div>

        </div>
    )
}

export default SoundButton



