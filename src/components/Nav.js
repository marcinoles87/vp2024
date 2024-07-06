import React from 'react'

import logo from '../img/logo.png'

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
          <li><a href='#contact'>Price</a></li>
          <li><a href='#contact'>Transfer</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      </div>
      
    
  )
}

export default Nav