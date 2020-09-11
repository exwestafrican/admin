import React from "react";
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";

const AttachSideNavAndHeader = ({ component: Component, ...props }) => {
  return (
    <div>
      <Header />
      <section className="side-nav-main">
        <SideNav />
        <Component {...props} />
      </section>
    </div>
  );
};


export default AttachSideNavAndHeader;
