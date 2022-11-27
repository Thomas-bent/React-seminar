import React from 'react'
import beitraegeContainer from './beitragContainer.json'
import Style from './Beitraege.module.css'
import {EinzelBeitrag} from './EinzelBeitrag'

export const Beitraege = () => {
  return (
    <div className={ Style.container }>
      <EinzelBeitrag name={ beitraegeContainer[0].name } beschreibung={ beitraegeContainer[0].beschreibung } />
    </div>
  )
}
