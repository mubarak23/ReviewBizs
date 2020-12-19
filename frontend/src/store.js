import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  businessListReducer,
  businessDetailsReducer,
  businessCreateReviewReducer,
  userBusinessReducer,
  businessCreateReducer,
  adminBusinessListsReducer,
  UpdateBusinessReducer,
} from "./reducers/businessReducers.js";

import {
  userRegisterReducer,
  userLoginReducer,
  userProfileReducer,
  userUpdateProfileReducer,
  userListsReducer,
} from "./reducers/userReducer.js";

const reducer = combineReducers({
  businessList: businessListReducer,
  businessDetails: businessDetailsReducer,
  createReview: businessCreateReviewReducer,
  userbusiness: userBusinessReducer,
  createBusiness: businessCreateReducer,
  adminBusinessLists: adminBusinessListsReducer,
  UpdateBusiness: UpdateBusinessReducer,

  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  updateuserProfile: userUpdateProfileReducer,
  userLists: userListsReducer,
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
