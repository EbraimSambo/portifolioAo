import React from 'react'
import PartialBlue from '../containers/PartialBlue'
import Link from 'next/link'
import style from './styles/footer.module.sass'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <PartialBlue>
      <footer className={style.footer}>
        <div className="div">
          <ul>
            <li><Link target='_blank' href={"/"}> <FaGithub fontSize={20} /></Link></li>
            <li><Link target='_blank' href={"/"}><FaFacebook fontSize={20} /></Link></li>
            <li><Link target='_blank' href={"/"}> <GoMail fontSize={20} /> </Link></li>
            <li><Link target='_blank' href={"/"}> <FaLinkedin fontSize={20} /> </Link></li>
          </ul>
          <div className={style.border}></div>
        </div>
        <p>&copy; WEB.AO desde 2023 - {currentYear} </p>
      </footer>
    </PartialBlue>
  )
}

export default Footer