import React, { useContext } from 'react'
import { skills } from '../../data/SkillsData'
import IconSkill from '../IconSkill'
import './skills.css'
import Titles from '../Title/index'
import Context from '../../Context/Themes'

export default function Skills () {
  const { Themes } = useContext(Context)
  return (
    <div className='w-full h-min[400px] mb-36' id='skills'>
      <Titles Themes={Themes} title='Habilidades' />
      <div className='grid gap-5 lg:grid-cols-5 sm:grid-cols-2 grid-cols-2 content-skills'>
        {skills.map(res => <IconSkill key={res.skill} theme={Themes} res={res} />)}
      </div>
    </div>
  )
}
