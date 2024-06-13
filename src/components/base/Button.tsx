import React from 'react'
import style from './styles/general.module.sass'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    color: "primary" | "secondary"
}
const Button: React.FC<Props> = ({color,...props}) => {
  return (
  <button className={`${style.button} ${style?.[color]} `} {...props}></button>
)
}

export default Button