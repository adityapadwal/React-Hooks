// import React, { useState } from 'react'
// import {Login} from '../components/Login.js'
// import {User} from'../components/User.js'

// export const UseContext = () => {

//     const [username, setUsername] = useState("");

//   return (
//     <div className='container'>
//         <Login setUsername = {setUsername} />
//         <User username = {username} />
//     </div>
//   )
// }

/* 
    Explanation:
    The above code is correct
    But many times it is not feasible to pass states as props to child elements
    To overcome this, we perform state management with the help of Context API
    Therefore for this we use useContext hook
*/

import React, { useState, createContext } from "react";
import { Login } from "../components/Login.js";
import { User } from "../components/User.js";

// creating a context
export const AppContext = createContext(null);

export const UseContext = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="container">
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};
