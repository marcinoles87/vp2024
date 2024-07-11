import React , {useState} from 'react'

import czeImg from '../img/czeImg.jpg'
import czeImg2 from '../img/czeImg2.jpg'
import czeImg3 from '../img/czeImg3.jpg'
import czeImg4 from '../img/czeImg4.jpg'
import czeImg5 from '../img/czeImg5.jpg'
import ausMap from '../img/ausMap.png'

function Czestochowa() {

  let [picture , setPicture] = useState(czeImg);

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
        <a href="https://www.bing.com/search?pglt=2211&q=auschwitz+mapa&cvid=bc9a2a957eef435e88260c5963655a9d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQNIBCDY2MzNqMGoxqAIAsAIA&FORM=ANSPA1&PC=HCTS"><img src={ausMap} className='map'></img></a>
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