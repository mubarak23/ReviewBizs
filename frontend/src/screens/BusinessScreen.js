import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { business_details } from "../actions/businessActions.js";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";

const BusinessScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const businessDetail = useSelector((state) => state.businessDetails);
  const { loading, error, business } = businessDetail;
  console.log(business);
  useEffect(() => {
    console.log("this is the first point of dispatch");
    dispatch(business_details(match.params.id));
    dispatch(business_details("5fcf0fd5795f190fa34c362b"));
  }, [dispatch]);

  return (
    <>
      <Link to="/">Back</Link>

      {loading ? (
        //<h2>Loading...</h2>
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            <Col md={6}>
              <Image src={business.image} alt={business.name} fluid />
            </Col>
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{business.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  Description: {business.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>

              <h5>Customer Review Goes Here</h5>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BusinessScreen;
