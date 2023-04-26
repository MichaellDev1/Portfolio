import React from 'react'
import './index.css'

function IconSkill ({ res, theme }) {
  return (
    <div key={res.skill} className='relative inline-block px-3 rounded-md py-2 item-skills' style={{ backgroundColor: theme.cardSkill }}>
      {res.inProcess ? <span className='w-[6px] h-[6px] right-2 bg-lime-500 absolute rounded-full inProcess' /> : null}
      <div className='w-14 h-14 mb-2 text-3xl flex justify-center items-center icon-skill rounded-lg' style={{ backgroundColor: theme.iconContent }}><span style={{ zIndex: '3', color: theme.text }}>{res.icon}</span></div>
      <span className='w-2 h-2 bottom-[65px] blur-[11px] left-8 rounded-full absolute' style={{ background: res.color }} />
      <span className='w-2 h-2 bottom-[70px] blur-[11px] left-9 rounded-full absolute' style={{ background: res.color }} />
      <span className='text-base font-medium' style={{ color: theme.text }}>{res.skill}</span>
    </div>
  )
}

export default React.memo(IconSkill)
