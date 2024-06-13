import { ServicesData } from '@/utils/data/links'
import React from 'react'
import style from './style.module.sass'
import Image from 'next/image'

const Services = () => {
  return (
    <ul className={style.services}>
        {ServicesData.map((service, index)=>(
            <li key={index}>
                <div className={style.figure}>
                    <Image src={service.figure} fill alt={service.service} />
                </div>
                <h2> {service.service} </h2>
                <p> {service.body} </p>
            </li>
        ))}
    </ul>
  )
}

export default Services