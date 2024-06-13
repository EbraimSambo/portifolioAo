import React from 'react'
import PartialBlue from '../containers/PartialBlue'
import Link from 'next/link'
import style from './styles/footer.module.sass'

const Footer = () => {
  return (
    <PartialBlue>
        <footer className={style.footer}>
            <ul>
                <li>
                    <Link href={"/"}>Footer</Link>
                </li>
            </ul>
        </footer>
    </PartialBlue>
  )
}

export default Footer