import React, {useState} from "react";
import {updateItemStatus} from "../../Api"

const ResturantLineItem = ({
  name,
  category,
  available,
  baseAmount,
  amountPerAddition,
  itemId,
  restaurantId
}) => {
  // let isAvailable = available === 1 ? true : false;
  const [isLoading, setIsLoading] = useState(false)
  const [isAvailable, updatedIsAvailable] = useState(available === 1 ? true : false)


const changeStatus = ()=>{
  setIsLoading(true)
  updatedIsAvailable(!isAvailable)
  
  const updateStatus = async ()=>{
    const data = {
      itemId,
      restaurantId,
      available:!isAvailable
    }

    const newStatus = await updateItemStatus(data)
    if (newStatus.status ==="success"){
      setIsLoading(false)
    }
 
  }
  updateStatus()

}
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            checked={isAvailable}
            className="custom-control-input"
            id={itemId}
            onClick={changeStatus}
            disabled={isLoading ? true: false}
          />
          <label
            className="custom-control-label"
            htmlFor={itemId}
          ></label>
        </div>
      </td>
      <td>{baseAmount}</td>
      <td>{amountPerAddition}</td>
    </tr>
  );
};

export default ResturantLineItem;
