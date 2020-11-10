// import React, { useEffect, useState, useRef } from "react";
import React from "react";
import OrdersComponent from "./component";
import "./orders.css";
import { socket } from "../../sockets";
import { withRouter } from "react-router-dom";

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allOrder: [],
      currentPath: "",
    };
  }
  get currentPath() {
    return this.props.history.location.pathname;
  }

  componentDidMount() {
    // sockets listens for order events
    socket.on("order", (data) => {
      // do stuff
      // on order update state
      console.log(data);
      this.setState({
        allOrder: [data],
      });
      this.render();
      // send alert
    });
  }

  render() {
    return (
      <OrdersComponent
        currentPath={this.currentPath}
        allOrders={this.state.allOrder}
        newOrder={this.state.allOrder}
      />
    );
  }
}

export default withRouter(Orders);
