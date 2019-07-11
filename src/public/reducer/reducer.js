const initialState = {
  number: 10,
  data: [],
  results: [],
  isLoading: false,
  isError: false
};
let reducer
export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REG_USER_PENDING": // in case when loading get data
      return {
        isLoading: true
      };
    case "REG_USER_REJECTED": // in case error network/else
      return {
        isLoading: false,
        isError: true
      };
    case "REG_USER_FULFILLED": // in case successfuly get data
      return {
        isLoading: false,
        isError: false,
        data: []
      };
    default:
      return state;
  }
};
