import React from 'react'

export default function Overlay({ children }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}
    >
      {children}
    </div>
  )
}
