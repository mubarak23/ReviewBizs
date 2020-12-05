import React, { useEffect, useState } from "react";
import { business_details } from "../actions/businessActions.js";
import { useSelector, useDispatch } from "react-redux";

const Home = ({ match }) => {
  const dispatch = useDispatch();
  const businessDetail = useSelector((state) => state.businessDetails);
  const { loading, error, business } = businessDetail;
  console.log(business);
  useEffect(() => {
    console.log("this is the first point of dispatch");
    dispatch(business_details(match.params.id));
  }, [dispatch]);
  return (
    <div>
      <h5>Home for testing useEffect</h5>
    </div>
  );
};

export default Home;
