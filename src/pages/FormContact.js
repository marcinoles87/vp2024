import React from 'react'

function FormContact() {
  return (
    <div>
        <h1>Contact with us ! now ...</h1>

        <div className='form-container'> 
            <h2>Send email</h2>
            <label>
                <p>Name</p>
                <input type='text' placeholder='name'></input>
            </label>

            <label>
                <p>Email</p>
                <input type='email' placeholder='email'></input>
            </label>

            <label>
                <p>Number</p>
                <input type='number' placeholder='phone'></input>
            </label>

            <label>
                <p>Message</p>
                <textarea></textarea>
                </label>

            <button>Send</button>
        </div>

    </div>
  )
}

export default FormContact