import React, { useContext } from 'react'
import Titles from '../Title'
import Context from '../../Context/Themes'
import CardSoftSkill from './CardSoftSkills'
import { GiInspiration, GiProgression } from 'react-icons/gi'
import { MdOutlineEmojiPeople } from 'react-icons/md'
import { VscCommentUnresolved } from 'react-icons/vsc'
import { FaLaptopCode } from 'react-icons/fa'
import './index.css'

export default function SoftSkills () {
  const { Themes } = useContext(Context)
  return (
    <section className='min-h-[440px] py-5 relative'>
      <Titles title='Habilidades blandas' Themes={Themes} />
      <div className='flex flex-col items-center w-full'>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1'>
          <CardSoftSkill text='Adaptabilidad' icon={<GiProgression />} description='Me adapto muy rápidamente a cualquier tecnología o herramienta que sale en el día a día' />
          <CardSoftSkill text='Creatividad' icon={<GiInspiration />} description='Mi gran creatividad me lleva a crear software con una experiencia de usuario agradable' />
          <CardSoftSkill text='Resolución de problemas' icon={<VscCommentUnresolved />} description='Resuelvo problemas con una gran calidad, escribiendo código limpio y entendible para otros desarrolladores' />
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <CardSoftSkill text='Agilidad' icon={<FaLaptopCode />} description='Tengo una gran agilidad para desenvolver cualquier inconveniente que surja' />
          <CardSoftSkill text='Comunicación' icon={<MdOutlineEmojiPeople />} description='Me gusta transmitir mucho lo que pienso, lo que opino, y de una manera constructiva.' />
        </div>
      </div>
      <div className='shadowBottom' style={{ background: `linear-gradient(to bottom, #33333300, ${Themes.gradientLower} 50%, ${Themes.gradientMedium} 95%, ${Themes.gradientAlto} 75%)` }} />
    </section>
  )
}
