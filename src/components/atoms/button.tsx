import React, { ButtonHTMLAttributes, FC, ReactElement } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  classProps?: string
}

const Button: FC<IButtonProps> = ({ text, classProps, ...props }): ReactElement => {
  return (
    <button
      className={`outline-none hover:bg-first-color-alt focus:outline-none bg-first-color rounded-lg p-4 ${classProps}`}
      {...props}
    >
      <p className="font-medium text-t-xs text-white">{text}</p>
    </button>
  )
}

export default Button
