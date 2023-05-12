import React, { useContext } from 'react'
import './index.css'
import Context from '../../Context/Themes'

export default function ButtonAnimation ({ text, href, isBlank = true }) {
  const { Themes } = useContext(Context)
  return (
    <div className='glowing-box glowing-box-active'>
      <div className='glowing-box-animations'>
        <div className='glowing-box-glow' />
        <div className='glowing-box-stars-masker'>
          <div className='glowing-box-stars' />
        </div>
      </div>
      <div className='glowing-box-borders-masker'>
        <div className='glowing-box-borders' />
      </div>
      <a href={href} className='glowing-box-button inline-block' style={{ border: `1px solid ${Themes.borderBtnAnimation}` }} target={isBlank ? '_blank' : null} rel='noreferrer'>
        <span style={{
          background: `linear-gradient(180deg, ${Themes.backgroundClip} 8.85%, #FFFFFF 100%)`,
          backgroundClip: 'text',
          color: 'transparent',
          WebkitTextFillColor: Themes.textFill,
          display: 'block',
          fontWeight: 800,
          WebkitBackgroundClip: 'text'
        }}
        >
          {text}
        </span>
      </a>
    </div>
  )
}
