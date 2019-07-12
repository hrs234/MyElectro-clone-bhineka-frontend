import { combineReducers } from 'redux';

// import all reducers
import reducer from './reducer';
import auth from './auth';

// combine them
const appReducer = combineReducers({
    reducer,
    auth
})

export default appReducer;