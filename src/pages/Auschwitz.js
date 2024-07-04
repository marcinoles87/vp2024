import React, { useState } from 'react'

import imgAus from '../img/aus.jpg'
import imgAus2 from '../img/aus2.jpg'
import imgAus3 from '../img/aus3.jpg'
import imgAus4 from '../img/aus4.jpg'

function Auschwitz() {

  let [picture , setPicture] = useState({imgAus});

  

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

  const handleOnClick = (e , index) =>{
    
    const ind = e.target
    const pictureAdd = images[3]
    console.log(ind)
    
    setPicture(
      picture = pictureAdd.img
      )
     
    
  }

  return (
    <div className='tour-container'>
      <div className='tour-header'>
        <h1>Auschwitz</h1>
      </div>
      <div className='tour-main'>


        <div className='tour-img'>
          <img src={picture} alt='' ></img>
        </div>
       
        <div className='tour-info'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quas dolor sed dolorem accusantium quam rem voluptates. Maiores tenetur cumque necessitatibus in iusto dicta, obcaecati, consectetur beatae vel ad quia?
          Dolores quas sequi, assumenda eius reiciendis qui saepe deleniti necessitatibus delectus facilis nobis, tenetur voluptatem ut amet aliquid quos distinctio molestiae iste mollitia ullam voluptate iure. Rem accusantium porro et!
          Mollitia atque voluptatem nobis vitae numquam, vel pariatur a quae ullam suscipit laborum reiciendis voluptatum iste rem, dolor amet cum ex sit. Cumque ex atque, eius voluptatem maiores a pariatur?
          Quaerat quod vel id maxime error quas dolorem quae, magnam non nostrum. Incidunt saepe dolorum ratione fugit dicta ipsum explicabo provident voluptatum repellat quos sint sed velit, officia dignissimos maxime.
          Possimus reprehenderit voluptatibus recusandae illum mollitia cumque animi rerum explicabo nesciunt! Minima quae deleniti quam, aspernatur accusantium blanditiis est odit a aliquid eius sequi maiores veniam? Expedita earum nostrum dolorum.
          Voluptatem voluptas dolorum eligendi modi laudantium delectus consectetur corporis. Quaerat, ducimus alias. Odit quis laborum consectetur quod, exercitationem quo ipsam qui at, quae eius architecto est esse reiciendis, quas iure?
          Voluptates soluta consequuntur nam ab beatae, optio corporis libero possimus doloremque consequatur vero rem qui reiciendis a sit minus harum vitae, animi atque repellat laborum? Quos eius ipsa placeat libero!
          Eveniet voluptatem totam fugit assumenda. Exercitationem, inventore ipsam. Cumque repellat dignissimos officiis vel error dolor facere quibusdam ex maiores maxime aliquid, distinctio saepe accusantium nisi placeat animi possimus atque eligendi.
          Quisquam sunt veritatis, expedita error dicta architecto odit. Quis neque corporis ab sequi sit alias velit deserunt illum ex ipsum voluptates asperiores, blanditiis repellendus odit dolores voluptas eum eius minima!
          Harum ipsum quisquam, illo veniam architecto deleniti sapiente obcaecati, explicabo laboriosam suscipit itaque recusandae voluptatibus cum voluptatum dolore corrupti? Natus repellat quaerat doloribus commodi possimus dolor soluta aperiam molestiae ipsam?
          </p>
        </div>
      </div>



      <div className='img'>
      {images.map( (item,index) => {
        return(
          <>
            <img src={item.img} alt='auschwitz' key={index} onClick={handleOnClick}></img>
          </>
        )
      })}
      </div>
    </div>
  )
}

export default Auschwitz