import React from 'react'

import tripLogo from '../img/tripadvisor.png'
import facebookLogo from '../img/facebookLogo.png'
import creditCard from '../img/creditcard.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='contact-container' id='contact'>
      <div className='contact-left'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente magnam, labore, maiores possimus, illum ipsam tenetur sequi accusantium similique nostrum cupiditate eaque ducimus. Distinctio aliquam alias officia dolore veniam!
       Sapiente, corrupti laudantium quos obcaecati quo expedita fugit labore ab voluptatibus magni dignissimos doloribus? Dolorum, natus! Rem nesciunt minus omnis eligendi sequi, repellendus possimus dicta vel, ab, perspiciatis incidunt maxime.
      
      </div>

      <div className='contact-right'>
        <a href="#tours"><h2>Tours</h2></a>
        
        <h2><Link to={'/price'}>Price</Link></h2>
        <h2>Tickets</h2>
      
        
    
      </div>

      <div className='contact-right'>
        <a href='https://www.facebook.com/people/Viptourcracow-CracowAuchswitzWieliczka-Salt-Mine/100041922716636/'>
         <img src={facebookLogo} alt='trip-advisor'></img> 
        </a>
      
        <a href="https://www.tripadvisor.com/Attraction_Review-g274772-d7734909-Reviews-VIP_TOUR_CRACOW-Krakow_Lesser_Poland_Province_Southern_Poland.html">
          <img src={tripLogo} alt='facebook-logo'></img>
        </a>
        
      </div>

       <div className='contact-right'>
        <h3>We accept all credit card</h3>
        <img src={creditCard} alt="credit-card"></img>

       </div>
    </div>
  )
}

export default Contact