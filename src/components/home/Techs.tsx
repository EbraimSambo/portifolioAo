import { Images } from '@/utils/data/links'
import Image from 'next/image'
import React from 'react'
import style from './style.module.sass'
import { TextTech } from '@/utils/data/texts'
import Link from 'next/link'
const Techs = () => {
    return (
        <section className={style.techs}>
            <div>
                <h2>Algumas Das Ferramentas utilizadas</h2>
                <p> {TextTech} </p>
                <Link href={"/techs"} >Ver outras tecnologias</Link>
            </div>
            <ul className={style.icons}>
                {Images.map((tech, index) => (
                    <li key={index} title={tech.tech} >
                        <div className={style.cover}>
                            <Image src={tech.src} fill priority alt={tech.tech} />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Techs