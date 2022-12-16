import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Header.module.css'

export const Header = () => {
  return (
    <div className={ Style.navbar_container }>
        <div className={ Style.logo }>
            <Link to='/'>
              {
                //<embed width="20px" height="20px" src='./logo_neu.svg' className={ Style.logo_img } />#
              }
              <img src='logo_png.png' alt='logo' width='30px' height='30px'/>
            </Link>
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
