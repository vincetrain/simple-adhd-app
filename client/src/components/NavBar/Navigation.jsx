import "./Navigation.scss";

export default function Navigation(user, setUserData) {
    return (
        <div>
        <span id="navBar"  onChange="openNav()" >&#9776;</span>
        </div>
    );
  }