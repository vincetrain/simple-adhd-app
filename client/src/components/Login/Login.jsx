import "./Login.scss";
import React, { useState } from "react";

export default function Login(user, setUserData, DarkMode) {

  const [darkMode, setDarkMode] = useState(DarkMode);

  function toggleDark() {
    setDarkMode(!darkMode);
  }

  return(
    <div className={darkMode ? "loginDiv dark" : "loginDiv"}>
      <div id="rightSide">
        <h1 id="textLog"> a.ttention </h1>
        <input id="userbox" placeholder="Username"></input>
        <br></br>
        <input id="passbox" placeholder="Password"></input>
        <div id="logSign">
          <button id="login"> log in </button>
          <button id="signup"> sign up </button>
          <br></br>
          <br></br>
          <a> forgot your password? </a>
          <br></br>
          <label className="switch">
            <input type="checkbox" onChange={toggleDark}></input>
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
