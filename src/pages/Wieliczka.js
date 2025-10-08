import React , {useState} from 'react'

import wieImg from '../img/wieliczka.jpg'
import wieImg3 from '../img/wie3.jpg'
import wieImg4 from '../img/wie4.jpg'
import wieImg5 from '../img/saltmine2024 (1).jpeg'
import wieImg6 from '../img/saltmine2024 (2).jpeg'
import wieImg7 from '../img/saltmine2024 (3).jpeg'
import wieImg8 from '../img/saltmine2024 (4).jpeg'

import mapAus from '../img/ausMap.png'

function Wieliczka() {
  
    let [picture , setPicture] = useState(wieImg5);

    window.scrollTo(0,0)


    const images = [
      {
        img:wieImg
      } ,
  
     
  
      {
        img:wieImg3
      } ,
  
      {
        img:wieImg4
      } ,

      {
        img:wieImg5
      } ,

      {
        img:wieImg6
      } ,

      {
        img:wieImg7
      } ,

      {
        img:wieImg8
      } ,
  
    ]
  
  
    return (
      <div className='tour-container'>
        <div className='tour-header'>
          <h1>Wieliczka</h1>
        </div>
        <div className='tour-main'>
  
  
          <div className='tour-img'>
            
           <img src={picture} alt='wieliczka'></img>
          </div>
         
          <div className='tour-info'>
            <p>The Ważyn Chamber was named after the name of the administrator (podżupek) Andrzej Ważyński. The deepness of this chamber, the biggest in Bochnia Salt Mine, is 248m, its length - 255m, its maximum width 14,4m and maximum height 7,2m. The chamber uses no supporting pillars. Salt from Ważyn chamber was extracted from 1697 until the 1950s. For the purposes of creating a sanatorium these old pits were expanded with the LHD unit machine (a loading-hauling-dumping machine). These works took place until 1984, and thanks to them the Ernest Chute from the 17th century so impressively presents itself on the stripped chamber's roof. The Ważyn chamber has a specific microclimate, with a constant temperature between 14–16 °C (57–61 °F), high humidity (about 70%) and favourable ionisation of the air - saturated, at the same time, by sodium chloride and valuable microelements, like: magnesium, manganese and calcium. The air in the chamber destinguishes itself by its purity. The chamber is equipped with beds, up to 300 people can sleep in here. The other parts of Ważyn Chamber are: fields for playing volleyball, basketball and handball, restaurant and conference facilities.
            </p>
          </div>

          <div className='tour-rate'>
          <h3>Client Rate :</h3>
          <p className='rate'> 8.9</p>
          <p className='opinion'>Opinion</p>
          <p>"A trip to the Wieliczka Salt Mine is a captivating journey through stunning underground sculptures and rich history, making every moment in this magical place an unforgettable adventure."</p>
          <a href="https://www.google.com/maps/place/Kopalnia+Soli+%E2%80%9EWieliczka%E2%80%9D/@49.9839933,20.0504721,17z/data=!3m1!4b1!4m6!3m5!1s0x471643d805818e4b:0x972549aefd93b415!8m2!3d49.9839899!4d20.053047!16zL20vMGRxczU0?entry=ttu"><img src={mapAus} className='map'></img></a>
        </div>
        </div>
  
  
  
        <div className='img'>
        {images.map( (item,index) => {
          return(
           
              <img src={item.img} key={index} alt='wieliczka'  onClick={ () => setPicture(item.img)}></img>
          
          )
        })}
        </div>
      </div>
  )
}

export default Wieliczka