import { useState } from 'react';

function NameForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameInputChange = (event) => {
    setFirstName(event.target.value);
  }  

  const handleLastNameInputChange = (event) => {
    setLastName(event.target.value);
  }  

  return (
    <div>
      <label>
        Enter your name:
        <input 
          type="text"
          value={firstName}
          onChange={handleFirstNameInputChange}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <br></br>
      {firstName ? <p>Your first name is: {firstName}</p> : "Hello Guest"}
      <br></br>
      <label>
        Enter your name:
        <input 
          type="text"
          value={lastName}
          onChange={handleLastNameInputChange}
          style={{ marginLeft: '10px' }}
        />
      </label>
      <br></br>
      {lastName ? <p>Your last name is: {lastName}</p> : "Hello Guest"}
      {(firstName && lastName) && <p>Your full name is {firstName} {lastName}</p>}
      {/* Short Circuit Syntax - {some condition && do this} */}
      {/* Ternary Operator - {some condition ? if it's true do this : if it's false do this} */}
    </div>
  )
}

export default NameForm;
