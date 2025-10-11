import React, { useState } from 'react'

import imgAus from '../img/aus.jpg'
import imgAus2 from '../img/aus2.jpg'
import imgAus3 from '../img/aus3.jpg'
import imgAus4 from '../img/aus4.jpg'
import imgAus5 from '../img/aus2024_1 (4).jpeg'
import imgAus6 from '../img/aus2024_1 (1).jpeg'
import imgAus7 from '../img/aus2024_1 (2).jpeg'
import imgAus8 from '../img/aus2024_1 (3).jpeg'
import imgAus9 from '../img/aus2024_1 (6).jpeg'

import mapAus from '../img/ausMap.png'

function Auschwitz() {

  let [picture , setPicture] = useState(imgAus);

  window.scrollTo(0,0)

  const handleHover = () =>{
    const elementHover = document.querySelector('.map');
    elementHover.classList.add('hover-mode')
  }

  const images = [
    {
      img:imgAus
    } ,

    {
      img:imgAus2
    } ,

    {
      img:imgAus3
    } ,

    {
      img:imgAus4
    } ,

    {
      img:imgAus5
    } ,

    {
      img:imgAus6
    } ,

    {
      img:imgAus7
    } ,

    {
      img:imgAus8
    } ,
    {
      img:imgAus9
    } ,

  ]


  return (
    <div className='tour-container'>
      <div className='tour-header'>
        <h1>Auschwitz</h1>
      </div>
      <div className='tour-main'>


        <div className='tour-img'>
          
         <img src={picture} alt='auschwitz'></img>
        </div>
       
        <div className='tour-info'>
            <p>Concentracion and exterminatnion camp Auschwitz - Birkenau was the place of torment of almost 1,5 milion people , mostly Jewish , Polish and Gypsy . This is the place where we bow and pay our respect to all those who were killed by the Nazis. Auschwitz-Birkenau is the symbol of doom and the only concetracion camp on the UNESCO World Heritage list
            We offer private transport and assistance at destination. The drive from Krakow takes 80 minutes. Our driver will help you to buy the tickets and find a guide. This tour usually takes about 6 hours (including the drive), but taking into consideration the seriousness of this place, you decide how much time you want to spend on touring. The prize includes transport, the wait, tolls, parking fee. It does not include the entrance free.
          </p>
        </div>

        <div className='tour-rate'>
          <h3>Client Rate :</h3>
          <p className='rate'> 8.9</p>
          <p className='opinion'>Opinion</p>
          <p>"A strong experience, an interesting place, worth getting to know for everyone of all ages"</p>
          <div>

            <p className='hover-mode'></p>
            <a onMouseEnter={handleHover} href="https://www.google.com/maps/place/Miejsce+Pami%C4%99ci+i+Muzeum+Auschwitz+II-Birkenau/@50.0378407,19.1712661,17z/data=!3m1!4b1!4m6!3m5!1s0x47169585b5872e05:0xf380c2159aa1d6a7!8m2!3d50.0378407!4d19.173841!16s%2Fg%2F121jcf5m?entry=ttu"><img src={mapAus} className='map'></img></a>

          </div>
        </div>
      </div>



      <div className='img'>
      {images.map( (item,index) => {
        return(
         
            <img src={item.img} key={index} alt='auschwitz'  onClick={ () => setPicture(item.img)}></img>
        
        )
      })}
      </div>
    </div>
  )
}

export default Auschwitz