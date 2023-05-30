import React from 'react'

const ButtonCustom = ({ title, onCLik, className }) => {
  return (
    <button
      onClick={onCLik}
      className={`p-2 rounded-md shadow-md hover:scale-110 transition-all w-32 text-white font-semibold  ${className}`}
    >
      {title}
    </button>
  )
}

export default ButtonCustom