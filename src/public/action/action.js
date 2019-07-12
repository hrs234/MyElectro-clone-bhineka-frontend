import axios from "axios";
let URL = "https://clone-bhineka.herokuapp.com";

export const changePassword = (dataPassword) => {
  console.log('action');
  console.log(dataPassword);  
  return {
    type: "CHANGE_PASSWORD",
    payload: axios.patch(URL + "/forget",dataPassword)
  };
};
export const forgotUser = (dataForgot) => {
  console.log('action');
  console.log(dataForgot);  
  return {
    type: "FORGOT_USER",
    payload: axios.post(URL + "/mail",dataForgot)
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
