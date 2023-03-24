import React from 'react'
import './mailList.css'
const MailList = () => {
  return (
    <div className='mail'>
        <div className="titles">
            <h1>Save time, save money!</h1>
            <p>sign up and we will send the best deals to you</p>
        </div>
        <div className="mailInputContainer">
            <input type="text" name="email" id="" placeholder='Your Email'/>
            <button className="mailButton">Subscribe</button>
        </div>

    </div>
  )
}

export default MailList