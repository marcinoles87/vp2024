import React from 'react'
import Table from 'react-bootstrap/Table'

function Price() {

  const shared = [
    {
      destination : 'Auschwitz & Birkenau Tour ',
      price1 : '250 pln / sharing',
      price2 : '860 pln / private',
      price3 : '1000 pln / private',
      price4 : '1140 pln / private',
      price5 : '1280 pln / private',
      price6 : '1560 pln / private',
    },
    
    {
      destination : 'Saltmine',
      price1 : '350 pln',
      price2 : '680 pln',
      price3 : '890 pln',
      price4 : '1240 pln',
      price5 : '1550 pln',
      price6 : '1860 pln',
    },

    {
      destination : 'Zakopane',
      price1 : 'contact us',
      price2 : 'contact us',
      price3 : 'contact us',
      price4 : '750 pln',
      price5 : 'contact us',
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
    <div className='price-container table-responsive-sm'>

        <h1> Single group trip</h1>
    <Table striped bordered hover variant='dark' responsive='sm'>
      <thead>
        <tr>
          
          <th>Destination</th>
          <th>1/person</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6-7</th>

        </tr>
      </thead>
      <tbody>
        
        {shared.map( (item ,index) => {
          return(
            <tr key={index}>
              <td>{item.destination}</td>
              <td>{item.price1}</td>
              <td>{item.price2}</td>
              <td>{item.price3}</td>
              <td>{item.price4}</td>
              <td>{item.price5}</td>
              <td>{item.price6}</td>
            </tr>
          )
        })}
        
        
      </tbody>
    </Table>

    <h1> Shared group trip</h1>
    <Table striped bordered hover variant='dark' responsive='sm'>
      <thead>
        <tr>
         
              
               <th>Destination</th>
               <th>1/person</th>
               <th>2-4</th>
               <th>4-7</th>
             
        </tr>
      </thead>
      <tbody>

        {shared.map( (item ,index) => {
          return(
            <tr key={index}>
              <td>{item.destination}</td>
              <td>{item.price1}</td>
              <td>{item.price2}</td>
              <td>{item.price3}</td>
            </tr>
          )
        })}
      
      </tbody>
    </Table>


        
    <h1> Transfer</h1>
    <Table striped bordered hover variant='dark' responsive='sm'>
      <thead>
        <tr>
          {th.map( (item , index) => {
            return(
              <>
               <th>{item.row1}</th>
               <th>{item.row3}</th>
               <th>{item.row4}</th>
              </>
            )
          })}
        </tr>
      </thead>
      <tbody>
       
          
            <tr>
              <td>Kraków - Balice Airport</td>
              <td>130 pln </td>
              <td>150 pln</td>
            
            </tr>

            <tr>
              <td>Kraków - Katowice Pyrzowice</td>
              <td>650 pln </td>
              <td>750 pln</td>
            
            </tr>
          
      </tbody>
    </Table>
     
      
    
    </div>
   
//   <div className='price-container'>
//     <h1>TRANSFERS/TRANSFERY:</h1>


                                                       
//  <h1>TOURS/WYCIECZKI:</h1> 
//  <h2>Auschwitz & Birkenau Tour Sharing </h2>
//  <p> od osoby 220pln</p>
// <h2>Auschwitz & Birkenau Tour Private</h2>
//       <p> 2 osoby dla klienta 860pln</p>
//       <p>3 osoby  cena dla klienta 1000pln</p>
//       <p>4 osoby  cena dla klienta 1140pln</p>
//       <p>5 os.  cena dla klienta 1280pln</p>
//       <p>6 os.  cena dla klienta 1420pln</p>
//       <p> 7 os.  cena dla klienta 1560pln</p>
//       <p> 8 os.  cena dla klienta 1700pln</p>

// <h2>Salt Mine Tour</h2>
// <p>od osoby sugerowana cena dla klienta 310pln</p>
// <h2>Zakopane Tour</h2>
// <p>max 4 osób sugerowana cena dla klienta 750pln </p>
// <p>max 8 osób sugerowana cena dla klienta 970pln</p>
// <h2>Zakopane & Thermal pool 3h </h2>
//    <p>2 osoby cena dla klienta 960pln</p>
//                                                  <p>3 osoby cena dla klienta 1080pln</p>
//                                                 <p> 4 osoby cena dla cena dla klienta 1420pln </p>                                               
                                                 
//                                                  <p>5 os.  cena dla klienta 1320pln</p>
//                                                  <p>6 os. cena dla klienta 1420pln</p>
//                                                 <p> 7 os cena dla klienta 1560pln</p>
//                                                 <p> 8 os. cena dla klienta 1680pln</p>
//   </div>

  )
}

export default Price
