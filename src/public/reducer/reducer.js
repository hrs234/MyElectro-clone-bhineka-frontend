const initialState = {
  number: 10,
  data: [],
  results: [],
  isLoading: false,
  isError: false
};

export default reducer =  (state = initialState, action) => {
  switch (action.type) {

    case "CHANGE_PASSWORD_PENDING":
      return {
        isLoading: true
      };
    case "CHANGE_PASSWORD_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "CHANGE_PASSWORD_FULFILLED":
      console.log('XXXXXXX');
      console.log(action.payload.data);
      return {
        isLoading: false,
        isError: false,
        // data: action.payload.data
      };
    case "FORGOT_USER_PENDING":
      return {
        isLoading: true
      };
    case "FORGOT_USER_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "FORGOT_USER_FULFILLED":
      console.log('XXXXXXX');
      console.log(action.payload.data);
      return {
        isLoading: false,
        isError: false,
        data: action.payload.data
      };

    //REG USER
    case "REG_USER_PENDING":
      return {
        isLoading: true
      };
    case "REG_USER_REJECTED":
      return {
        isLoading: false,
        isError: true
      };
    case "REG_USER_FULFILLED":
      return {
        isLoading: false,
        isError: false,
        data: []
      };

    default:
      return state;
  }
};
