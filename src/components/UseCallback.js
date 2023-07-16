// import axios from "axios";
import { useCallback, useState } from "react";
import {Child} from "../components/Child.js";

export const UseCallback = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, How're you my friend ");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

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
Explanation:
  useMemo and useCallback are more or less the same.
  useMemo is used with values and on the other hand useCallback is used with functions.

  In summary, useMemo is for memoizing the result of a computation, 
  while useCallback is for memoizing functions themselves to prevent unnecessary re-creations. 
  Both hooks are essential for optimizing performance in React applications, 
  but they are applied in different scenarios.
*/