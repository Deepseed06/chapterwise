import React from 'react'

const Button = ({color, text}) => {
    
  return (
    <div className={`bg-${color} p-4 border
     border-${color} text-white rounded-lg text-center`}>{text}</div>

  )
}

export default Button