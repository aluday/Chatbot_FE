import React from "react"

const Button =({
    label = 'Button',
    type = 'button',
    className = '',
    disabled = false
}) => {
    return (
        <button type={type} 
          className={`inline-flex items-center justify-center rounded-md text-sm font-medium 
          text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 
          bg-black 
          hover:bg-[#111827E6] h-10 px-4 py-2 ${className}`}
          disabled={disabled}
        >
            {label}
        </button>
    )
}

export default Button