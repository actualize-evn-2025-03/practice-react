import { useState } from 'react';

function Counter() {
  const [isActive, setIsActive] = useState(false);

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1)
  }

  const decrement = () => {
    setNumber(number - 1)
  }

  const toggleActive = () => {
    setIsActive(!isActive); 
  }

  return (
    <div>
      <p>
        Current Status is: {isActive ? 'Active' : "Inactive"}
      </p>
      <button onClick={toggleActive}>{isActive ? 'Active' : "Inactive"}</button>
      <hr />
      <p>{number}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter;
