import React from "react";
import "./header.css";
import profilePic from "../../img/profile.jpg";
import user from "../../auth";
import { useHistory } from "react-router-dom";
import url from "../../Path";

const Header = () => {
  const history = useHistory();
  const { login } = url;
  const HandleOnClick = () => {
    user.logout(() => history.push(login));
  };
  return (
    <header className="dark-mode">
      <nav className="top-nav side-margin split">
        <div className="user-detail nav-options split center-item">
          <img src={profilePic} alt="" className="user-detail__img" />
          <h3 className="user-detail__name">{user.getDetails("userName")}</h3>
        </div>
        <div className="nav-options center-item">
          <input type="text" placeholder="Type in order ID" />
        </div>
        <div className="nav-options center-item">
          <button
            type="submit"
            className="auth-button dark-mode"
            onClick={HandleOnClick}
          >
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
};
// use react memo to keeo this from rerendering

export default Header;
