import React from 'react'
import './Card.css'

interface Children {
  children: React.ReactNode
}

export const Card = ({children} : Children) => {
  return (
    <div className='card'>{children}</div>
  )
}
