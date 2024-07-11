import { ServicesData } from '@/utils/data/links'
import React from 'react'
import style from './style.module.sass'
import Image from 'next/image'

const Services = () => {
  return (
    <section className={style.services}>
      <h2>Nossos Serviços</h2>
        <ul>
        {ServicesData.map((service, index)=>(
            <li key={index}>
                <div className={style.figure}>
                    <Image src={service.figure} fill alt={service.service} />
                </div>
                <h3> {service.service} </h3>
                <p> {service.body} </p>
            </li>
        ))}
    </ul>  
    </section>

  )
}

export default Services