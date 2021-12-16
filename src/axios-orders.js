import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-8a85a-default-rtdb.firebaseio.com/"
});

export default instance;
