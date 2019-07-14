import axios from "axios";
let URL = "https://clone-bhineka.herokuapp.com";

export const getUser = (id) => {
  return {
    type: "GET_USER",
    payload: axios.get(URL + "/user/"+ id)
  };
};


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

export const getHistory = getID => {
  return {
    type: "REQ_HISTORY",
    payload: axios.get(URL + `/transaction?id=${getID}`)
  }
}

export const getCart = getID => {
  return {
    type: "REQ_CART",
    payload: axios.get(URL + `/cart/${getID}`)
  }
}

export const regItems = dataReg => {
  console.log("XXXXXX");
  console.log(dataReg);
  let data = new FormData();
  data.append("product", dataReg.product);
  data.append("price", dataReg.price);
  data.append("description", dataReg.description);
  data.append("image", {
    uri: dataReg.image.uri,
    name: dataReg.image.fileName,
    type: "image/jpg"
  });
  data.append("id_user", dataReg.id_user);
  data.append("id_category", dataReg.id_category);
  data.append("id_variant", dataReg.id_variant);

  console.log("=======");
  console.log(data);

  return {
    type: 'ADD_PRODUCT',
    payload: axios.post(URL + `/product`, data)
  }
}
