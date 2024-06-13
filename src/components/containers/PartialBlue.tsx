import React from 'react'
import style from './containers.module.sass'

const PartialBlue = ({children}: {children:React.ReactNode}) => {
  return (
    <div className={style.partialBlue}>
        {children}
    </div>
  )
}

export default PartialBlue