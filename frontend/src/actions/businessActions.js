import axios from "axios";
import {
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_SUCCESS,
  BUSINESS_DETAILS_FAIL,
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
