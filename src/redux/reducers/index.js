import addItems from "./addItem";
import userDetails from "./userDetails"
import { applyMiddleware, combineReducers } from 'redux';
import redduxthunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({ userDetails, addItems }, composeWithDevTools(applyMiddleware(redduxthunk)))
export default rootReducers