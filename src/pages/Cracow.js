import React , {useState} from 'react'

import imgCra from '../img/cra.jpg'
import imgCra2 from '../img/cra2.jpg'
import imgCra3 from '../img/cra3.jpg'
import imgCra4 from '../img/cra4.jpg'

function Cracow() {
  let [picture , setPicture] = useState(imgCra);

  

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
          
         <img src={picture} alt='auschwitz'></img>
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

          </p>
        </div>
      </div>



      <div className='img'>
      {images.map( (item,index) => {
        return(
         
            <img src={item.img} key={index} alt='auschwitz'  onClick={ () => setPicture(item.img)}></img>
        
        )
      })}
      </div>
    </div>
  )
}
export default Cracow