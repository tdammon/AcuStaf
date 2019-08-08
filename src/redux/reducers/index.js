import { combineReducers } from 'redux';
import apiReducer from './apiReducer';


// rootReducer is the primary reducer for this project
// appReducer bundles up all of the other reducers so the project can use them.
// This is imported in index.js as rootSaga


// This is what we get when we use 'state' inside of 'mapStateToProps'
const appReducer = combineReducers({
  apiReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}


export default rootReducer;