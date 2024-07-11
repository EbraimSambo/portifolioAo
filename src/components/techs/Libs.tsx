import { Images } from '@/utils/data/links'
import React from 'react'
import style from './tech.module.sass'
import Image from 'next/image'

const Libs = () => {
  return (
    <section className={style.techs}>
      <h2>Bibliotecas</h2>
      <ul>
        {Images.filter((techs) =>
          techs.type != "language"
          && techs.type != "platform"
          && techs.type != "framework"
          && techs.type != "superset"
          && techs.type != "orm"
          && techs.type != "basic"
        ).map((tech, index) => (
            <li key={index}>
              <div className={style.cover}>
                <Image src={tech.src} fill priority alt={tech.tech} />
              </div>
              <h1> {tech.tech} </h1>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default Libs