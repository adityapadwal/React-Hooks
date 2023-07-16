import React from 'react'
import {useRef} from 'react'

export const UseRef = () => {

    // using the useRef hook
    const inputRef = useRef(null);

    const handleClick = () => {
        console.log(inputRef.current.value);
        inputRef.current.value = "";
        inputRef.current.focus();
    };

  return (
    <div className="container">
        <h1>Aditya</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

/*
    Explanation:
    useRef is a React hook that provides a way to create a mutable reference to a DOM element or a 
    value that persists across renders. It allows you to access and modify the referenced value without 
    triggering a re-render of the component. It's useful for storing and managing values that need to 
    be retained between renders but don't require triggering updates or re-rendering the component.

    Used for DOM manipulation without re-rendering the react components.
*/