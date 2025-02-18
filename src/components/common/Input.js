import React from 'react'

const Input = ({
    name = '',
    type = 'text',
    className = '',
    isRequired = false,
    placeholder = ''
}) => (
    <div className="flex items-center pt-0">
      <form className="flex items-center justify-center w-full space-x-2">
        <input type={type} id={name}
          className={`flex h-10 w-full rounded-md border 
            border-[#e5e7eb] px-3 py-2 text-sm 
            placeholder-[#6b7280] focus:outline-none focus:ring-2 
            focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 
            text-[#030712] focus-visible:ring-offset-2 ${className}`}
          placeholder={placeholder} 
          value=""
          required = {isRequired}
        />
      </form>
    </div>
)

export default Input