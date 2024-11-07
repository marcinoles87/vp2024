import React from 'react'

function Headnav() {
  return (
    <div className='head-nav-container'>
        <ul>
            <li><i className="fa-solid fa-phone"></i> +48 508-392-683</li>
            <li><i className="fa-regular fa-envelope"></i> viptour@com.pl</li>
            <li><a href='https://www.facebook.com/people/Viptourcracow-CracowAuchswitzWieliczka-Salt-Mine/100041922716636/'><i className="fa-brands fa-facebook"></i></a></li>
            {/* <li><i className="fa-brands fa-instagram"></i></li> */}
            <li><a href="https://api.whatsapp.com/send?phone=48508392683&text=Hey We are ready for your message" data-action="share/whatsapp/share"><i class="fa-brands fa-whatsapp"></i></a></li>
            
        </ul>
    </div>
  )
}

export default Headnav