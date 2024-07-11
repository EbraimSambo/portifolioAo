import Image from 'next/image'
import React from 'react'
import style from './flats.module.sass'

const BannerFlats = () => {
    return (
        <section className={style.banner}>
            <div className={style.cover}>
                <Image src={"/images/bg-1.jpg"} fill priority alt='banner' />
            </div>
            <div className={style.desc}>
                <div className={style.content}>
                    <h1>Nossos Planos</h1>
                    <p>Aproveite os nossoas planos que servem para cada situação financeira do seu negócio</p>
                </div>
            </div>
        </section>
    )
}

export default BannerFlats