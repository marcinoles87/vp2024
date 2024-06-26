import React from 'react'

function Tours() {

  const tours = [
    {
      img: '',
      nazwa:'Auschwitz',
      opis : 'Concentracion and exterminatnion camp Auschwitz - Birkenau was the place of torment of almost 1,5 milion people , mostly Jewish , Polish and Gypsy . This is the place where we bow and pay our respect to all those who were killed by the Nazis. Auschwitz-Birkenau is the symbol of doom and the only concetracion camp on the UNESCO World Heritage listWe offer private transport and assistance at destination. The drive from Krakow takes 80 minutes. Our driver will help you to buy the tickets and find a guide. This tour usually takes about 6 hours (including the drive), but taking into consideration the seriousness of this place, you decide how much time you want to spend on touring. The prize includes transport, the wait, tolls, parking fee. It does not include the entrance free.' ,
      czas : '2:20h' ,
      cena : '200zl'
    } ,

    {
      img: '',
      nazwa:'Wieliczka',
      opis : 'The Wieliczka Salt Mine is one of the oldest salt mines in the world. The oldest shaft, which is currently available to visitors, dates from the 18th century. The mine is one of the regions most popular attractions. It was inscribed on the first UNESCO World Heritage List and it is visited annually by over 2 million tourists. The unique chapels of St. Antoni and Saint. Kinga, shafts, tunnels and even an underground lake are just some of the attractions that await you at the Wieliczka Salt .The tour takes place on a guided tour and lasts about 3 hours. It starts by climbing 378 steps down to a depth of 64m. After covering less than 3 km of the route, from a depth of 135m you return to the surface with a mining crane. We offer private transport along with waiting. Our English-speaking driver will be happy to help you with buying tickets. The price does not include the entrance free.' ,
      czas : '2:20h' ,
      cena : '200zl'
    } ,

    {
      img: '',
      nazwa:'Czestochowa',
      opis : 'Czestochowa lies among the picturesque rocks of the Cracow-Czestochowa Upland, crowned with the ruins of medieval castles. Czestochowa is mainly associated with the Jasna Góra monastery and the icon of the Black Madonna, attributed to many miracles. The sanctuary is known as one of the largest pilgrimage sites in the world, but its impressive architecture also attracts many tourists. The Czestochowa Sanctuary is also an outstanding architectural monument of the 15th century, with later Renaissance and Baroque transformations. The number of pilgrims and tourists coming to the city is 5 million per year.We offer private transport and assistance at destination. The drive from Krakow takes about 2 hours. Our driver will help you to buy the tickets and find the most attractive places. This tour has no time limit, you decide how much time you want to spend on touring. The prize includes transport and the wait. It does not include the entrances fees.' ,
      czas : '2:20h' ,
      cena : '200zl'
    } ,

    {
      img: '',
      nazwa:'Zakopane',
      opis : 'The most attractive summer and winter resort in Polish mountains. In the summer you can spend days walking in the mountains enjoying the breathtaking views. In the summer you won’t be bored thanks to winter activities like skiing or snowboarding. at any time of the year you can walk along the most popular street of the Polish mountains - Krupówki. You can buy souvenirs there, sit in a real highlanders eatery or eat delicious grilled oscypek cheese with cranberry.We offer private transport and assistance at destination. The drive from Krakow takes about 2 hours. Our driver will help you to buy the tickets and find the most attractive places. This tour has no time limit, you decide how much time you want to spend on touring. The prize includes transport and the wait. It does not include the entrances fees.' ,
      czas : '2:20h' ,
      cena : '200zl'
    } ,

    {
      img: '',
      nazwa:'Zakopane',
      opis : '' ,
      czas : '2:20h' ,
      cena : '200zl'
    } ,
  ]
  return (
    <div className='tours-container'>
      <h1>Choose your destiny and contact Us</h1>
        {tours.map( (item,index) => {
          return(
            <div className='tour-item' key={index}>
              {item.img}
              <h3>{item.nazwa}</h3>
              <p>{item.opis}</p>
              <p>Time : {item.czas}</p>
              <p>Price :{item.cena}</p>
              
            </div>
          )
        })}
    </div>
  )
}

export default Tours