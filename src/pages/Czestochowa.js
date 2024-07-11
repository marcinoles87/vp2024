import React , {useState} from 'react'

import czeImg from '../img/czeImg.jpg'
import czeImg2 from '../img/czeImg2.jpg'
import czeImg3 from '../img/czeImg3.jpg'
import czeImg4 from '../img/czeImg4.jpg'
import czeImg5 from '../img/czeImg5.jpg'

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
          <p>The Ważyn Chamber was named after the name of the administrator (podżupek) Andrzej Ważyński. The deepness of this chamber, the biggest in Bochnia Salt Mine, is 248m, its length - 255m, its maximum width 14,4m and maximum height 7,2m. The chamber uses no supporting pillars. Salt from Ważyn chamber was extracted from 1697 until the 1950s. For the purposes of creating a sanatorium these old pits were expanded with the LHD unit machine (a loading-hauling-dumping machine). These works took place until 1984, and thanks to them the Ernest Chute from the 17th century so impressively presents itself on the stripped chamber's roof. The Ważyn chamber has a specific microclimate, with a constant temperature between 14–16 °C (57–61 °F), high humidity (about 70%) and favourable ionisation of the air - saturated, at the same time, by sodium chloride and valuable microelements, like: magnesium, manganese and calcium. The air in the chamber destinguishes itself by its purity. The chamber is equipped with beds, up to 300 people can sleep in here. The other parts of Ważyn Chamber are: fields for playing volleyball, basketball and handball, restaurant and conference facilities.
          </p>
        </div>

        <div className='tour-rate'>
        <h3>Client Rate :</h3>
        <p className='rate'> 8.9</p>
        <p className='opinion'>Opinion</p>
        <p>" Super miejsce , bardzo orginalne i dobrze zachowane . Warto zwiedzać o każdej porze roku"</p>
        <a href="https://www.bing.com/search?pglt=2211&q=auschwitz+mapa&cvid=bc9a2a957eef435e88260c5963655a9d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQNIBCDY2MzNqMGoxqAIAsAIA&FORM=ANSPA1&PC=HCTS"><img src={czeImg5} className='map'></img></a>
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