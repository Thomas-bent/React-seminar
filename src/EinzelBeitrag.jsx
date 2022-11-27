import React from 'react'
import { Link } from 'react-router-dom'
import Style from './EinzelBeitraege.module.css'

export const EinzelBeitrag = (props) => {
  return (
    <div className={ Style.video_container }>
        <h2>{ props.objekt.name }</h2>
        <br />
        <p className={Style.video_beschreibung}>{ props.objekt.beschreibung }</p>
        <br />
        <Link to={ "/lesen/" + props.objekt.id }><button className={ Style.artikel_button }>Ganzer Artikel</button></Link>
    </div>
  )
}
