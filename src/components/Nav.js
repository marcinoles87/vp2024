import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/logoNew.png'

function Nav() {
  return (
    <div className='nav-container'>
     

        <div className='nav-logo'>
          <img src={logo} alt='vip-logo'></img>
      </div>

      <div className='nav-list'>
        <ul className='nav-elements'>
         
          <li><a href='#about'className='link'>About us</a></li>
          <li><a href='#tours'className='link'>Tours</a></li>
          <li><Link to={'/price'} className='link'>Price</Link></li>
          {/* <li><Link to={'/formcontact'} className='link'>Email</Link></li> */}
          <li><a href='#contact' className='link'>Transfer</a></li>
          <li><a href='#contact' className='link'>Contact</a></li>
        </ul>
      </div>
      </div>
      
    
  )
}

export default Nav