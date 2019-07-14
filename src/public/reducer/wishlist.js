const initialState = {
    data:[],
    isLoading: false,
    isError:false
}

export default wishlist = (state = initialState, action) =>{
    switch(action.type){
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
        default:
            return state;
    }
}

