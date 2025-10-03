import React, { useState } from 'react'
import CountUp from 'react-countup';

import mainImg from '../img/aus2024_1 (2).jpeg'
import voucher from '../img/voucher.jpg'

function Main() {

  const [ counter , setCounter] = useState(false)

  const getDate =new Date();
  const nowYear = getDate.getFullYear()
  console.log(nowYear)


  const startCounter = () => {

    if(window.scrollY > 650){
      setCounter(true)
    } 
  }

  window.onscroll = startCounter

  return (
    <div className='main-container' id='about'>
      <div className='main-items'>

        <div className='main-item'>
          <i className="fa-regular fa-thumbs-up new fa-xl"></i>
          <h3>Professional Care</h3>
          <p>Professional care for passengers involves ensuring safety, providing comfort, delivering timely assistance, addressing needs promptly, maintaining communication, and fostering a positive experience throughout their journey, prioritizing overall satisfaction and well-being.</p>
        </div>

        <div className='main-item'>
        <i className="fa-solid fa-medal new fa-xl"></i>
          <h3>Quality driver</h3>
          <p>A quality driver prioritizes safety above all else. They adhere to traffic laws, respect speed limits, and are aware of their surroundings, making conscious decisions to protect themselves and others.</p>
        </div>

        <div className='main-item'>
        <i className="fa-solid fa-sack-dollar fa-xl"></i>
          <h3>Price</h3>
          <p>Ultimately, finding the best price depends on a variety of factors. By analyzing costs, understanding the market and providing added value, our company will always find the best solution for you. By combining rides with each other, buying tickets in a package, you will get the best offer on the market.</p>
        </div>

      </div>

        {counter ? 
          <div className='main-count'>
            <div className='count-item'>
            <p>Year Experiences</p>
            <CountUp start={0} end={10} duration={5}></CountUp>
            </div>

            <div className='count-item'>
            <p>Client care</p>
            <CountUp start={0} end={nowYear+200+getDate.getDay()} duration={10}></CountUp>
            </div>

            <div className='count-item'>
            <p>Tours done</p>
            <CountUp start={0} end={nowYear-1000} duration={5}></CountUp>
            </div>
            
            
          
          </div> 
      :''
}

      <div className='main-about'>
        <div className='main-img'>
          <img src={mainImg} alt='main-img'></img>
        </div>
            
            <p><span style={{fontSize:'6rem' , fontWeight:'bold'}}>We are ready </span> <br></br>Our company specializes in organizing private and group trips from Krakow to the most interesting places in the south of Poland. We have extensive expertise in the tourism industry. We have all required licenses and certificates. Our drivers are English-speaking. We offer airport transfer and intercity transport. We invite to cooperation individual customers as well as companies, hotels, travel agencies.</p>
      </div>

      <div className='voucher-container'>
        
        <div className='voucher-text'>
          <h1>Join our</h1>
          <h1>Community</h1>
          <p>If you want to get a super voucher for your next trip, join our community today. Don't hesitate, your journey starts today.</p>
          <a href="https://www.facebook.com/people/Viptourcracow-CracowAuchswitzWieliczka-Salt-Mine/100041922716636/"><button>Get Early acces</button></a>
        </div>

        <div className='voucher-img'>
          <img src={voucher} alt='voucher-img'></img>
        </div>
            
      </div>

    
    </div>

    

  )
}

export default Main