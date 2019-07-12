import { AsyncStorage } from "react-native";
const initialState = {
  number: 10,
  data: [],
  results: [],
  isLoading: false,
  isError: false
};

export default (auth = async (state = initialState, action) => {
  switch (action.type) {
    //LOGIN USER
    case "LOGIN_USER_PENDING":
      return {
        isLoading: true
      };
    case "LOGIN_USER_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "LOGIN_USER_FULFILLED":
      // console.log("XXXXXXXX");
      // console.log(action.payload.data);
      // console.log(action.payload.data.message);
      console.log(action.payload.data.token);
      // console.log(action.payload.data.rows[0]);//getuser
      await AsyncStorage.setItem("token", action.payload.data.token);
      await AsyncStorage.setItem("user", action.payload.data.rows[0]);
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data
      };
    default:
      return state;
  }
});
