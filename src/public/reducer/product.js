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
			return{
                isLoading: false,
                isError: true
			}
		case 'GET_PRODUCT_FULFILLED':
            console.log('tess')
			return {
                isLoading: false,
                isError: false,
				data: action.payload.data.data
            }

        // DEFAULT
        default:
            return state;
    }
}