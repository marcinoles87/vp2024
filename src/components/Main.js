import React, { useState } from 'react'
import CountUp from 'react-countup';

import mainImg from '../img/mainlogo.jpg'

function Main() {

  const [ counter , setCounter] = useState(false)


  const startCounter = () => {

    console.log(window.scrollY)

    if(window.scrollY > 650){
      setCounter(true)
    } 
  }

  window.onscroll = startCounter

  return (
    <div className='main-container' id='about'>
      <div className='main-items'>

        <div className='main-item'>
          <i class="fa-regular fa-thumbs-up new fa-2xl"></i>
          <h3>Professional Care</h3>
          <p>Professional care for passengers involves ensuring safety, providing comfort, delivering timely assistance, addressing needs promptly, maintaining communication, and fostering a positive experience throughout their journey, prioritizing overall satisfaction and well-being.</p>
        </div>

        <div className='main-item'>
        <i class="fa-solid fa-medal new fa-2xl"></i>
          <h3>Quality driver</h3>
          <p>A quality driver prioritizes safety above all else. They adhere to traffic laws, respect speed limits, and are aware of their surroundings, making conscious decisions to protect themselves and others.</p>
        </div>

        <div className='main-item'>
        <i class="fa-solid fa-sack-dollar fa-2xl"></i>
          <h3>Price</h3>
          <p>Ultimately, finding the best price depends on a variety of factors. By analyzing costs, understanding the market and providing added value, our company will always find the best solution for you. By combining rides with each other, buying tickets in a package, you will get the best offer on the market.</p>
        </div>

      </div>

        {counter ? 
          <div className='main-count'>
            <div className='count-item'>
            <p>Trips ride</p>
            <CountUp start={0} end={200} duration={5}></CountUp>
            </div>

            <div className='count-item'>
            <p>Client care</p>
            <CountUp start={0} end={1900} duration={10}></CountUp>
            </div>

            <div className='count-item'>
            <p>Tours done</p>
            <CountUp start={0} end={756} duration={5}></CountUp>
            </div>
            
            
          
          </div> 
      :''
}

      <div className='main-about'>
        <div className='main-img'>
          <img src={mainImg} alt='main-img'></img>
        </div>
            
            <p><span style={{fontSize:'2.5rem'}}>We are ready </span> <br></br>Our company specializes in organizing private and group trips from Krakow to the most interesting places in the south of Poland. We have extensive expertise in the tourism industry. We have all required licenses and certificates. Our drivers are English-speaking. We offer airport transfer and intercity transport. We invite to cooperation individual customers as well as companies, hotels, travel agencies.</p>
      </div>

    
    </div>

  )
}

export default Main