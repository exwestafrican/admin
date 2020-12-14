import React from "react";
import "./order.css";
import { formatDateTime,formatTime } from "../../utils";
import { useHistory } from "react-router-dom";
import url from "../../Path";

const Order = ({
  requestId,
  subTotal,
  fee,
  address,
  restaurantName,
  createdAt,
  phoneNumber,
  status,
  schoolName,

}) => {
 
  const total = subTotal + fee;
  const date = formatDateTime(createdAt);
  const location = address;
  const history = useHistory();
  const { newOrders } = url;
  const time = formatTime(createdAt)

  return (
    <tr
      className="hover-color"
      onClick={() => history.push(`${newOrders}/${requestId}`)}
    >
      <td>{status}</td>
      <td>{requestId}</td>
      <td>{phoneNumber}</td>
      <td>{restaurantName}</td>
      <td>{location}</td>
      <td>{schoolName}</td>
      <td>{total}</td>
      <td>{date}</td>
      <td>{time}</td>
    </tr>
  );
};

export default Order;
