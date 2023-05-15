import React, { useCallback, useContext, useEffect, useState } from 'react'
import Context from '../../Context/Themes'
import { FiSun } from 'react-icons/fi'
import { RiMoonLine } from 'react-icons/ri'
import { AiOutlineDesktop } from 'react-icons/ai'
import { BsStars } from 'react-icons/bs'
import './index.css'

export default function Footer () {
  const { Themes, setDarkMode } = useContext(Context)
  const [modeSelected, setModeSelected] = useState(0)
  const [year, setYear] = useState()

  useEffect(() => {
    const yearTime = new Date()
    setYear(yearTime.getFullYear())
  }, [])

  const handleDarkMode = useCallback((mode) => {
    if (mode === 0) {
      setDarkMode(true)
    } else if (mode === 1) {
      setDarkMode(false)
    } else {
      if (window.matchMedia) {
        setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      }
    }
    setModeSelected(mode)
  })

  const buttonsMode = [{
    type: 0,
    icon: <RiMoonLine />
  }, {
    type: 1,
    icon: <FiSun />
  }, {
    type: 2,
    icon: <AiOutlineDesktop />
  }]

  return (
    <footer className='text-center flex items-center justify-between py-12 w-full relative' style={{ overflow: 'hidden', borderTop: `1px solid ${Themes.borderTopFooter}` }}>
      <div className='flex items-center z-[1] mr-4'>
        <h5 className='font-normal sm:text-xs flex items-center text-[9px]' style={{ color: Themes.text }}><span className='sm:text-lg text-base mr-2'><BsStars /></span>Hecho con ♡ por Michael Santucho | {year}</h5>
      </div>
      <div className='py-[5px] sm:px-2 sm:ml-0 px-2 button-footer rounded-3xl'>
        <div className='sm:text-base contents text-xs ml-2' style={{ color: Themes.text }}>
          {buttonsMode.map(({ icon, type }) => <button key={type} className={`${modeSelected === type ? 'bg-[#302c2c] text-white' : null} p-2 rounded-full`} onClick={() => handleDarkMode(type)}>{icon}</button>)}
        </div>
      </div>
    </footer>
  )
}
