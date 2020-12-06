import React, { useEffect, useState } from "react";
import { business_details } from "../actions/businessActions.js";
import { useSelector, useDispatch } from "react-redux";

const Home = ({ match, history }) => {
  const dispatch = useDispatch();
  const businessDetail = useSelector((state) => state.businessDetails);
  const { loading, error, business } = businessDetail;
  console.log(business);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo) {
      history.push("/user/login");
    }
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
