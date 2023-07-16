import React, {useRef} from 'react'
import {Button} from "../components/Button.js"

export const UseImperativeHandle = () => {

    const buttonRef = useRef(null);

  return (
    
    <div className="container">
        <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
        <Button ref={buttonRef}/>
    </div>
  )
}

/* 
Explanation:
The useImperativeHandle hook is a way to customize the instance value that is exposed when a parent 
component uses ref to access a child component. It allows a child component to expose specific functions 
or properties to the parent component.

In short, useImperativeHandle allows a child component to control what is accessible through its ref, 
enabling a more controlled and explicit communication between parent and child components. 
This can be useful when you want to expose specific functionalities of a child component to its parent, 
but you want to hide other internal details.

*/