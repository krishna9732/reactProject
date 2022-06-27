import { useState } from "react"
import React from 'react'

function Product() {
  const [firstName, setUserName] = useState('');
  const [lastName, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');


  const firstNameChange = event => {
    setUserName(event.target.value);
  };

  const lastNameChange = event => {
    setPassword(event.target.value);
  }

  const emailChange = event => {
    setEmail(event.target.value);
  };

  const contactChange = event => {
    setContact(event.target.value);
  }


  const onSubmit = event => {
    event.preventDefault();
    console.log("form has been submitted: ");
    console.log(firstName+" - " +lastName + ' - ' + email + ' - ' + contact);
  };

  return (
    <div>
     <form onSubmit={onSubmit}>  
          <label for="fname">FirstName: </label>
          <input id="fname" type="text" value={firstName} onChange={firstNameChange} />
          <br/><br/>
          <label for="lname">LastName: </label>
          <input id="lname" type="text" value={lastName} onChange={lastNameChange} />
          <br/><br/>
          <label for="email">Email: </label>
          <input id="email" type="email" value={email} onChange={emailChange} />
          <br/><br/>
          <label for="contact">Contact: </label>
          <input id="contact" type="text" value={contact} onChange={contactChange} />
          <br/><br/>
          <button type="submit"> Submit </button>
        </form>
    </div>
  )
}

export default Product