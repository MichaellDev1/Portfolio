import React, { useContext } from 'react'
import './hero.css'
import Button from '../ButtonHero'
import Context from '../../Context/Themes'
import ManoSaludando from '../ManoSaludando'
import { RxFileText } from 'react-icons/rx'
import { FaReact } from 'react-icons/fa'
import { DiJavascript1, DiNodejsSmall } from 'react-icons/di'
import BlobBlur from '../BlobBlur/BlobBlur'
import MouseIcon from '../MouseIcon'

import ButtonAnimation from '../ButtonAnimation'

export default function Hero () {
  const { Themes } = useContext(Context)

  return (
    <div className='flex justify-center items-center  min-h-[500px] md:flex-row flex-col gap-10 relative mb-36 pt-[10rem]'>
      <div className='absolute  md:bottom-[-50px] md:left-[-50px] bottom-[-100px] left-0'>
        <MouseIcon color={Themes.text} />
      </div>
      <BlobBlur positionStyles={{ top: '-230px', left: '0', height: '600px', width: '60%', opacity: '1' }} />
      <div className='flex-1 z-[2]'>
        <div className='sm:text-[50px] md:text-left text-center ' style={{ color: Themes.text }}>
          <h1 className='md:items-start text-[50px] title flex flex-col items-center leading-none font-bold relative'>
            <span className='flex mb-2 leading-3 title items-center'>Michael <span className='ml-2 manoSaludando'><ManoSaludando /></span></span>
            <span>FrontEnd Developer</span>
          </h1>
          <p className='text-sm font-normal description-hero mt-4' style={{ color: Themes.description }}>De manera autodidacta e estudiado constantemente y estoy en busqueda de mi primer experiencia laboral.</p>
        </div>
        <div className='flex mt-5 sm:text-[17px] md:justify-start text-[16px] justify-center'>
          <Button style={{ background: 'rgb(27 149 213)', marginRight: '10px', border: '1px solid rgb(237 237 237 / 28%)' }} href='/cv' hover='#051f2c'>
            <span className='flex items-center'>
              Ver CV
              <span className='ml-2 text-lg'>
                <RxFileText />
              </span>
            </span>
          </Button>
          <ButtonAnimation isBlank={false} href='#contact' text='Contacto' />
        </div>
      </div>

      <div className='flex-1 z-[2] relative md:flex-row flex-col h-[400px] justify-center items-center lg:flex hidden'>
        <div className='w-[410px] flex justify-center relative items-center  h-[410px] rounded-full' style={{ border: `2px solid ${Themes.text}` }}>

          <div className='w-[410px] flex justify-center top-0 atom left-0 items-center h-[410px] rounded-full absolute'>

            <div className='w-[50px] h-[50px] rounded-full absolute bottom-[45px] flex justify-center items-center text-3xl right-[30px]' style={{ background: Themes.text, color: Themes.iconHero }}>
              <FaReact />
            </div>

            <div className='w-[50px] flex justify-center items-center text-3xl h-[50px] rounded-full absolute -top-[27px]' style={{ background: Themes.text, color: Themes.iconHero }}>
              <DiJavascript1 />
            </div>

            <div className='w-[50px] flex justify-center items-center text-3xl h-[50px] rounded-full absolute -left-[25px]' style={{ background: Themes.text, color: Themes.iconHero }}>
              <DiNodejsSmall />
            </div>

          </div>
          <div className='w-[320px] overflow-hidden justify-center items-center flex h-[320px] rounded-full' style={{ background: '#0000002d', backdropFilter: 'blur(60px)' }}>
            <img src='https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079963/image_cbj1l9.jpg' alt='xs' loading='lazy' className='rounded-full w-[100%] h-[100%] object-cover object-top' />
          </div>
        </div>
      </div>
    </div>
  )
}
