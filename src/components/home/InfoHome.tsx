import React from 'react'
import style from './style.module.sass'
import Image from 'next/image'
import { TextInfoHome1 } from '@/utils/data/texts'

const InfoHome = () => {
    return (
        <section className={style.infoContainer}>
            <div className={style.content}>
                <div className={style.banner}>
                    <Image fill src="/images/server-1.jpg" alt='' />
                </div>
                <div className={style.text}>
                    <h2>Quem Somos?</h2>
                    <p> {TextInfoHome1}</p>
                </div>

            </div>
            <div className={style.content}>
                <div className={style.banner}>
                    <Image fill src="/images/dev-2.jpg" alt='' />
                </div>
                <div className={style.text}>
                    <h2>Tecnicos  qualificados</h2>
                    <p> O nosso time  de trabalho albergas tecnicos front-end, back-end, fullstack, engemheiros se hardwere e analitics science of data,
                        capazes de resolver os problemas iminentes relacionados a sistemas.</p>
                </div>

            </div>

        </section>
    )
}

export default InfoHome