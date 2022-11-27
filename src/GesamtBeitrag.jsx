import React from 'react'
import { useParams } from 'react-router-dom'
import Style from './GesamtBeitrag.module.css'
import beitraegeContainer from './beitragContainer.json'

export const GesamtBeitrag = () => {

    const { id } = useParams();
    const object = beitraegeContainer[id];

  return (
    <div className={ Style.main_container }>
        <h1>{ object.name }</h1>
        <br />
        <p>{ object.inhalt }</p>
        <br />
        <p>{ object.autor }</p>
    </div>
  )
}
