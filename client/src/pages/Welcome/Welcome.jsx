import "./Welcome.scss";

import Login from "../../components/Login/Login";
import Navigation from "../../components/NavBar/Navigation"

export default function Welcome(user, setUserData) {
  return (
    <div>
      <Navigation />
      <Login />
    </div>
  );
}