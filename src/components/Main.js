import React from 'react'
import CountUp from 'react-countup';

import mainImg from '../img/mainlogo.jpg'

function Main() {
  return (
    <div className='main-container'>
      <div className='main-items'>

        <div className='main-item'>
          <i class="fa-regular fa-thumbs-up new"></i>
          <h3>Teskt</h3>
          <p>Licencjonowani przewodnicy po Krakowie zapraszają na zwiedzanie Krakowa. Niezwykłe historie o naszym ukochanym mieście opowiadamy w 8 językach. Szukasz przewodników, którzy potrafią połączyć pasję, entuzjazm i perfekcyjne przygotowanie? Trafiłeś na właściwych ludzi!</p>
        </div>

        <div className='main-item'>
          <i class="fa-regular fa-thumbs-up new"></i>
          <h3>Teskt</h3>
          <p>Licencjonowani przewodnicy po Krakowie zapraszają na zwiedzanie Krakowa. Niezwykłe historie o naszym ukochanym mieście opowiadamy w 8 językach. Szukasz przewodników, którzy potrafią połączyć pasję, entuzjazm i perfekcyjne przygotowanie? Trafiłeś na właściwych ludzi!</p>
        </div>

        <div className='main-item'>
          <i class="fa-regular fa-thumbs-up new"></i>
          <h3>Teskt</h3>
          <p>Licencjonowani przewodnicy po Krakowie zapraszają na zwiedzanie Krakowa. Niezwykłe historie o naszym ukochanym mieście opowiadamy w 8 językach. Szukasz przewodników, którzy potrafią połączyć pasję, entuzjazm i perfekcyjne przygotowanie? Trafiłeś na właściwych ludzi!</p>
        </div>

       

      </div>

        
      <div className='main-count'>
        <CountUp start={0} end={200} duration={5}></CountUp>
        <CountUp start={0} end={200} duration={5}></CountUp>
        <CountUp start={0} end={200} duration={5}></CountUp>
      </div>

      <div className='main-about'>
        <div className='main-img'>
          <img src={mainImg} alt='main-img'></img>
        </div>
            <p>Our company specializes in organizing private and group trips from Krakow to the most interesting places in the south of Poland. We have extensive expertise in the tourism industry. We have all required licenses and certificates. Our drivers are English-speaking. We offer airport transfer and intercity transport. We invite to cooperation individual customers as well as companies, hotels, travel agencies.</p>
      </div>

    
    </div>

  )
}

export default Main