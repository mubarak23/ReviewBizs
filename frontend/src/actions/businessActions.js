import axios from "axios";
import {
  BUSINESS_LIST_REQUEST,
  BUSINESS_LIST_SUCCESS,
  BUSINESS_LIST_FAIL,
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
