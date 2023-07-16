import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const UseEffect = () => {
  // using useState hook
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  // using the useEffect hook
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was called");
      });
  }, []); // in the [] mention the states that you want the useEffect to trigger when the state changes

  return (
    <div className="container">
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={() => {
        setCount(count+1);
      }}>Click Here!</button>
    </div>
  );
};

/*
Explanation:
    The useEffect hook is just a function that will be called whenever the page re-renders
    It is used to detect whenever the page rerenders
    the useEffect hook is used to perform side effects in functional components

    In short, useEffect is used to handle actions that should be executed after rendering the 
    component and allows you to manage these side effects in a declarative way. It takes a function 
    as its first argument, and this function will be executed after the component renders. 
    Additionally, you can provide a second argument (an array) that specifies dependencies, 
    controlling when the effect should run.

    Overall, useEffect helps you manage side effects and keep your components clean and easy to reason 
    about in React.


*/
