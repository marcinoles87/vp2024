import React from 'react'

import ticket from '../img/ticket.jpg'

function Ticket() {
  return (
    <div className='ticket-container'>
        <div className='ticket header'>
            <div className='ticket-img'>
                <img src={ticket} alt='ticket'></img>
            </div>
            <div className='ticket-info'>
                <h1>MUSEUM , MOVIE , ATRACTION ?</h1>
                <h2>ALL FOR YOU</h2>
            </div>
        </div>

    </div>
  )
}

export default Ticket