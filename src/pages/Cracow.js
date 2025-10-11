import React , {useState} from 'react'

import imgCra from '../img/cra.jpg'
import imgCra2 from '../img/cra2.jpg'
import imgCra3 from '../img/cra3.jpg'
import imgCra4 from '../img/cra4.jpg'

import mapAus from '../img/ausMap.png'

function Cracow() {
  let [picture , setPicture] = useState(imgCra);

    window.scrollTo(0,0)


  const images = [
    {
      img:imgCra
    } ,

    {
      img:imgCra2
    } ,

    {
      img:imgCra3
    } ,

    {
      img:imgCra4
    } ,

  ]


  return (
    <div className='tour-container'>
      <div className='tour-header'>
        <h1>Cracow</h1>
      </div>
      <div className='tour-main'>


        <div className='tour-img'>
          
         <img src={picture} alt='cracow'></img>
        </div>
       
        <div className='tour-info'>
          <p>Krakow is one of the most beautiful cities in Europe. It’s Poland’s second largest city and former capital. What can you see here? The most popular places in Cracow: Wawel - a limestone hill in the center of Krakow upon the Vistula River with a complex of impressive historical monuments of unique historical and artistic values. This extraordinary sanctuary determines the Poles’ identity, is their national and cultural symbol. Wawel used to be the seat of Polish rulers, their necropolis and place where the Polish history took shape. To the north of the old town are Florian’s Gate and the Barbican. These buildings are from the 14th and 15th centuries that made up part of Krakow’s city walls, designed to protect against enemy invaders. Oskar Schindler’s factory – the one that Liam Neeson’s Schindler’s List movie was about – is now a museum open to the public, and provides an interesting glance into life in Krakow during the Second World War. And this is just the beginning of a great tourist adventure!


We offer private transport and assistance at destination. Our driver will help you to buy the tickets and find the most attractive places. This tour has no time limit, you decide how much time you want to spend on touring. The prize includes transport and the wait. It does not include the entrances fees.
          </p>
        </div>
        <div className='tour-rate'>
          <h3>Client Rate :</h3>
          <p className='rate'> 8.9</p>
          <p className='opinion'>Opinion</p>
          <p className='opinion-text'> 'Cracow is a vibrant city rich in history, beautiful architecture, and cultural heritage, offering visitors a unique and enchanting experience.'</p>
          <a href="https://www.google.com/maps/place/Krak%C3%B3w/@50.0470038,19.8399839,11z/data=!3m1!4b1!4m6!3m5!1s0x471644c0354e18d1:0xb46bb6b576478abf!8m2!3d50.0646501!4d19.9449799!16zL20vMDQ5MXk?entry=ttu">
                      <p>SEE MAP</p>

          <img src={mapAus} className='map'></img></a>
        </div>
      </div>



      <div className='img'>
      {images.map( (item,index) => {
        return(
         
            <img src={item.img} key={index} alt='cracow'  onClick={ () => setPicture(item.img)}></img>
        
        )
      })}
      </div>
    </div>
  )
}
export default Cracow