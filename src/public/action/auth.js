import axios from "axios";
let URL = "https://clone-bhineka.herokuapp.com";

export const loginUser = dataLogin => {
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/auth", dataLogin)
  };
};
