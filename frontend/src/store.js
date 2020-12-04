import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  businessListReducer,
  businessDetailsReducer,
} from "./reducers/businessReducers.js";

const initialState = {};
const reducer = combineReducers({
  businessList: businessListReducer,
  businessDetails: businessDetailsReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
