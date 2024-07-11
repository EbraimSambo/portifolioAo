import Image from 'next/image'
import React from 'react'
import style from './flats.module.sass'

const BannerFlats = () => {
    return (
        <section className={style.banner}>
            <div className={style.cover}>
                <Image src={"https://images.pexels.com/photos/7129690/pexels-photo-7129690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} fill priority alt='banner' />
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