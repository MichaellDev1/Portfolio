import React from 'react'
import './index.css'

export default function ButtonProjects ({ hreft, themes, icon, title }) {
  return <a href={hreft} target='_BLANK' className='flex items-center justify-center text-[13px] button-projects py-1 text-[#c9d1d9] font-semibold rounded-md' style={{ border: `1px solid ${themes.borderButton}`, backgroundColor: themes.cardSoftSkill, color: themes.text }} rel='noreferrer'><span className='mr-1'>{icon}</span>{title}</a>
}
