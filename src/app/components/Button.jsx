import React from 'react'

const Button = ({color, text, width}) => {
    
  return (
    <div className={`bg-${color} p-4 w-${width} border
     border-${color} text-white rounded-xl text-center`}>{text}</div>

  )
}

export default Button