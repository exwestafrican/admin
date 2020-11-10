import React from "react";
import "./customerOrderDetail.css";
const CustomerOrderDetail = ({
  address,
  schoolName,
  firstName,
  phoneNumber,
  requestId,
  paymentMethod,
  email,
  restaurantName
}) => {
  return (
    <section className="customer-details">
      <div className="make-parallel top-margin">
        <div>
          <p>Refrence</p>
          <p>School</p>
          <p> Address</p>
          <p> Name </p>
          <p> Phone Number </p>
          <p>Payment Method</p>
          <p>Email</p>
          <p>Resturant</p>
        </div>
        <div className="text-align-right">
          <p>{requestId}</p>
          <p>{schoolName}</p>
          <p> {address}</p>
          <p> {firstName}</p>
          <p> {phoneNumber} </p>
          <p>{paymentMethod}</p>
          <p>{email}</p>
          <p>{restaurantName}</p>
        </div>
      </div>
    </section>
  );
};

export default CustomerOrderDetail;
