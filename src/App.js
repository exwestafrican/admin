import React from "react";
import url from "./Path";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

import OrderPage from "./Pages/Orders";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={url.login} exact component={Login} />
        <ProtectedRoute path={url.orders} exact component={OrderPage} />
      </Switch>
    </Router>
  );
}

export default App;
