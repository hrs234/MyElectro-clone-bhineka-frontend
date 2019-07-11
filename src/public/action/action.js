import axios from "axios";
let URL = "https://clone-bhineka.herokuapp.com";

export const getCategory = () => {
  return {
    type: "GET_CATEGORY",
    payload: axios.get(URL + "/category")
  };
};
export const loginUser = dataLogin => {
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/auth", dataLogin)
  };
};

export const regUser = dataReg => {
  // console.log("XXXXXX");
  // console.log(dataReg);
  let data = new FormData();
  data.append("birth_date", dataReg.birth_date);
  data.append("email", dataReg.email);
  data.append("first_name", dataReg.first_name);
  data.append("image", {
    uri: dataReg.image.uri,
    name: dataReg.image.fileName,
    type: "image/jpg"
  });
  data.append("gender", dataReg.gender);
  data.append("last_name", dataReg.last_name);
  data.append("password", dataReg.password);
  data.append("phone_number", dataReg.phone_number);

  // console.log("=======");
  // console.log(data);
  
  return {
    type: "REG_USER",
    payload: axios.post(URL + "/user", data)
  };
};
