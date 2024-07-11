import { Images } from '@/utils/data/links'
import React from 'react'
import style from './tech.module.sass'
import Image from 'next/image'

const Languages = () => {
  return (
    <section className={style.techs}>
      <h2>Linguagens de Programação</h2>
      <ul>
        {Images.filter((techs) =>
          techs.type != "framework"
          && techs.type != "lib"
          && techs.type != "platform"
          && techs.tech != "Sass"
          && techs.type != "orm"
          && techs.type != "basic"
          && techs.type != "database"
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

export default Languages