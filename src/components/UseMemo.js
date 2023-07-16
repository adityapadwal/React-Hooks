import React from 'react'
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

export const UseMemo = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="container">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}

/* 

The useMemo hook is a performance optimization tool in React that memorizes the result of a computation 
and only recalculates it when the dependencies change. It helps to avoid unnecessary expensive calculations
or rendering when the component re-renders.

In short, useMemo allows you to cache the result of a function or expression and reuse it unless the 
dependencies change, saving computation time and optimizing your component's rendering process.

In the useMemo hook as shown below
  const getLongestName = useMemo(() => findLongestName(data), [toggle]);
  the first argument of useMemo is the compute function
  the second argument of the useMemo hook is the dependency array

*/