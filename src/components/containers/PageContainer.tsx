import React from 'react'
import style from './containers.module.sass'

const PageContainer = ({children}: {children:React.ReactNode}) => {
  return (
    <div className={style.pageContainer}> {children} </div>
  )
}

export default PageContainer