import React, { useState } from 'react'

import imgAus from '../img/aus.jpg'
import imgAus2 from '../img/aus2.jpg'
import imgAus3 from '../img/aus3.jpg'
import imgAus4 from '../img/aus4.jpg'

function Auschwitz() {

  let [picture , setPicture] = useState(imgAus);

  

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
          <p><span style={{backgroundColor:'lightBlue'}}> 8.9</span></p>
          <p>Opinion</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, necessitatibus? Itaque amet quasi omnis vitae consequuntur repellendus quos sit, minus modi exercitationem delectus, eveniet minima, vero velit vel ea? Obcaecati?</p>
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