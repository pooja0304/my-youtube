import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-3 py-2 bg-gray-200 rounded-lg text-xs mx-1 font-bold'>{name}</button>
    </div>
  )
}

export default Button
