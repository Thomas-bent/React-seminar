import React from 'react'
import { useParams } from 'react-router-dom'
import Style from './GesamtBeitrag.module.css'
import beitraegeContainer from './beitragContainer.json'
import { Cybersecurity } from './artikel_md/cybersecurity'
import { Gamedev } from './artikel_md/gamedev'
import { Sniper } from './artikel_md/sniper'
import { Entlastungspaket } from './artikel_md/entlastungspaket'

export const GesamtBeitrag = () => {

    const { id } = useParams();
    const object = beitraegeContainer[id];

    let element = NaN

    switch(parseInt(id)) {
      case 0: element = <Cybersecurity />; break;
      case 1: element = <Gamedev />; break;
      case 2: element = <Sniper />; break;
      case 3: element = <Entlastungspaket />; break;
      default: element = NaN;
    }

  return (
    <div className={ Style.main_container }>
        <div className={Style.inner_container}>
        <h1>{ object.name }</h1>
        <br />
          <div className={ Style.text }>
            {element}
          </div>
        <br />
        <p className={ Style.autor }>Autor: { object.autor }</p>
        </div>
    </div>
  )
}
