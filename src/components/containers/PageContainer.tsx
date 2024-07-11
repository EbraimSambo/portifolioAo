import React from 'react'
import style from './containers.module.sass'

const PageContainer = ({children, margin}: {children:React.ReactNode, margin?: "top"| "bottom"}) => {
  return (
    <div className={`${style.pageContainer} ${margin && style?.[margin!]}`}> {children} </div>
  )
}

export default PageContainer