import { Images } from '@/utils/data/links'
import Image from 'next/image'
import React from 'react'
import style from './style.module.sass'
import { TextTech } from '@/utils/data/texts'
const Techs = () => {
    return (
        <section className={style.techs}>
            <div>
                <h2>Algumas Das Ferramentas utilizadas</h2>
                <p> {TextTech} </p>
            </div>
            <ul className={style.icons}>
                {Images.map((tech, index) => (
                    <li key={index}>
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