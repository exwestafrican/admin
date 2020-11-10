import url, { BASE_URL } from "./Path";
import { localStorageDict } from "./localStorage";
import jwt from "jsonwebtoken";
import { socket } from "./sockets";
import { generalErrorMessage } from "./utils";

const { ApiLogin, newOrders } = url;
const {
  RemoveFromStorage,
  getItemFromLocalStorage,
  storeInStorage,
  ItemInStorage,
} = localStorageDict;
const userToken = "userToken";

class User {
  login(email, password, sucess, failed) {
    // set this.isAuthenticated to true
    const credentials = {
      email,
      password,
    };
    console.log("base_url",process.env.REACT_APP_DEVELOPMENT_ENVIROMENT)
    const request = new Request(BASE_URL + ApiLogin, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    fetch(request)
      .then((r) => r.json())
      .then((r) => {
        if (r.status === "success") {
          const userName = r.data.userName;
          const authToken = r.data.token;
          const expire = r.data.expireDuration;
          //    hash email

          const token = jwt.sign(
            { email, userName, authToken },
            process.env.REACT_APP_SECRET_KEY,
            { expiresIn: expire }
          );
          storeInStorage(userToken, token);
          sucess(newOrders);
        } else if (r.status === "error") {
          failed("invlaid email or password");
        }
      })
      .catch((r) => failed(generalErrorMessage));
  }

  logout(cb) {
    RemoveFromStorage(userToken);
    // on logout stop server events
    // on logout close connection
    socket.disconnect();
    cb();
  }

  getDetails(attribute) {
    const token = getItemFromLocalStorage(userToken);
    if (jwt.decode(token)[attribute] === undefined) {
      return null;
    }
    return jwt.decode(token)[attribute];
  }

  get isAuthenticated() {
    return this.authenticated();
  }

  authenticated() {
    // check if user has token in local storage
    // if yes, send a post request to verify if token is valid
    // else user is not authennticated
    if (ItemInStorage(userToken)) {
      try {
        const token = getItemFromLocalStorage(userToken);
        jwt.verify(token, process.env.REACT_APP_SECRET_KEY);
        return true;
      } catch (err) {
        //  if error, user doesn't have a valid toke
        return false;
      }
      // check if auth token is valid
    } else return false;
  }
}

export default new User();
