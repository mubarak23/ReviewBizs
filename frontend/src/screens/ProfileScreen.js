import React, { useState, useEffect } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
//import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserProfile } from "../actions/userAction.js";
import { getUserBusiness } from "../actions/businessActions.js";
//import businesses from "../../../backend/data/business";
const ProfileScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userProfile);
  const { loading, error, user } = userDetails;
  console.log(user);

  const mybusiness = useSelector((state) => state.userbusiness);
  const {
    loading: loadingbusiness,
    error: errorbusiness,
    businesses,
  } = mybusiness;

  console.log(businesses);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("this is the first point of contact");
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    console.log("execution reach this level");
    dispatch(getUserProfile());
    dispatch(getUserBusiness());
    setName(user.name);
    setEmail(user.email);
    console.log("this is the point after dispatch is called");
  }, [userInfo, history, dispatch]);

  return (
    <Row>
      <Col md={4}>
        <h2>User Profile</h2>

        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={8}>
        <h2>My Business</h2>
        {loadingbusiness ? (
          <Loader />
        ) : errorbusiness ? (
          <Message variant="danger">{errorbusiness}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>RATING</th>
              </tr>
            </thead>
            <tbody>
              {businesses &&
                businesses.map((business) => (
                  <tr key={business._id}>
                    <td>
                      <Link to={`/business/${business._id}`}>
                        {business._id}
                      </Link>
                    </td>
                    <td>{business.name}</td>
                    <td>{business.category}</td>
                    <td>{business.rating}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
