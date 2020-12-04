import {
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
} from "../constants/businessConstant.js";

export const businessListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case BUSINESS_LIST_REQUEST:
      return { loading: true, businesses: {} };
    case BUSINESS_LIST_SUCCESS:
      return { loading: false, businesses: action.payload };
    case BUSINESS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
