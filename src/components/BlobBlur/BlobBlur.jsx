import React from 'react'
import './blobBlur.css'

export default function BlobBlur ({ positionStyles, animationActive = false }) {
  return (
    <div
      className={`blobs ${animationActive ? 'animation--active' : null}`}
      style={positionStyles}
    >
      <div className='purple-blob' />
      <div className='blue-blob' />
      <div className='cyan-blob' />
    </div>
  )
}
