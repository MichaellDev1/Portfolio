import React, { useContext } from 'react'
import BlobBlur from '../BlobBlur/BlobBlur'
import Context from '../../Context/Themes'

export default function AbountMe () {
  const { Themes } = useContext(Context)
  return (
    <div className='min-h-[400px] mb-36  relative' id='abountme'>
      <div><h2 className='py-5 text-3xl font-bold' style={{ color: Themes.text }}>Acerca de mi</h2></div>
      <div className='flex items-center justify-center md:flex-row flex-col gap-10'>
        <div className='flex-1'>
          <p className=' text-start font-normal text-lg' style={{ color: Themes.description }}>Mi nombre completo es Michael Agustín Santucho, tengo 17 años y soy un apasionado por la tecnología. Mi curiosidad me lleva a estudiar constantemente y mantenerse actualizado sobre los últimos avances en el campo. Además, tengo un gran interés en el diseño y la experiencia de usuario.
          </p>
        </div>
        <div className='flex-1 flex justify-center relative'>
          <div className='w-[320px] h-[320px] rounded-xl bg-white relative overflow-hidden z-[2]'>
            <img src='https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682107435/sobremiImage-min_zrjhrw.jpg' className='w-full h-full object-cover' alt='' />
          </div>
          <BlobBlur positionStyles={{ top: '0', right: '0', height: '600px', width: '500px', opacity: '0.7' }} />
        </div>
      </div>
    </div>
  )
}
