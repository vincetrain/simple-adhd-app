import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function DisplayPage() {
  return (
    <div className="left">
     

    </div>
  )
}
function LoginPage() {
  return (
    
    <div className="loginDiv">
      <div id="leftSide">
      <h1> Test</h1>

      </div>
    <div id="rightSide">
      <h1> Log In</h1>
    <input id="userbox" placeholder="Username"></input>

    <input id="passbox" placeholder="Password"></input>

    </div>
    </div>
  )
}

function App() {

  // useState is a VERY important concept here, please read up on it!
  // https://react.dev/reference/react/useState
  const [userData, setData] = useState({
    username: null,
    password: null
  });
  // we will also be using this to PASS STATE DOWN (another really important concept)
  // https://react.dev/learn/sharing-state-between-components

  const router = createBrowserRouter([
    {
      path: "/",
      element:(
        <>
        <DisplayPage />
      <LoginPage />
     
       </>
      )
      
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );


}



export default App;
