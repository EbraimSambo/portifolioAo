"use client"
import { LinksNavbar } from '@/utils/data/links'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import style from './styles/navbar.module.sass'
import Logo from './Logo'
import { useScrollHeader } from '@/utils/hooks/scrollListener'
type ProgressbarProps = {
  target: React.RefObject<HTMLElement>;
};
const Navbar = ({target}:ProgressbarProps) => {
  
  const {scroll,pathName} = useScrollHeader(target)
  console.log(scroll);
  
  return (
    <header className={`${style.header} ${pathName ==="/" ? scroll && style.active: style.normal} `}>
      <Logo />
      <nav>
        <ul>
          {LinksNavbar.map((link, index) => (
            <li key={index} > <Link href={link.path}> {link.name} </Link> </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar