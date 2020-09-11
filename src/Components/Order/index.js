import React from "react";
import "./order.css";
import { formatDateTime } from "../../utils";

const Order = ({
  requestId,
  subTotal,
  fee,
  address,
  restaurantName,
  createdAt,
}) => {
  const total = subTotal + fee;
  const date = formatDateTime(createdAt);
  const [, location] = address.split(":");
  return (
    <tr>
      <td>
        <ion-icon name="checkmark-outline" className="read"></ion-icon>
      </td>
      <td>{requestId}</td>
      <td>081665790</td>
      <td>{restaurantName}</td>
      <td>{location}</td>
      <td>Convenant</td>
      <td>{total}</td>
      <td>{date}</td>
    </tr>
  );
};

export default Order;
