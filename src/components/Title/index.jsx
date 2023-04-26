import React from 'react'

export default function Titles ({ Themes, title }) {
  return (
    <div><h2 className='py-5 sm:text-3xl text-2xl font-bold' style={{ color: Themes.text }}>{title}</h2>
    </div>
  )
}
