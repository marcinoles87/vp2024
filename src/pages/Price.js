import React from 'react'
import Table from 'react-bootstrap/Table'

function Price() {
    
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
        <tr>
          <td>Auschwitz</td>
          <td>100E</td>
          <td>90E</td>
          <td>45E</td>
          <td>30E</td>
          <td>24E</td>
          <td>20E</td>
          
          
        </tr>
        <tr>
          <td>Saltmine Wieliczka</td>
         
        </tr>
        <tr> <td>Cracow Town</td> </tr>
        <tr> <td>Zakopane</td> </tr>
        <tr> <td>Energylandia</td> </tr>
        <tr> <td>Czestochowa</td> </tr>
        
      </tbody>
    </Table>

    <h1> Shared group trip</h1>
    <Table striped bordered hover variant='dark' responsive='lg'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      
      </tbody>
    </Table>

    <h1> Transfer</h1>
    <Table striped bordered hover variant='dark' responsive='sm'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      
      </tbody>
    </Table>
    </div>
   
  )
}

export default Price
