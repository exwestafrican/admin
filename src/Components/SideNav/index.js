import React from "react";
import "./sideNav.css";

import url from "../../Path";

import SideNavLinks from "./component";

const SideNav = () => {
  const {
    dashboard,
    resturants,
    refunds,
    newOrders,
    ongoingOrders,
    acceptedOrders,
    completedOrders,
  } = url;

  const navLinks = [
    // {
    //   url: dashboard,
    //   iconName: "home-outline",
    //   linkName: "Dashboard",
    // },
    {
      url: newOrders,
      iconName: "pizza-outline",
      linkName: "New Orders",
    },
    {
      url: ongoingOrders,
      iconName: "document-outline",
      linkName: "Processing",
    },
    {
      url: acceptedOrders,
      iconName: "file-tray-outline",
      linkName: "Accepted",
    },
    {
      url: completedOrders,
      iconName: "checkmark-outline",
      linkName: "Completed",
    },
    
    {
      url: resturants,
      iconName: "restaurant-outline",
      linkName: "Resturants",
    },
    // {
    //   url: refunds,
    //   iconName: "wallet-outline",
    //   linkName: "Refunds",
    // },
  ];
  console.log("Rerendering");
  return (
    <nav className="side-nav">
      <ul className="side-nav__options">
        {navLinks.map((links) => (
          <SideNavLinks
            key={links.linkName}
            url={links.url}
            iconName={links.iconName}
            linkName={links.linkName}
          />
        ))}
      </ul>
    </nav>
  );
};

// don't use react.memo so active tag appears

export default SideNav;
