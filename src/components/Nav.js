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
         
          <li><a href='#about'>About us</a></li>
          <li><a href='#tours'>Tours</a></li>
          <li><Link to={'/price'} className='link'>Price</Link>
          </li>
          <li><a href='#contact'>Transfer</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      </div>
      
    
  )
}

export default Nav