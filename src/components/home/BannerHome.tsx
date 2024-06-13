import React from 'react'
import style from './style.module.sass'
import { TextBanner } from '@/utils/data/texts'
import Button from '../base/Button'
const BannerHome = () => {
    return (
        <div className={style.banner}>
            <div className={style.content}>
                <h1>WebTech</h1>
                <p> {TextBanner} </p>
                <Button color='secondary'>Explorar</Button>
            </div>
        </div>
    )
}

export default BannerHome