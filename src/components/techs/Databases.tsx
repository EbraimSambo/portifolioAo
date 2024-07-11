import { Images } from '@/utils/data/links'
import React from 'react'
import style from './tech.module.sass'
import Image from 'next/image'

const Databases = () => {
  return (
    <section className={style.techs}>
      <h2>Bancos de Dados</h2>
      <ul>
        {Images.filter((techs) =>
          techs.type != "language"
          && techs.type != "lib"
          && techs.type != "framework"
          && techs.type != "superset"
          && techs.type != "platform"
          && techs.type != "basic"
        ).map((tech, index) => (
            <li key={index}>
              <div className={style.cover}>
                <Image src={tech.src} fill priority alt={tech.tech} />
              </div>
              <h3> {tech.tech} </h3>
            </li>
          ))}
          <div className={style.border}></div>
      </ul>
    </section>
  )
}

export default Databases