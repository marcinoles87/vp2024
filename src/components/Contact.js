import React from 'react'

import tripLogo from '../img/tripadvisor.png'
import facebookLogo from '../img/facebookLogo.png'
import creditCard from '../img/creditcard.png'

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-left'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente magnam, labore, maiores possimus, illum ipsam tenetur sequi accusantium similique nostrum cupiditate eaque ducimus. Distinctio aliquam alias officia dolore veniam!
       Sapiente, corrupti laudantium quos obcaecati quo expedita fugit labore ab voluptatibus magni dignissimos doloribus? Dolorum, natus! Rem nesciunt minus omnis eligendi sequi, repellendus possimus dicta vel, ab, perspiciatis incidunt maxime.
       Odio eaque quisquam quae non! Quia, facilis distinctio. Optio debitis illo est quidem perspiciatis deleniti expedita dolores alias non voluptates sequi, enim cumque laboriosam numquam quas repellat dolor magni praesentium.
       Est dicta necessitatibus omnis dolorum excepturi tenetur odio, ipsa molestias illo qui at cupiditate autem eum, corporis mollitia possimus aperiam cum distinctio? Ipsa saepe, quasi culpa doloremque dignissimos enim ab.
      
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
        <img src={creditCard} alt="credit-card"></img>

       </div>
    </div>
  )
}

export default Contact