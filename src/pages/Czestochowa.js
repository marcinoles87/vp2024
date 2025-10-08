import React , {useState} from 'react'

import czeImg from '../img/czeImg.jpg'
import czeImg2 from '../img/czeImg2.jpg'
import czeImg3 from '../img/czeImg3.jpg'
import czeImg4 from '../img/czeImg4.jpg'
import czeImg5 from '../img/czeImg5.jpg'
import czeImg6 from '../img/czesto2024 (1).jpeg'
import czeImg7 from '../img/czesto2024 (2).jpeg'
import czeImg8 from '../img/czesto2024 (3).jpeg'
import czeImg9 from '../img/czesto2024 (4).jpeg'
import ausMap from '../img/ausMap.png'

function Czestochowa() {

  let [picture , setPicture] = useState(czeImg3);

    window.scrollTo(0,0)


  const images = [
    {
      img:czeImg
    } ,

    {
      img:czeImg2
    } ,

    {
      img:czeImg3
    } ,

    {
      img:czeImg4
    } ,

    {
      img:czeImg5
    } ,

    {
      img:czeImg6
    } ,

    {
      img:czeImg7
    } ,

    {
      img:czeImg8
    } ,

  ]


  return (
    <div className='tour-container'>
      <div className='tour-header'>
        <h1>Czestochowa</h1>
      </div>
      <div className='tour-main'>


        <div className='tour-img'>
          
         <img src={picture} alt='wieliczka'></img>
        </div>
       
        <div className='tour-info'>
          <p>
          Czestochowa lies among the picturesque rocks of the Cracow-Czestochowa Upland, crowned with the ruins of medieval castles. Czestochowa is mainly associated with the Jasna Góra monastery and the icon of the Black Madonna, attributed to many miracles. The sanctuary is known as one of the largest pilgrimage sites in the world, but its impressive architecture also attracts many tourists. The Czestochowa Sanctuary is also an outstanding architectural monument of the 15th century, with later Renaissance and Baroque transformations. The number of pilgrims and tourists coming to the city is 5 million per year.
We offer private transport and assistance at destination. The drive from Krakow takes about 2 hours. Our driver will help you to buy the tickets and find the most attractive places. This tour has no time limit, you decide how much time you want to spend on touring. The prize includes transport and the wait. It does not include the entrances fees.
          </p>
        </div>

        <div className='tour-rate'>
        <h3>Client Rate :</h3>
        <p className='rate'> 7.8</p>
        <p className='opinion'>Opinion</p>
        <p>" Super miejsce , bardzo orginalne i dobrze zachowane . Warto zwiedzać o każdej porze roku"</p>
        <a href="https://www.google.com/maps/place/Cz%C4%99stochowa/@50.8097375,18.9574112,11z/data=!3m1!4b1!4m6!3m5!1s0x4710b5c54e2ca8af:0x854f0d4d1a178236!8m2!3d50.8118195!4d19.1203094!16zL20vMGp3X3A?entry=ttu"><img src={ausMap} className='map'></img></a>
      </div>
      </div>



      <div className='img'>
      {images.map( (item,index) => {
        return(
         
            <img src={item.img} key={index} alt='czestochowa'  onClick={ () => setPicture(item.img)}></img>
        
        )
      })}
      </div>
    </div>
  )
}

export default Czestochowa