import React from 'react'
import Style from './About.module.css'

export const About = () => {
  return (
          <div className={ Style.main_container }>
            <iframe className={ Style.video } width="1280" height="720" src="https://www.youtube-nocookie.com/embed/M44xgfhPAYw" title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              
          </div>
  )
}
