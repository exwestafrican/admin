import io from "socket.io-client";
import { BASE_URL } from "./Path";
export const socket = io(BASE_URL);
