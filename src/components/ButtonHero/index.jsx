import React, { useCallback, useRef, useState } from 'react'
import './index.css'

export default function Button ({ style, children, styleTal, hover, href, isDowload = false }) {
  const mql = window.matchMedia('(min-width: 800px)')
  const rounded = useRef()

  const handleMouseMove = useCallback((e) => {
    if (mql.matches) {
      const y = e.pageY - e.target.offsetTop - 10
      const x = e.pageX - e.target.offsetLeft - 130
      rounded.current.style.opacity = 1
      rounded.current.style.top = y + 'px'
      rounded.current.style.left = x + 'px'
    }
  })

  const handleMouseLeave = useCallback(() => {
    rounded.current.style.opacity = 0
  })

  return (
    <a onMouseMove={handleMouseMove} href={href} download={!!isDowload} onMouseLeave={handleMouseLeave} className={`py-[10px] px-4 font-medium text-white relative overflow-hidden transition-[background-color] rounded-3xl ${styleTal}`} style={style}><span className='children'>{children}</span> <span className=' w-14 h-14 top-0 absolute cubito' ref={rounded} /></a>
  )
}
