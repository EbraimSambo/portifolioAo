import React from 'react'
import PartialBlue from '../containers/PartialBlue'
import Link from 'next/link'
import style from './styles/footer.module.sass'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <PartialBlue>
        <footer className={style.footer}>
            <ul>
                <li>
                    <Link target='_blank' href={"/"}>GitHub</Link>
                    <Link target='_blank' href={"/"}>Facebook</Link>
                    <Link target='_blank' href={"/"}>Gmail</Link>
                    <Link target='_blank' href={"/"}>Linkdin</Link>
                </li>
            </ul>
            <p>&copy; WEB.AO desde 2023 - {currentYear} </p>
        </footer>
    </PartialBlue>
  )
}

export default Footer