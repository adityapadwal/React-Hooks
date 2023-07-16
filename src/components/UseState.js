import React from 'react'
import { useState } from 'react'

export const UseState = () => {
  // syntax for useState
  const [count, setCount] = useState(0);
  const[inputValue, setInputValue] = useState('Hello!');

  // function to update the count
  const handleClick = () => {
    setCount(count+1);
  };

  const handleChange = (event) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  return (
    <div className='container'>
      <div>
        <p>Demonstration I of the useState Hook</p>
        <button onClick={handleClick} > Clicked {count} times!</button>
        <p>Demonstration II of the useState Hook</p>
      </div>
      <div>
        <input type="text" placeholder='Write Something...' onChange={handleChange}/>
        {inputValue}
      </div>
    </div>
  );
};

/* 
  Explanation
  useSteta is ont of the most popular state hooks
  The use of state hooks is to remember information like user input
  The different state hooks are:
  1. useState
  2. useReducer

  => useState hook
  used for updating the state of a react component
  in the syntax const [count, setCount] = useState(0);
  count is the state variable which is initialized to zero
  and setCount is the function to update the state variable (count)

*/