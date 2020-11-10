import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const SideNavLinks = ({ url, iconName, linkName }) => {
  let history = useHistory();
  const displayActive = (path) => {
    const active = history.location.pathname === path ? "active-item" : null;
    return active;
  };
  return (
    <li className={`side-nav__options__list  ${displayActive(url)}`}>
      <Link to={url}>
        <div className="side-nav__options__div">
          <ion-icon name={iconName} className="side-nav__icons"></ion-icon>
          <span className="side-nav__options">{linkName}</span>
        </div>
      </Link>
    </li>
  );
};

export default SideNavLinks;
