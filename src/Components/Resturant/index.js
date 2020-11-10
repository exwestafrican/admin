import React from "react";
import "./resturant.css";
import resturantImg from "../../img/profile.jpg";
import { toSentenceCase } from "../../utils";
import url from "../../Path"
import {Link} from "react-router-dom"

const Resturant = ({
  id,
  restaurantName,
  location,
  handleOnChange,
  status,
  schoolName,
}) => {
  // need it to return revenue for the day , status
  schoolName = toSentenceCase(schoolName);

  return (
    <Link className="resturant" to={url.resturants + "/"+id} style={{ textDecoration: "none", color:"#333"}}>
      <img src={resturantImg} alt="" className="resturant__img" />
      <div className="resturant__info">
        <div class="shadow-sm p-3 mb-1 bg-white rounded">
          <h3 className="resturant__info__name"> {restaurantName}</h3>
          <p>{schoolName}</p>
          <small> {location}</small>
          <h5>
            {" "}
            <span>NGN</span> 0.00
          </h5>
          <div className="resturant__status">
            <div className=" custom-switch ">
              <input
                type="checkbox"
                className="custom-control-input"
                id={id}
                // checked={false}
                onChange={handleOnChange}
              />
              <label
                className="custom-control-label resturant__status__toggle"
                htmlFor={id}
              ></label>
            </div>
            <div>
              <small className="on">
                {status === "open" ? "open" : "closed"}
              </small>
            </div>
          </div>
        </div>
      </div>
 
    </Link>
  );
};

export default Resturant;
