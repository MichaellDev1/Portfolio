import React, { useContext } from 'react'
import { skills } from '../../data/SkillsData'
import IconSkill from '../IconSkill'
import './skills.css'
import Context from '../../Context/Themes'

export default function Skills () {
  const { Themes } = useContext(Context)
  return (
    <div className='w-full h-min[400px] mb-36' id='skills'>
      <div><h2 className='py-5 text-3xl font-bold' style={{ color: Themes.text }}>Habilidades</h2></div>
      <div className='grid gap-5 lg:grid-cols-5 sm:grid-cols-2 grid-cols-2 content-skills'>
        {skills.map(res => <IconSkill key={res.skill} theme={Themes} res={res} />)}
      </div>
    </div>
  )
}
