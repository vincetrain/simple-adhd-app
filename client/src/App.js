import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";








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
    
        <Welcome />
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
