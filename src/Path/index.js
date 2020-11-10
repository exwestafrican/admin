const url = {
  home: "/",
  newOrders: "/orders",
  ongoingOrders: "/orders/processing",
  completedOrders: "/orders/completed",
  apiItem:"/v1/item",
  ApiLogin: "/v1/admin/login",
  apiOrders: "/v1/order?status=open",
  apiCompletedOrders: "/v1/order?status=accepted",
  apiResturants: "/v1/restaurants",
  apiProcessingOrders: "/v1/order?status=processing",
  login: "/login",
  signUp: "/signup",
  dashboard: "/dashboard",
  resturants: "/resturants",
  refunds: "/refunds",
};

export const BASE_URL = "https://mobile-waiter-staging.herokuapp.com";
export default url;
