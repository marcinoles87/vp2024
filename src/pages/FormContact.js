import React from 'react'

function FormContact() {
  return (
    <div>
        <h1>Contact with us ! now ...</h1>

        <div className='form-container'> 
            <h2>Send email</h2>
            <label>
                <p>name</p>
                <input type='text' placeholder='name'></input>
            </label>

            <label>
                <p>topic :</p>
                <input type='text' placeholder='topic'></input>
            </label>

            <label>
                <p>name</p>
                <input type='textarea' placeholder='message'></input>
            </label>

            <button>Send</button>
        </div>

    </div>
  )
}

export default FormContact