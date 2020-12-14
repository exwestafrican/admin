import React, { useState, useEffect } from "react";
import CustomerOrderDetail from "../CustomerOrderDetail";
import "./orderDetail.css";
import { fetchOrderDetail, changeOrderStatus } from "../../Api";

import { withRouter, useRouteMatch } from "react-router-dom";
import Recipt from "../Reciept";
import { orderStatus } from "../../utils";

const OrderDetail = () => {
  const requestId = useRouteMatch().params.id;
  const [state, setState] = useState({
    address: "Loading...",
    schoolName: "Loading...",
    firstName: "Loading...",
    phoneNumber: "Loading...",
    requestId: "Loading...",
    paymentMethod: "Loading...",
    email: "Loading...",
    restaurantName: "Loading...",
    status: "",
    orderList: [],
    subTotal: 0,
    fee: 0,
    isLoading: true,
  });

  useEffect(() => {
    const getOrderDetail = async (id) => {
      const response = await fetchOrderDetail(id);
      if (response.status == "success") {
        const {
          address,
          schoolName,
          firstName,
          phoneNumber,
          requestId,
          paymentMethod,
          email,
          orderList,
          subTotal,
          fee,
          restaurantName,
          status,
        } = response.data.response[0];
        setState({
          address,
          schoolName,
          firstName,
          phoneNumber,
          requestId,
          paymentMethod,
          email,
          restaurantName,
          orderList,
          subTotal,
          fee,
          status,
          isLoading: false,
        });
      }
    };
    getOrderDetail(requestId);
  }, []);

  const updateOrderStatus = (orderRefrence, status) => {
    console.log("here")
    setState({ ...state, isLoading: true });
    console.log(status)
    changeOrderStatus(orderRefrence, status, success);
  };

  const success = () => {
    setState({ ...state, isLoading: false });
  };

  const DisplayButton = ({ status }) => {
    switch (status) {
      case orderStatus.accepted:
        return (
          <div className="make-parallel">
            <button
              className="btn btn-success"
              onClick={() =>
                updateOrderStatus(state.requestId, orderStatus.completed)
              }
            >
              {state.isLoading ? "LOADING..." : "COMPLETED"}
            </button>
            <button className="btn btn-outline-dark">Refund</button>
          </div>
        );

      case orderStatus.completed:
        return <div className="make-parallel"></div>;

      default:
        return (
          <div className="make-parallel">
            <button
              className="btn btn-success"
              onClick={() =>
                updateOrderStatus(state.requestId, orderStatus.accepted)
              }
            >
              {state.isLoading ? "LOADING..." : "ACCEPTED"}
            </button>
            <button className="btn btn-outline-dark">Reject</button>
          </div>
        );
    }
  };

  return (
    <main className="content my-container top-margin split-content">
      <CustomerOrderDetail
        address={state.address}
        firstName={state.firstName}
        phoneNumber={state.phoneNumber}
        requestId={state.requestId}
        schoolName={state.schoolName}
        paymentMethod={state.paymentMethod}
        email={state.email}
        restaurantName={state.restaurantName}
      />
      <div className="scrollable product-details">
        <DisplayButton status={state.status} />
        <Recipt
          orderList={state.orderList}
          subTotal={state.subTotal}
          fee={state.fee}
        />
      </div>
    </main>
  );
};

export default withRouter(OrderDetail);
