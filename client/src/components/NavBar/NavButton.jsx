import { Link } from 'react-router-dom';

import "./NavButton.scss";
import "./../Login/Login";

export default function NavButton() {
   
    function openNav() {
        var sidenav = document.getElementById("mySidenav");
        var mainContent = document.getElementById("main");
        if (sidenav.style.width === "250px") {
            // If the navigation is open, close it
            sidenav.style.width = "0";
            mainContent.style.marginLeft = "0";
        
            } else {
                sidenav.style.width = "250px";
                mainContent.style.marginLeft = "250px";
            }

        }
    return (
     
    <div>
        <button id="sidebar" onClick={openNav}>&#9776; </button>
   

        <div id="mySidenav" className="sidenav">
     
        <a href="javascript:void(0)" class="closebtn" onClick={openNav}>&times;</a>
        <a href="./home">Home</a>
       
        <a>About </a>
          
          
        </div>

        </div>
    );
}
