const initialState = {
	data:[],
    isLoading:false,
    isError: false
}

export default category = (state = initialState, action) => {
	switch (action.type){

        // ACTION GET
		case 'GET_CATEGORY_PENDING':
			return{
				isLoading: true
			}
		case 'GET_CATEGORY_REJECTED':
			return{
                isLoading: false,
                isError: true
			}
		case 'GET_CATEGORY_FULFILLED':
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