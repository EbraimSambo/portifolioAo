import { Images } from '@/utils/data/links'
import React from 'react'
import style from './tech.module.sass'
import Image from 'next/image'

const BasicWeb = () => {
  return (
    <section style={{marginTop: "9rem"}} className={style.techs}>
      <h2>Basícos da Web</h2>
      <ul>
        {Images.filter((techs) =>
          techs.type != "framework"
          && techs.type != "superset"
          && techs.type != "orm"
          && techs.type != "lib"
          && techs.tech != "PHP"
          && techs.tech != "Python"
          && techs.tech != "Ruby"
          && techs.tech != "C#"
          && techs.tech != "Go"
          && techs.tech != "Docker"
          && techs.tech != "Photoshop"
          && techs.tech != "Azure"
          && techs.tech != "AWS"
          && techs.tech != "Figma"
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