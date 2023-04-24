import React, { useContext } from 'react'
import Context from '../../Context/Themes'
import { IoLogoInstagram } from 'react-icons/io'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import BlobBlur from '../BlobBlur/BlobBlur'
import './index.css'

const redes = [{
  red: 'Instagram',
  link: 'https://www.instagram.com/michael718s/',
  icon: <IoLogoInstagram />
}, {
  red: 'Linkedin',
  link: 'https://www.linkedin.com/in/michael-santucho-0a8876256',
  icon: <AiFillLinkedin />
}, {
  red: 'Git Hub',
  link: 'https://github.com/MichaellDev1',
  icon: <AiFillGithub />
}]

export default function Contact () {
  const { Themes } = useContext(Context)
  return (
    <div className='w-full py-5 relative ' id='contact'>
      <div><h2 className='py-5 text-3xl font-bold' style={{ color: Themes.text }}>Contacto</h2></div>
      <div className='flex flex-col justify-center'>
        <div style={{ color: Themes.text }}>

          <div className='py-10 flex flex-wrap'>
            <div>
              <h5 className='font-semibold text-lg'>Email:</h5>
              <a href='mailto:santuchomichael131@gmail.com'>
                santuchomichael131@gmail.com
              </a>
            </div>
            <div className='ml-7'>
              <h5 className='font-semibold text-lg'>Telefono:</h5>
              <a href='let:+543434641350'>
                +543434641350
              </a>
            </div>
          </div>

          <div className='flex flex-col'>
            <h5 className='font-semibold text-lg'>
              Mis redes:
            </h5>

            <ul className='flex mt-1'>
              {
              redes.map(({ red, link, icon }) => (
                <li key={red} className='text-3xl footer-redes'>
                  <a href={link}>{icon}</a>
                </li>
              ))
            }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
