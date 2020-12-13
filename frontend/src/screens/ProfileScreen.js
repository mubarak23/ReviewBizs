import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserProfile } from "../actions/userAction.js";
const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userProfile);
  const { loading, error, user } = userDetails;
  console.log(user);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    console.log("execution reach this level");
    dispatch(getUserProfile());
    console.log("this is the point after dispatch is called");
  }, [userInfo, history, dispatch]);

  return (
    <div>
      <h5>The Profile Screen</h5>
      {user.name}
    </div>
  );
};

export default ProfileScreen;
