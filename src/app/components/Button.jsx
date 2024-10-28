import React from 'react'

const Button = ({color, text}) => {
    
  return (
    <div className={`bg-${color} p-4 border
     border-${color} text-white rounded-xl text-center`}>{text}</div>

  )
}

export default Button