import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  businessListReducer,
  businessDetailsReducer,
  businessCreateReviewReducer,
} from "./reducers/businessReducers.js";

import {
  userRegisterReducer,
  userLoginReducer,
  userProfileReducer,
} from "./reducers/userReducer.js";

const reducer = combineReducers({
  businessList: businessListReducer,
  businessDetails: businessDetailsReducer,
  createReview: businessCreateReviewReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const middleware = [thunk];

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
