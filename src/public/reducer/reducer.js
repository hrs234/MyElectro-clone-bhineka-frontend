
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

    case "REQ_CART_PENDING":
      return{
        isLoading: true
      };
    case "REQ_CART_REJECTED":
      return{
        isError: true,
        isLoading: false
      };
    case "REQ_CART_FULFILLED":
      return{
        isLoading: false,
        isError: false,
        data: []
      };

    case "REQ_HISTORY_PENDING":
      return{
        ...state,
        isLoading: true
      };
    case "REQ_HISTORY_REJECTED":
      return{
        ...state,
        isLoading: false,
        isError: true
      };
    case "REQ_HISTORY_FULFILLED":
      console.log("STATE"+JSON.stringify(state));
      console.log("==========================================");
      console.log("ACTION"+JSON.stringify(action));
      return{
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data
      };
    

    case "ADD_PRODUCT_PENDING":
      return{

        isLoading: true
      }
    case "ADD_PRODUCT_REJECTED":
      return {
        isLoading: false,
        isError: true
      }
    case "ADD_PRODUCT_FULFILLED":
      return{
        isLoading: false,
        data: []
      }

    
    default:
      return state;
  }
};
