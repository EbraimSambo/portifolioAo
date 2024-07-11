import { Images } from '@/utils/data/links'
import React from 'react'
import style from './tech.module.sass'
import Image from 'next/image'

const BasicWeb = () => {
  return (
    <section className={style.techs}>
      <h2>Basícos da Web</h2>
      <ul>
        {Images.filter((techs) =>
          techs.type != "platform"
          && techs.type != "framework"
          && techs.type != "superset"
          && techs.type != "orm"
          && techs.type != "lib"
          && techs.tech != "PHP"
          && techs.tech != "Python"
          && techs.tech != "Ruby"
          && techs.tech != "C#"
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

export default BasicWeb