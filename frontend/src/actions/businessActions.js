import axios from "axios";
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
  USER_BUSINESS_REQUEST,
  USER_BUSINESS_SUCCESS,
  USER_BUSINESS_FAIL,
  CREATE_BUSINESS_REQUEST,
  CREATE_BUSINESS_FAIL,
  ADMIN_BUSINESS_LISTS_REQUEST,
  ADMIN_BUSINESS_LISTS_SUCCESS,
  ADMIN_BUSINESS_LISTS_FAIL,
  UPDATE_BUSINESS_REQUEST,
  UPDATE_BUSINESS_SUCCESS,
} from "../constants/businessConstant.js";

export const list_business = () => async (dispatch) => {
  try {
    dispatch({ type: BUSINESS_LIST_REQUEST });

    const { data } = await axios.get("/api/business");
    dispatch({
      type: BUSINESS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUSINESS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};

export const business_details = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BUSINESS_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/business/${id}`);
    dispatch({
      type: BUSINESS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BUSINESS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.message,
    });
  }
};

export const createBusinessReview = (businessId, review) => async (
  dispatch
) => {
  try {
    dispatch({
      type: CREATE_REVIEW_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/business/${businessId}/reviews`,
      review,
      config
    );

    dispatch({
      type: CREATE_REIVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REVIEW_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBusiness = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: CREATE_BUSINESS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/business`, {}, config);

    dispatch({
      type: CREATE_REIVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BUSINESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateBusiness = (business) => async (dispatch, getState) => {
  try {
    dispatch({
      type: UPDATE_BUSINESS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `/api/business/${business.id}`,
      business,
      config
    );
    dispatch({
      type: UPDATE_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BUSINESS_SUCCESS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserBusiness = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_BUSINESS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/business/mybusiness", config);
    dispatch({
      type: USER_BUSINESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_BUSINESS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBusinessLists = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_BUSINESS_LISTS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get("/api/business", config);
    dispatch({
      type: ADMIN_BUSINESS_LISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_BUSINESS_LISTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
