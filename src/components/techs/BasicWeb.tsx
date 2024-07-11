import { Images } from '@/utils/data/links'
import React from 'react'
import style from './tech.module.sass'
import Image from 'next/image'

const BasicWeb = () => {
  return (
    <section style={{marginTop: "6rem"}} className={style.techs}>
      <h2>Basíco da Web</h2>
      <ul>
        {Images.filter((techs) =>
          techs.type != "framework"
          && techs.type != "lib"
          && techs.type != "platform"
          && techs.type != "superset"
          && techs.type != "orm"
          && techs.type != "language"
        ).map((tech, index)=>(
          <li key={index}>
            {tech.type != "framework" && tech.type != "platform" && tech.type != "lib" && tech.type != "orm"  &&(
              <>
              <div className={style.cover}>
                 <Image src={tech.src} fill priority alt={tech.tech} />
              </div>
              <h1> {tech.tech} </h1>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BasicWeb