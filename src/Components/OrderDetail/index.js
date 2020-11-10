import React from "react";
import CustomerOrderDetail from "../CustomerOrderDetail";
import "./orderDetail.css";
import { fetchOrderDetail } from "../../Api";

import { withRouter } from "react-router-dom";
import Recipt from "../Reciept";

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Loading...",
      schoolName: "Loading...",
      firstName: "Loading...",
      phoneNumber: "Loading...",
      requestId: "Loading...",
      paymentMethod: "Loading...",
      email: "Loading...",
      restaurantName:"Loading...",
      orderList: [],
      subTotal: 0,
      fee: 0,
    };
  }

  componentDidMount() {
    const requestId = this.props.match.params.id;
    const getOrderDetail = async (id) => {
      const results = await fetchOrderDetail(id);
      if (results.status == "success") {
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
          restaurantName
        } = results.data.response[0];
          
        this.setState({
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
        });
      }
    };
    getOrderDetail(requestId);
  }

  render() {
    return (
      <main className="content my-container top-margin split-content">
        <CustomerOrderDetail
          address={this.state.address}
          firstName={this.state.firstName}
          phoneNumber={this.state.phoneNumber}
          requestId={this.state.requestId}
          schoolName={this.state.schoolName}
          paymentMethod={this.state.paymentMethod}
          email={this.state.email}
          restaurantName={this.state.restaurantName}
        />
        <div className="scrollable product-details">
          <div className="make-parallel">
            <button className="btn btn-success">Approve</button>
            <button className="btn btn-outline-dark">Reject</button>
          </div>
          {/* <div className="make-parallel" style="justify-content: flex-end;">
            <button className="btn btn-danger">Refund</button>
        </div>  */}
          <Recipt
            orderList={this.state.orderList}
            subTotal={this.state.subTotal}
            fee={this.state.fee}
          />
        </div>
      </main>
    );
  }
}

export default withRouter(OrderDetail);
