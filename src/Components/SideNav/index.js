import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-logo"></div>

      <div className="side-nav-functions">
        <h3 className="side-functions-headers">STATISTICS</h3>
        <div className="side-nav-functions-menu">
          <ul className="side-nav-functions-ul">
            <li className="side-nav-functions-li ">
              {" "}
              <a>Overview</a>
            </li>
            <li className="side-nav-functions-li ">
              {" "}
              <a>Orders</a>
            </li>
            <li className="side-nav-functions-li">
              {" "}
              <a>Deliveries</a>
            </li>
          </ul>
        </div>

        <h3 className="side-functions-headers">NOTIFICATIONS</h3>
        <div className="side-nav-functions-menu">
          <ul className="side-nav-functions-ul">
            <li className="side-nav-functions-li active">
              {" "}
              <a>Orders</a>
            </li>
            <li className="side-nav-functions-li">
              {" "}
              <a>Resturants</a>
            </li>
            <li className="side-nav-functions-li">
              {" "}
              <a>Transactions</a>
            </li>
          </ul>
        </div>

        <h3 className="side-functions-headers">SETTINGS</h3>
        <div className="side-nav-functions-menu">
          <ul className="side-nav-functions-u" l>
            <li className="side-nav-functions-li">
              {" "}
              <a>Add Resturants</a>
            </li>
            <li className="side-nav-functions-li">
              {" "}
              <a>Add Food Items</a>
            </li>
            <li className="side-nav-functions-li">
              {" "}
              <a>Refunds</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="side-nav-profile">
        <img
          src="img/profile%20pic.jpg"
          alt="user-name"
          className="round-image"
        />
        <span>Godis Nkwobi</span>
      </div>
    </nav>
  );
};

export default SideNav;
