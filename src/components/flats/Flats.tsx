import { FlatsData } from '@/utils/data/links'
import React from 'react'
import style from './flats.module.sass'
import { GoVerified } from 'react-icons/go'
import Button from '../base/Button'

const Flats = () => {
    return (
        <section className={style.flats}>
            <ul className={style.container}>
                {FlatsData.map((flat, index) => (
                    <li key={index}>
                        <div>
                            <h3> {flat.flat} </h3>
                            <h4> Para {flat.for} </h4>
                            <h5>
                                <span>{flat.price}</span>
                                <span>kz</span>
                            </h5>
                        </div>
                        <p> {flat.desc} </p>
                        <ul>
                            {flat.benefices.map((benefice, index) => (
                                <li key={index}> <GoVerified fontSize={18} /> <span>{benefice.benefice} </span> </li>
                            ))}
                        </ul>
                        <Button color='secondary' >Aderir</Button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Flats