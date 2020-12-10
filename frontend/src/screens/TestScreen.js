import React, { useEffect, useState } from "react";
import { business_details } from "../actions/businessActions.js";
import { useSelector, useDispatch } from "react-redux";

const TestScreen = ({ match }) => {
  const dispatch = useDispatch();
  const businessDetail = useSelector((state) => state.businessDetails);
  const { loading, error, business } = businessDetail;
  console.log(business);
  useEffect(() => {
    dispatch(business_details("5fcf0fd5795f190fa34c362b"));
  }, [dispatch]);
  return (
    <div>
      <h5>checking what useFeect is returning </h5>
    </div>
  );
};

export default TestScreen;
