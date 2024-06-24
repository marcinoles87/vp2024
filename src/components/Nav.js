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
          <li>About Us</li>
          <li>Tours</li>
          <li>Price</li>
          <li>Transfer</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
      
    
  )
}

export default Nav