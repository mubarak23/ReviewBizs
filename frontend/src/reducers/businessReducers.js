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
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_RESET,
  CREATE_BUSINESS_SUCCESS,
  CREATE_BUSINESS_FAIL,
  ADMIN_BUSINESS_LISTS_REQUEST,
  ADMIN_BUSINESS_LISTS_SUCCESS,
  ADMIN_BUSINESS_LISTS_FAIL,
  UPDATE_BUSINESS_REQUEST,
  UPDATE_BUSINESS_SUCCESS,
  UPDATE_BUSINESS_RESET,
  UPDATE_BUSINESS_FAIL,
  BUSINESS_DETAILS_RESET,
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
    case BUSINESS_DETAILS_RESET:
      return {};
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

export const businessCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BUSINESS_REQUEST:
      return { loading: true };
    case CREATE_BUSINESS_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case CREATE_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    case CREATE_BUSINESS_RESET:
      return {};
    default:
      return state;
  }
};

export const UpdateBusinessReducer = (state = { business: {} }, action) => {
  switch (action.type) {
    case UPDATE_BUSINESS_REQUEST:
      return { loading: true };
    case UPDATE_BUSINESS_SUCCESS:
      return { loading: false, success: true, business: action.payload };
    case UPDATE_BUSINESS_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_BUSINESS_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const adminBusinessListsReducer = (
  state = { businesses: [] },
  action
) => {
  switch (action.type) {
    case ADMIN_BUSINESS_LISTS_REQUEST:
      return { loading: true, businesses: {} };
    case ADMIN_BUSINESS_LISTS_SUCCESS:
      return { loading: false, businesses: action.payload };
    case ADMIN_BUSINESS_LISTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
