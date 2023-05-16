import React, { useContext } from 'react'
import BlobBlur from '../BlobBlur/BlobBlur'
import Context from '../../Context/Themes'
import './index.css'

export default function AbountMe () {
  const { Themes } = useContext(Context)
  return (
    <div className='min-h-[400px] mb-36  relative' id='abountme'>
      <div><h2 className='py-5 sm:text-3xl text-2xl font-bold' style={{ color: Themes.text }}>Acerca de mí</h2></div>
      <div className='flex items-center justify-center md:flex-row flex-col'>
        <div className='flex-1'>
          <p className=' text-start font-normal sm:text-lg text-base' style={{ color: Themes.description }}>Mi nombre completo es Michael Agustín Santucho, tengo 18 años y soy un apasionado por la tecnología. Mi curiosidad me lleva a estudiar constantemente y mantenerse actualizado sobre los últimos avances en el campo. Además, tengo un gran interés en el diseño y la experiencia de usuario, eso complementa mis habilidades como FrontEnd developer.
          </p>
        </div>
        <div className='flex-1 flex justify-center relative md:ml-5 md:mt-0 mt-10'>
          <div className='sm:w-[320px] content-image sm:h-[320px] h-[250px] w-[250px] rounded-xl relative overflow-hidden z-[2]' style={{ background: '#0000002d', backdropFilter: 'blur(60px)' }}>

            <div className='image'>
              <img src='https://res.cloudinary.com/dfkvvcfxs/image/upload/v1683918126/20230429_174528-compressed_t8426v.jpg' className='w-[100%] h-[100%] rounded-xl object-cover object-center' loading='lazy' alt='image Michael Santucho' />
            </div>
          </div>

          <BlobBlur positionStyles={{ top: '0', right: '0', height: '600px', width: '70%', opacity: '1' }} />
        </div>
      </div>
    </div>
  )
}
