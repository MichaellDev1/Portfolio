import React, { useContext, useEffect, useState } from 'react'
import Context from '../../Context/Themes'
import BlobBlur from '../BlobBlur/BlobBlur'
import './index.css'

export default function Footer () {
  const { Themes } = useContext(Context)
  const [year, setYear] = useState()
  useEffect(() => {
    const yearTime = new Date()
    setYear(yearTime.getFullYear())
  }, [])
  return (
    <footer className='text-center flex items-center overflow-hidden justify-end py-12 w-full relative'>
      <div className='flex items-center z-[1]'>
        <h5 className='font-normal text-xs' style={{ color: Themes.text }}>© {year} by Michael Santucho. All Rights Reserved</h5>
        <div className='w-[50px] h-[50px] ml-1 logoFooter rounded-full'>
          <img src='https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079730/logo_vorruv.png' alt='logo portfolio' loading='lazy' className='w-full h-full object-cover' />
        </div>
      </div>
      <BlobBlur positionStyles={{ top: '15px', right: '-0px', height: '600px', width: '500px', opacity: '0.9' }} />
    </footer>
  )
}
