const url = {
  home: "/",
  newOrders: "/orders",
  ongoingOrders: "/orders/processing",
  completedOrders: "/orders/completed",
  acceptedOrders:"/orders/accepted",
  apiItem:"/v1/item",
  ApiLogin: "/v1/admin/login",
  apiOrders: "/v1/order?status=open",
  apiAcceptedOrders: "/v1/order?status=accepted",
  apiCompletedOrders: "/v1/order?status=completed",
  apiResturants: "/v1/restaurants",
  apiProcessingOrders: "/v1/order?status=processing",
  apiStatus:"/v1/order/status",
  login: "/login",
  signUp: "/signup",
  dashboard: "/dashboard",
  resturants: "/resturants",
  refunds: "/refunds",
};

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export default url;
