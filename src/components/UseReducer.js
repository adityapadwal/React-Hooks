// import React from "react";
// import { useState } from "react";

// export const UseReducer = () => {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(true);

//   return (
//     <div className="container">
//       <div>
//         <p>Demonstration of the useReducer Hook</p>
//       </div>
//       <div>
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             setCount(count + 1);
//             setShowText(!showText);
//           }}
//         >
//           Click Here
//         </button>

//         {showText && <p>This is a text!</p>}
//       </div>
//     </div>
//   );
// };

/*
    Explanation
    The useReducer hook servers as an alternative or a replacement to the useState hook
    Both of them have the same purpose
    Allows the developers to create state variables such that when the values of these state variables is changed,
    then the component re-renders to show the new values of these state variables

    When to use useReducer then?
    -> As ahown above, when the 'Click Here' button in clicked we need to perform 2 actions
    So, when multiple actions need to be performed, we need multiple states to handle it, 
    With the help of useReducer, we can handle multiple states as shown below

*/

import React from "react";
import { useReducer } from "react";

export const UseReducer = () => {

    // reducer function
    const reducer = (state, action) => {
        switch(action.type) {
            case "increment":
                return {count: state.count + 1, showText: state.showText};
            case "toggleShowText":
                return {count: state.count, showText: !state.showText};
            default:
                return state;
        }
    };

    // using the useReducer hook
    const[state, dispatch] = useReducer(reducer, {count: 0, showText: true});

  return (
    <div className="container">
      <div>
        <p>Demonstration of the useReducer Hook</p>
      </div>
      <div>
        <h1>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({type: "increment"});
            dispatch({type: "toggleShowText"});
          }}
        >
          Click Here
        </button>

        {state.showText && <p>This is a text!</p>}
      </div>
    </div>
  );
};

/* 
    Explanation: 
    in the Syntax of useReducer const[state, dispatch] = useReducer(reducer, {count: 0, showText: true});
    -> state holds all the state variables of our react component
    -> dispatch is a function similar to set... of the useState hook. It is used to update the state variable
    As there are more than one states variables present, dispatch function needs to mention which state variable needs to be updated
    -> reducer is a function which containes the logic to update the state variables
    -> the second argument of useReducer has the initial values of the state variables similar to the useState hook

*/