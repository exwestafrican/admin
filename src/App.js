import React from "react";
import url from "./Path";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

import OrderPage from "./Pages/Orders";
import ResturantsPage from "./Pages/Resturants";
import Login from "./Pages/Login";
import ResturantContentPage from "./Pages/ResturantContentPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderDetailPage from "./Pages/OrderDetailPage";


function App() {
  return (
    <Router>
      <Switch>
        <Route path={url.home} exact component={Login} />
        <Route path={url.login} exact component={Login} />
        <ProtectedRoute path={url.newOrders} exact component={OrderPage} />
        <ProtectedRoute path={url.ongoingOrders} exact component={OrderPage} />
        <ProtectedRoute
          path={url.completedOrders}
          exact
          component={OrderPage}
        />
        <ProtectedRoute
          path={url.resturants}
          exact
          component={ResturantsPage}
        />
        <ProtectedRoute path="/orders/:id" exact component={OrderDetailPage} />
        <ProtectedRoute
          path="/resturants/:id"
          exact
          component={ResturantContentPage}
        />
        {/* <Route component={Error} /> */}
      </Switch>
    </Router>
  );
}

export default App;
