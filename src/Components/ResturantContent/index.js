import React from "react";
import AttachSideNavAndHeader from "../../AttachSideNavAndHeader";
import "./resturantContent.css";
import ResturantLineItem from "../ResturantLineItem";
import { fetchResturantDetail } from "../../Api";
import { withRouter } from "react-router-dom";
import Loading  from "../Loading"

class ResturantContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resturantItems: [],
      isloading: true,
    };
  }
  componentDidMount() {
    const resturantId = this.props.match.params.id;
    const getResturantDetail = async (id) => {
      const results = await fetchResturantDetail(id);
      if (results.data == "NOT_FOUND") {
        //   redirect to 404
      } else {
        // const { items } = results.data.response;
        const { items } = results.data.response[0];
        this.setState({ resturantItems: items,isloading:false });
      }
    };
    getResturantDetail(resturantId);
  }

  displayContent = () => {
    if (this.state.isloading){
       return <Loading/>
    }
    else if (this.state.resturantItems.length){

      return this.state.resturantItems.map((item) => {
        const {
          name,
          category,
          baseAmount,
          amountPerAddition,
          available,
          itemId,
          restaurantId
        } = item;
        return (
          <ResturantLineItem
            key ={itemId}
            itemId={itemId}
            restaurantId={restaurantId}
            name={name}
            category={category}
            baseAmount={baseAmount}
            amountPerAddition={amountPerAddition}
            available={available}
          />
        );
      });
    }
    else {
      return <div>No Item in resturant</div>;
    }
  };


  render() {
    return (
      <main className="content container top-margin">
        <ul className="nav nav-tabs ">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              PRODUCT LIBRARY
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#">
              RESTURANT DETAIL
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>

        <div className="span-navigation container">
          <button
            type="button"
            className="btn btn-outline span-navigation__button "
          >
            <ion-icon name="add-outline"></ion-icon>ADD PRODUCT
          </button>
        </div>
        <div className="scrollable">
          <table className="table table-hover table-borderless table-striped">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Category</th>
                <th scope="col">In Stock</th>
                <th scope="col">Base Amount</th>
                <th scope="col">Additions</th>
              </tr>
            </thead>
            <tbody>{this.displayContent()}</tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default withRouter(ResturantContent);
