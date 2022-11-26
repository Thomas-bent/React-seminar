import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Header.module.css' 

export const Header = () => {
  return (
    <div className={ Style.navbar_container }>
        <div className="logo">
            asdfasd
        </div>
        <ul className={ Style.navbar_list }>
          <li className={ Style.topic }><Link to="/"><p className={ Style.directlinks }>Beiträge</p></Link></li>
          <li className={ Style.nav_spacer }>|</li>
          <li className={ Style.topic }><Link to="/">Backstage</Link></li>
          <li className={ Style.nav_spacer }>|</li>
          <li className={ Style.topic }><Link to="/">Über Uns</Link></li>
        </ul>
    </div>
  )
}
