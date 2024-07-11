"use client"
import { LinksNavbar } from '@/utils/data/links'
import Link from 'next/link'
import React from 'react'
import style from './styles/navbar.module.sass'
import Logo from './Logo'
import { useMenu, useScrollHeader } from '@/utils/hooks/scrollListener'
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
type ProgressbarProps = {
  target: React.RefObject<HTMLElement>;
};
const Navbar = ({target}:ProgressbarProps) => {
  const {menu, setMenu} = useMenu()
  const {scroll,pathName} = useScrollHeader(target)
  return (
    <header className={`${style.header} ${menu && style.activeMenu} ${pathName ==="/" || pathName ==="/flats" ? scroll && style.active: style.normal} `}>
      <Logo />
      <nav>
      <button onClick={()=>setMenu(false)} className={style.btnMenuClose}><CgClose color='#FFF' fontSize={22} /> </button>
        <ul>
          {LinksNavbar.map((link, index) => (
            <li onClick={()=>setMenu(false)} key={index} > <Link href={link.path}> {link.name} </Link> </li>
          ))}
        </ul>
      </nav>
      <button onClick={()=>setMenu(true)} className={`${style.btnMenu}  `}><FaBars color='#FFF' fontSize={22} /> </button>
    </header>
  )
}

export default Navbar