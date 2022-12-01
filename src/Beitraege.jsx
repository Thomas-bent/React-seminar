import React from 'react'
import beitraegeContainer from './beitragContainer.json'
import Style from './Beitraege.module.css'
import {EinzelBeitrag} from './EinzelBeitrag'

export const Beitraege = () => {

  const beitraege = beitraegeContainer.map((bt) =>  <EinzelBeitrag objekt={ bt }/>);

  return (
    <div className={ Style.container }>
      {beitraege}
    </div>
  )
}
