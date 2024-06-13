import Link from 'next/link'
import React from 'react'
import style from './styles/navbar.module.sass'

const Logo = () => {
  return (
    <Link className={style.logo} href={"/"}>
        <span>WEB.</span><span>AO</span>
    </Link>
  )
}

export default Logo