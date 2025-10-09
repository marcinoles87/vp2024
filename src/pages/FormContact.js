import React, { useState } from 'react'

function FormContact() {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [number , setNumber] = useState('');
    const [message , setMessage] = useState('');
    const [trip , setTrip] = useState('')


    console.log(name , email , number , message , trip)

    const sendEmail = () => {

        let url = `https://api.whatsapp.com/send?phone=48508392683&text= Hi my name is ${name} email : ${email} number : ${number}  trip to :${trip} message : ${message}`

        window.open(url , '_blank' ).focus() ;
     }
    
    

  return (
    <div className='form'>

        <div className='form-container'>
            <div className='blured'></div>
            <h2>Send message</h2>
            <label>
                <p>Name</p>
                <input type='text' placeholder='name' onChange={ (e) => setName(e.target.value)}></input>
                <p className='text-alert'>{name.length < 2 ? 'too short name' : ''}</p>
            </label>

            <label>
                <p>Email</p>
                <input type='email' placeholder='email' onChange={ (e) => setEmail(e.target.value)}></input>
                <p className='text-alert'>{email < 2 ? 'wrong email' : ''}</p>

            </label>

            <label>
                <p>Number</p>
                <input type='number' placeholder='phone' onChange={ (e) => setNumber(e.target.value)}></input>
            </label>

            <label htmlFor="tours">Choose a tour:</label>

                    <select name="tours" id="tours" onChange={ (e) => setTrip(e.target.value)}>
                    <option value="auschwitz">Auschwitz</option>
                    <option value="saltmine">Wieliczka</option>
                    <option value="cracow">Cracow</option>
                    <option value="czestochowa">Czestochowa</option>
                    <option value="zakopane">Zakopane</option>
                    <option value="energylandia">Energylandia</option>
                    </select>

            <label>
                <p>Message</p>
                <textarea onChange={ (e) => setMessage(e.target.value)}></textarea>
                </label>

                <p>Your message will be send by Whatsapp</p>

            <button onClick={sendEmail}>Send</button>

        </div>

    </div>
  )
}

export default FormContact