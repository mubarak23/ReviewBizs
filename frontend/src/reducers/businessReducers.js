import {
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
  CREATE_REVIEW_REQUEST,
  CREATE_REIVIEW_SUCCESS,
  CREATE_REVIEW_FAIL,
  CREATE_REVIEW_RESET,
  USER_BUSINESS_REQUEST,
  USER_BUSINESS_SUCCESS,
  USER_BUSINESS_FAIL,
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
    case BUSINESS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const businessCreateReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_REVIEW_REQUEST:
      return { loading: true };
    case CREATE_REIVIEW_SUCCESS:
      return { loading: false, success: true };
    case CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const userBusinessReducer = (state = { businesses: [] }, action) => {
  switch (action.type) {
    case USER_BUSINESS_REQUEST:
      return { loading: true, businesses: {} };
    case USER_BUSINESS_SUCCESS:
      return { loading: false, businesses: action.payload };
    case USER_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
