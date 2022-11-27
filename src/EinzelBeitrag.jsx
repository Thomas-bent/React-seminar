import React from 'react'
import Style from './EinzelBeitraege.module.css'

export const EinzelBeitrag = (props) => {
  return (
    <div className={ Style.container }>
        <h1>{ props.name }</h1>
        <p>{ props.beschreibung }</p>
    </div>
  )
}
