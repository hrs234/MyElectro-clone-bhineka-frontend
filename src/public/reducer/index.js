import { combineReducers } from 'redux';

// import all reducers
import reducer from './reducer';
import auth from './auth';
import category from './category';
import product from './product';
// combine them
const appReducer = combineReducers({
    reducer,
    auth,
    product,
    category 
})

export default appReducer;