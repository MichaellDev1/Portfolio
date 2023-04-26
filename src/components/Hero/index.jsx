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
import CV from '../../../public/CV.pdf'

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
            <span className='flex mb-2 leading-3 title items-center'>Michael <span className='ml-2'><ManoSaludando /></span></span>
            <span>FrontEnd Developer</span>
          </h1>
          <p className='text-sm font-normal description-hero mt-4' style={{ color: Themes.description }}>De manera autodidacta he conseguido todo los conocimientos como para empezar mi busqueda laboral y enfrentarme a nuevos desafios que me hagan crecer profesionalmente.</p>
        </div>
        <div className='flex  mt-5 sm:text-[17px] md:justify-start text-[16px] justify-center'>
          <Button style={{ background: '#0284C7', marginRight: '10px' }} href={CV} isDowload hover='#051f2c'>
            <span className='flex items-center'>
              Descargar CV
              <span className='ml-2 text-xl'>
                <RxFileText />
              </span>
            </span>
          </Button>
          <Button style={{ border: '1px solid #7d7d7d', color: Themes.text }} href='#contact'>
            Contacto
          </Button>
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
          <div className='w-[320px] overflow-hidden h-[320px] rounded-full'>
            <img src='https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079963/image_cbj1l9.jpg' alt='xs' />
          </div>

        </div>
      </div>
    </div>
  )
}
