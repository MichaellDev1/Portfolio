import React, { useState, useEffect } from 'react'
import './index.css'

export default function ScreenLoading () {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div className={`w-full justify-center ${isLoading ? 'null' : 'loader'} flex z-20 top-0 left-0 text-white items-center min-h-[100vh] fixed loading`} style={{ background: 'rgb(14 13 14)' }}>
      <h2 className='text-2xl font-semibold uppercase flex flex-col items-center'>
        <span className='letter-loading uppercase'>michael</span>
        <span className='letter-loading uppercase'>developer</span>
      </h2>
    </div>
  )
}
