const initialState = {
	data:[],
    isLoading:false,
    isError: false
}

export default product = (state = initialState, action) => {
	switch (action.type){

        // ACTION GET
		case 'GET_PRODUCT_PENDING':
			return{
				isLoading: true
			}
		case 'GET_PRODUCT_REJECTED':
                console.log(action.payload)
                console.warn(action.payload)
			return{
                isLoading: false,
                isError: true
			}
		case 'GET_PRODUCT_FULFILLED':
            console.log(action.payload)
            console.warn(action.payload)
			return {
                isLoading: false,
                isError: false,
				data: action.payload.data.data
            }
        case 'GET_WISHLIST_PENDING':
            return{
                isLoading:true,
                isError:false
            }
        case 'GET_WISHLIST_REJECTED':
            return{
                isLoading: false,
                isError:true
            }
        case 'GET_WISHLIST_FULFIELD':
            return{
                isLoading: false,
                isError:true,
                data: action.payload.data.data
            }

        // DEFAULT
        default:
            return state;
    }
}