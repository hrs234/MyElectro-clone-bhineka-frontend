const initialState = {
	data:[],
    isLoading:false,
    isError: false
}

export default keranjang = (state = initialState, action) => {
	switch (action.type) {
        //LOGIN USER
        case "GET_CART_PENDING":
          return {
            isLoading: true
          };
        case "GET_CART_REJECTED":
          return {
            isLoading: false,
            isError: true
          };
        case "GET_CART_FULFILLED":
          return {
            isLoading: false,
            isError: false,
            data: action.payload.data.data
          };
        default:
          return state;
      }
}