import "./Homepage.scss";

import Navigation from "../../components/NavBar/Navigation";
import Home from "../../components/Home/Home";

export default function Homepage(user, setUserData) {
  return (
    <div>
      <Home />
      <Navigation />

    </div>
  );
}