import { combineReducers } from 'redux';

// import all reducers
import reducer from './reducer';
import auth from './auth';
import category from './category';
import product from './product';
import wishlist from './wishlist';
// combine them
const appReducer = combineReducers({
    reducer,
    auth,
    product,
    category,
    wishlist 
})

export default appReducer;