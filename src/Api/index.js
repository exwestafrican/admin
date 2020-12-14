import { BASE_URL } from "../Path";
import { returnJson } from "../utils";
import url from "../Path";

const {
  apiResturants,
  apiOrders,
  apiCompletedOrders,
  apiProcessingOrders,
  apiAcceptedOrders,
  apiItem,
  apiStatus
} = url;

const config = { 
  method: "POST",
  headers: {
  "Content-Type": "application/json",
},
}
export const fetchAllResturants = async () => {
  const resturants = await fetch(BASE_URL + "/v1/restaurants", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (resturants.ok) {
    return resturants.json();
  }
  return false;
};

export const fetchOrderDetail = async (id) => {
  const orderDetail = await fetch(BASE_URL + "/v1/order?requestId=" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (orderDetail.ok) {
    return orderDetail.json();
  }
};

export const fetchResturantDetail = async (id) => {
  const resturantDetail = await fetch(
    `${BASE_URL}${apiResturants}/${id}?loadItems=true`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return returnJson(resturantDetail);
};

const genericOrderFetch = async (apiUrl) => {
  const orders = await fetch(BASE_URL + apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (orders.ok) {
    return orders.json();
  }
  // just return empty data
  // console.log("error");
  return {
    data: {
      response: [],
    },
  };
};

export const fetchNewOrders = async () => {
  const data = await genericOrderFetch(apiOrders);
  return data;
};

export const fetchCompletedOrders = async () => {
  const data = await genericOrderFetch(apiCompletedOrders);
  return data;
};

export const fetchOngoingOrders = async () => {
  const data = await genericOrderFetch(apiProcessingOrders);
  return data;
};

export const fetchAcceptedOrders = async ()=>{
  const data = await genericOrderFetch(apiAcceptedOrders)
  return data
}


export const updateItemStatus = async (item)=>{
  const response = await fetch (BASE_URL +apiItem,{
    method:"PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item)
  })
 if (response.ok){
   return response.json();
 }
}

export const changeOrderStatus = async(orderRefrence,changeStatusTo,successCallback)=>{
  const data = {
    requestId:orderRefrence,
    status:changeStatusTo
  }
  const response = await fetch(BASE_URL + apiStatus,{
    ...config,body: JSON.stringify(data)
  })
  if (response.ok){
    successCallback()
  }
}