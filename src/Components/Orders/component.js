import React, { useState, useEffect } from "react";
import Empty from "../Empty";
import Loading from "../Loading";
import Order from "../Order";
import url from "../../Path";

import {
  fetchNewOrders,
  fetchCompletedOrders,
  fetchOngoingOrders,
  fetchAcceptedOrders
} from "../../Api";

const { newOrders, ongoingOrders, completedOrders,acceptedOrders } = url;

const OrdersComponent = ({ currentPath, newOrder }) => {
  const [state, setState] = useState({
    isLoading: true,
    allOrder: [],
  });



  const fetchRequiredOrders = (currentPath) => {
    const currentFunction = {
      [newOrders]: fetchNewOrders,
      [completedOrders]: fetchCompletedOrders,
      [ongoingOrders]: fetchOngoingOrders,
      [acceptedOrders]:fetchAcceptedOrders,
    };
    return currentFunction[currentPath]();
  };

  const getData = async () => {
    const result = await fetchRequiredOrders(currentPath);
    setState({
      allOrder: [...result.data.response],
      isLoading: false,
      newOrder: [],
    });
    // return result.data.response;
  };

  useEffect(() => {
    setState({ isLoading: true });
    getData();
  }, [currentPath]);

  useEffect(() => {
    // console.log("this is workinng!!", state.orderNotification, state.allOrder);
    if (newOrder.length !== 0) {
     
      setState({
        allOrder: [...newOrder, ...state.allOrder],
      });
    }
  }, [newOrder]);

  if (state.isLoading) return <Loading />;
  else if (state.allOrder.length === 0) return <Empty />;
  else
    return (
      <main className="content container">
        <div className="scrollable">
          <table className="table table-hover table-borderless table-striped ">
            <thead>
              <tr>
                <th scope="col">Status</th>
                <th scope="col">Reference</th>
                <th scope="col">Mobile</th>
                <th scope="col">Name</th>
                <th scope="col">Cafe</th>
                <th scope="col">Hostel</th>
                <th scope="col">University</th>
                <th scope="col">Total</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {state.allOrder.map((notification) => {
                const {
                  requestId,
                  subTotal,
                  fee,
                  address,
                  restaurantName,
                  createdAt,
                  id,
                  phoneNumber,
                  schoolName,
                  status,
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
                    id={id}
                    status={status}
                    phoneNumber={phoneNumber}
                    schoolName={schoolName}
                
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    );
};

export default OrdersComponent;
