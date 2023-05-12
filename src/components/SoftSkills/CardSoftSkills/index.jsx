import React, { useContext } from 'react'
import '../index.css'
import Context from '../../../Context/Themes'

export default function CardSoftSkill ({ text, icon, description }) {
  const { Themes } = useContext(Context)
  return (
    <div className='cardSoftSkill m-1'>
      <div className='border-card p-5' style={{ backgroundColor: Themes.cardSoftSkill }}>
        <div>
          <div className='iconContent' style={{ background: Themes.contentIconSoftSkill }}>
            <span style={{ color: Themes.text }}>{icon}</span>
          </div>
        </div>
        <span className='font-normal text-lg mt-2' style={{ color: Themes.text }}>{text}</span>
        <p className='font-normal text-base' style={{ color: Themes.descriptionSoftSkill }}>{description}</p>
      </div>
      <span className='shadow' style={{ background: `linear-gradient(180deg, #25252500 0%, rgba(10, 1, 24, 0) 24.22%, rgba(10, 1, 24, 0) 73.85%, ${Themes.bgc} 100%)` }} />
    </div>
  )
}
