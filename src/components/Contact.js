import React from 'react'

import tripLogo from '../img/tripadvisor.png'
import facebookLogo from '../img/facebookLogo.png'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-left'>
        <h1>Contact</h1>
        <h2>Phone : 555-555-555</h2>
        <h2>Email :  viptourcracow@gmail.com</h2>
      
      </div>

      <div className='contact-right'>
        <h2>Tours</h2>
        <h2>Price</h2>
        <h2>Tickets</h2>
      
        
    
      </div>

      <div className='contact-right'>
      <img src={tripLogo} alt='trip-advisor'></img>
        
        <img src={facebookLogo} alt='facebook-logo'></img>
      </div>

       <div className='contact-right'>
        <h2>Payment</h2>
        <h3>We accept all credit card</h3>
       </div>
    </div>
  )
}

export default Contact