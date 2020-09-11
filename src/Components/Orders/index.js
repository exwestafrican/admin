// import React, { useEffect, useState, useRef } from "react";
import React from "react";
import Order from "../Order";
import "./orders.css";
import url, { BASE_URL } from "../../Path";
import { socket } from "../../sockets";
const { apiOrders } = url;

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNotifications: [],
    };
  }

  componentDidMount() {
    fetch(BASE_URL + apiOrders, {
      method: "GET",
    })
      .then((r) => r.json())
      .then((jsonResponse) => jsonResponse.data)
      .then((data) =>
        this.setState({ orderNotifications: [...data.response] })
      );

    // turn sockent on
    socket.on("order", (data) => {
      // do stuff
      // on order update state
      this.setState({
        orderNotifications: [data, ...this.state.orderNotifications],
      });
      // send alert
    });
  }

  render() {
    return (
      <main className="content">
        <div className="scrollable">
          <table className="table table-hover table-borderless">
            <thead>
              <tr>
                <th scope="col">Status</th>
                <th scope="col">Reference</th>
                <th scope="col">Mobile</th>
                <th scope="col">Cafe</th>
                <th scope="col">Hostel</th>
                <th scope="col">University</th>
                <th scope="col">Total</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.orderNotifications.map((notification) => {
                const {
                  requestId,
                  subTotal,
                  fee,
                  address,
                  restaurantName,
                  createdAt,
                  id,
                } = notification;
                return (
                  <Order
                    key={id}
                    requestId={requestId}
                    subTotal={subTotal}
                    fee={fee}
                    address={address}
                    restaurantName={restaurantName}
                    createdAt={createdAt}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Orders;
