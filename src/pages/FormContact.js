import React, { useState } from 'react'

function FormContact() {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [number , setNumber] = useState('');

    const [submit , setSubmit] = useState('');

    console.log(name , email , number)

    const sendEmail = () => {
        Email.send({
            Host: "smtp.gmail.com",
            Username: "sender@email_address.com",
            Password: "Enter your password",
            To: 'marcinoles87@gmail.com',
            From: email,
            Subject: "Sending Email using javascript",
            Body: "Well that was easy!!",
        })
            .then(function (message) {
                alert("mail sent successfully")
            });
        }
    
    

  return (
    <div className='form'>

        <div className='form-container'>
            <div className='blured'></div>
            <h2>Send email</h2>
            <label>
                <p>Name</p>
                <input type='text' placeholder='name' onChange={ (e) => setName(e.target.value)}></input>
            </label>

            <label>
                <p>Email</p>
                <input type='email' placeholder='email' onChange={ (e) => setEmail(e.target.value)}></input>
            </label>

            <label>
                <p>Number</p>
                <input type='number' placeholder='phone' onChange={ (e) => setNumber(e.target.value)}></input>
            </label>

            <label htmlFor="tours">Choose a tour:</label>

                    <select name="tours" id="tours">
                    <option value="auschwitz">Auschwitz</option>
                    <option value="saltmine">Wieliczka</option>
                    <option value="cracow">Cracow</option>
                    <option value="czestochowa">Czestochowa</option>
                    <option value="zakopane">Zakopane</option>
                    <option value="Energylandia">Energylandia</option>
                    </select>

            <label>
                <p>Message</p>
                <textarea></textarea>
                </label>

            <button onClick={sendEmail}>Send</button>
        </div>

    </div>
  )
}

export default FormContact