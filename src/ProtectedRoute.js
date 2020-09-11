import React from "react";
import { Route, Redirect } from "react-router-dom";
import user from "./auth";
import url from "./Path";

const ProtectedRoute = ({ component: Component, ...args }) => {
  const { login } = url;

  const propsToRender = (props) => {
    if (user.isAuthenticated) return <Component {...props} />;
    else {
      const redirectArgs = {
        pathname: login,
        state: {
          from: props.location,
        },
      };
      return <Redirect to={redirectArgs} />;
    }
  };

  return <Route {...args} render={propsToRender} />;
};

export default ProtectedRoute;
