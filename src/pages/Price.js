import React from 'react'
import Table from 'react-bootstrap/Table'

function Price() {

  const shared = [
    {
      destination : 'Auschwitz & Birkenau Tour ',
      price1 : '220 pln / sharing',
      price2 : '860 pln / private',
      price3 : '1000 pln / private',
      price4 : '1140 pln / private',
      price5 : '1280 pln / private',
      price6 : '1560 pln / private',
    },
    
    {
      destination : 'Saltmine',
      price1 : '310 pln',
      price2 : '620 pln',
      price3 : '930 pln',
      price4 : '1240 pln',
      price5 : '1550 pln',
      price6 : '1860 pln',
    },

    {
      destination : 'Zakopane',
      price1 : '-',
      price2 : '-',
      price3 : '-',
      price4 : '750 pln',
      price5 : '-',
      price6 : '970 pln',
    },

    {
      destination : 'Czestochowa',
      price1 : 'contact us',
      price2 : 'contact us',
      price3 : 'contact us',
      price4 : 'contact us',
      price5 : 'contact us',
      price6 : 'contact us',
    },

    {
      destination : 'Energylandia',
      price1 : '100E',
      price2 : '30E',
      price3 : '28E',
      price4 : '28E',
      price5 : '28E',
      price6 : '28E',
    }



    
  ]

    const th = [
      {
        row1 : 'Destinatnion' ,
        row2 : '1/person' ,
        row3 : '2-4' ,
        row4 : '4-7'
      }
    ]
  
    
  return (
    // <div className='price-container'>

    //     <h1> Single group trip</h1>
    // <Table striped bordered hover variant='dark' responsive='sm'>
    //   <thead>
    //     <tr>
          
    //       <th>Destination</th>
    //       <th>1/person</th>
    //       <th>2</th>
    //       <th>3</th>
    //       <th>4</th>
    //       <th>5</th>
    //       <th>6-7</th>

    //     </tr>
    //   </thead>
    //   <tbody>
        
    //     {shared.map( (item ,index) => {
    //       return(
    //         <tr key={index}>
    //           <td>{item.destination}</td>
    //           <td>{item.price1}</td>
    //           <td>{item.price2}</td>
    //           <td>{item.price3}</td>
    //           <td>{item.price4}</td>
    //           <td>{item.price5}</td>
    //           <td>{item.price6}</td>
    //         </tr>
    //       )
    //     })}
        
        
    //   </tbody>
    // </Table>

    // <h1> Shared group trip</h1>
    // <Table striped bordered hover variant='dark' responsive='lg'>
    //   <thead>
    //     <tr>
    //       {th.map( (item , index) => {
    //         return(
    //           <>
    //            <th>{item.row1}</th>
    //            <th>{item.row2}</th>
    //            <th>{item.row3}</th>
    //            <th>{item.row4}</th>
    //           </>
    //         )
    //       })}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {shared.map( (item ,index) => {
    //       return(
    //         <tr key={index}>
    //           <td>{item.destination}</td>
    //           <td>{item.price1}</td>
    //           <td>{item.price2}</td>
    //           <td>{item.price3}</td>
    //         </tr>
    //       )
    //     })}
      
    //   </tbody>
    // </Table>

    // <h1> Transfer</h1>
    // <Table striped bordered hover variant='dark' responsive='sm'>
        

     
      
    // </Table>
    // </div>
   
  <div className='price-container'>
    <h1>TRANSFERS/TRANSFERY:</h1>

<h3>Transfer Kraków Balice Airport</h3> 
   <p>do 4 osób cena dla klienta 120pln</p>
   <p>od 5 do 8 osób  dla klienta 140pln</p>
                                                        
 <h3>Transfer Katowice Pyrzowice</h3> -      
 <p>do 4 osób 550pln  dla klienta 700pln</p>
 <p>do 8 osób 650pln  dla klienta 800pln</p>
                                                       
 <h1>TOURS/WYCIECZKI:</h1> 
Auschwitz & Birkenau Tour Sharing -  od osoby  dla klienta 220pln
Auschwitz & Birkenau Tour Private -  2 osoby dla klienta 860pln
                                                           3 osoby  cena dla klienta 1000pln
                                                           4 osoby  cena dla klienta 1140pln
                                                           5 os.  cena dla klienta 1280pln
                                                           6 os.  cena dla klienta 1420pln
                                                           7 os.  cena dla klienta 1560pln
                                                           8 os.  cena dla klienta 1700pln

Salt Mine Tour - od osoby sugerowana cena dla klienta 310pln
Zakopane Tour - max 4 osób sugerowana cena dla klienta 750pln 
                            max 8 osób sugerowana cena dla klienta 970pln
Zakopane & Thermal pool 3h - 2 osoby cena dla klienta 960pln
                                                 3 osoby cena dla klienta 1080pln
                                                 4 osoby cena dla cena dla klienta 1420pln                                                
                                                 
                                                 5 os.  cena dla klienta 1320pln
                                                 6 os. cena dla klienta 1420pln
                                                 7 os cena dla klienta 1560pln
                                                 8 os. cena dla klienta 1680pln
  </div>

  )
}

export default Price
