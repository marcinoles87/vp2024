import React , {useState} from 'react'


import zakImg from '../img/zakImg5.jpg'
import zakImg2 from '../img/zakImg2.jpg'
import zakImg3 from '../img/zakImg3.jpg'
import zakImg4 from '../img/zakImg4.jpg'
import ausMap from '../img/ausMap.png'

function Zakopane() {

    
  let [picture , setPicture] = useState(zakImg);

  const images = [
    {
      img:zakImg
    } ,

    {
      img:zakImg2
    } ,

    {
      img:zakImg3
    } ,

    {
      img:zakImg4
    } ,

  ]


  return (
    <div className='tour-container'>
      <div className='tour-header'>
        <h1>Zakopane</h1>
      </div>
      <div className='tour-main'>


        <div className='tour-img'>
          
         <img src={picture} alt='wieliczka'></img>
        </div>
       
        <div className='tour-info'>
          <p>
          The most attractive summer and winter resort in Polish mountains. In the summer you can spend days walking in the mountains enjoying the breathtaking views. In the summer you won’t be bored thanks to winter activities like skiing or snowboarding. at any time of the year you can walk along the most popular street of the Polish mountains - Krupówki. You can buy souvenirs there, sit in a real highlander's eatery or eat delicious grilled oscypek cheese with cranberry.



We offer private transport and assistance at destination. The drive from Krakow takes about 2 hours. Our driver will help you to buy the tickets and find the most attractive places. This tour has no time limit, you decide how much time you want to spend on touring. The prize includes transport and the wait. It does not include the entrances fees.
          </p>
        </div>

        <div className='tour-rate'>
        <h3>Client Rate :</h3>
        <p className='rate'> 9.2</p>
        <p className='opinion'>Opinion</p>
        <p>" Piękne widoki , natura , przyroda , cisza i spokój ! Love Zakopane"</p>
        <a href="https://www.bing.com/search?pglt=2211&q=auschwitz+mapa&cvid=bc9a2a957eef435e88260c5963655a9d&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQNIBCDY2MzNqMGoxqAIAsAIA&FORM=ANSPA1&PC=HCTS"><img src={ausMap} className='map'></img></a>
      </div>
      </div>



      <div className='img'>
      {images.map( (item,index) => {
        return(
         
            <img src={item.img} key={index} alt='zakopane'  onClick={ () => setPicture(item.img)}></img>
        
        )
      })}
      </div>
    </div>

  )
}

export default Zakopane