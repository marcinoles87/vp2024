import React from 'react'
import Table from 'react-bootstrap/Table'

function Price() {

  const shared = [
    {
      destination : 'Auschwitz',
      price1 : '100E',
      price2 : '30E',
      price3 : '28E',
      price4 : '28E',
      price5 : '28E',
      price6 : '28E',
    },
    
    {
      destination : 'Saltmine',
      price1 : '100E',
      price2 : '30E',
      price3 : '28E',
      price4 : '28E',
      price5 : '28E',
      price6 : '28E',
    },

    {
      destination : 'Cracow',
      price1 : '90E',
      price2 : '30E',
      price3 : '28E',
      price4 : '28E',
      price5 : '28E',
      price6 : '28E',
    },

    {
      destination : 'Czestochowa',
      price1 : '100E',
      price2 : '30E',
      price3 : '28E',
      price4 : '28E',
      price5 : '28E',
      price6 : '28E',
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
    <div className='price-container'>

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
    <Table striped bordered hover variant='dark' responsive='lg'>
      <thead>
        <tr>
          {th.map( (item , index) => {
            return(
              <>
               <th>{item.row1}</th>
               <th>{item.row2}</th>
               <th>{item.row3}</th>
               <th>{item.row4}</th>
              </>
            )
          })}
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
         
        </tr>
      </thead>
      
    </Table>
    </div>
   
  )
}

export default Price
