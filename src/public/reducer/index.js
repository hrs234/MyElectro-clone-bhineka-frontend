import { combineReducers } from 'redux';

// import all reducers
import reducer from './reducer';
import category from './category';
import product from './product';

// combine them
const appReducer = combineReducers({
    reducer, // auth reducer
    product,
    category // category reducer
})

export default appReducer;