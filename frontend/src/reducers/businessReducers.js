import {
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
} from "../constants/businessConstant.js";

export const businessListReducer = (state = { businesses: [] }, action) => {
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

export const businessDetailsReducer = (
  state = { bussiness: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case BUSINESS_DETAILS_REQUEST:
      return { loading: true, ...state };
    case BUSINESS_DETAILS_SUCCESS:
      return { loading: false, business: action.payload };
    case BUSINESS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
