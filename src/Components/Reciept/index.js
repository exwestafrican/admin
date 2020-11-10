import React from "react";
import "./reciept.css";
const Recipt = ({ orderList, subTotal, fee }) => {
  const taxRate = 0;
  const tax = taxRate * subTotal;
  const total = subTotal + fee + tax;
  const OrderItem = ({ item }) => {
    return (
      <tr>
        <th scope="row">{item.name}</th>
        <td className="text-align-right">{item.quantity}</td>
        <td className="text-align-right">{item.amount / item.quantity}</td>
        <td className="text-align-right">{item.amount}</td>
      </tr>
    );
  };
  return (
    <table className="table top-margin">
      <thead className="thead-light">
        <tr>
          <th scope="col">Desc</th>
          <th className="text-align-right" scope="col">
            Qty
          </th>
          <th className="text-align-right" scope="col">
            Unit
          </th>
          <th className="text-align-right" scope="col">
            Sum
          </th>
        </tr>
      </thead>
      <tbody>
        {orderList.map((orderItem) => {
          return <OrderItem key={orderItem.id} item={orderItem} />;
        })}

        <tr>
          <td rowSpan="4"></td>
          <td colSpan="2"> Subtotal</td>
          <td className="text-align-right">{subTotal}</td>
        </tr>
        <tr>
          <td colSpan="2">Delivery</td>
          <td className="text-align-right">{fee}</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td className="text-align-right">{`${taxRate * 100}%`}</td>
          <td className="text-align-right">{tax}</td>
        </tr>
        <tr>
          <td colSpan="2">Total</td>
          <td className="text-align-right">{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Recipt;
