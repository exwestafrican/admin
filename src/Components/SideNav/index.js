import React from "react";
import "./sideNav.css";
import { Link } from "react-router-dom";
import url from "../../Path";
import { useHistory } from "react-router-dom";

const SideNav = () => {
  let history = useHistory();
  const { orders, dashboard, resturants, refunds } = url;

  const displayActive = (path) => {
    const active = history.location.pathname === path ? "active-item" : null;
    return active;
  };

  return (
    <nav className="side-nav">
      <ul className="side-nav__options">
        <li className={`side-nav__options__list  ${displayActive(dashboard)}`}>
          <Link to={dashboard}>
            <ion-icon
              name="home-outline"
              className="side-nav__icons"
            ></ion-icon>
            <span className="side-nav__options">Dashboard</span>
          </Link>
        </li>

        <li
          className={`side-nav__options__list notify ${displayActive(orders)}`}
        >
          <Link>
            <ion-icon
              name="fast-food-outline"
              className="side-nav__icons"
            ></ion-icon>

            <span className="side-nav__options">Orders </span>
          </Link>
        </li>

        <li className={`side-nav__options__list  ${displayActive(resturants)}`}>
          <Link>
            <ion-icon
              name="restaurant-outline"
              className="side-nav__icons"
            ></ion-icon>
            <span className="side-nav__options">Resturants</span>
          </Link>
        </li>

        <li className={`side-nav__options__list  ${displayActive(refunds)}`}>
          <Link>
            <ion-icon
              name="wallet-outline"
              className="side-nav__icons"
            ></ion-icon>
            <span className="side-nav__options">Refunds</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// use react memo to keeo this from rerendering

export default SideNav;
