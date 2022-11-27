import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Header.module.css' 

export const Header = () => {
  return (
    <div className={ Style.navbar_container }>
        <div className={ Style.logo }>
            <Link to='/'>laddsk</Link>
        </div>
        <ul className={ Style.navbar_list }>
          <li className={ Style.topic }><Link to="/beitraege"><p className={ Style.directlinks }>Beiträge</p></Link></li>
          <li className={ Style.nav_spacer }>|</li>
          <li className={ Style.topic }><Link to="/backstage"><p className={ Style.directlinks }>Backstage</p></Link></li>
          <li className={ Style.nav_spacer }>|</li>
          <li className={ Style.topic }><Link to="/about"><p className={ Style.directlinks }>Über Uns</p></Link></li>
        </ul>
    </div>
  )
}
