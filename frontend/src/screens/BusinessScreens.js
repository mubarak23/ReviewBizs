import React, { useEffect, useState } from "react";
import {
  business_details,
  createBusinessReview,
} from "../actions/businessActions.js";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import Rating from "../components/Rating.js";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { CREATE_REVIEW_RESET } from "../constants/businessConstant";

const BusinessScreens = ({ match }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  console.log(match.params.id);
  const id = match.params.id;
  const businessDetail = useSelector((state) => state.businessDetails);
  const { loading, error, business } = businessDetail;
  console.log(business);
  const BusinessReviewCreate = useSelector((state) => state.createReview);
  const {
    success: successBusinessreview,
    error: errorBusinessReview,
    loading: loadingBusinessReview,
  } = BusinessReviewCreate;
  useEffect(() => {
    if (successBusinessreview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      setEmail("");
      setName("");
      dispatch({ type: CREATE_REVIEW_RESET });
    }
    //dispatch(business_details("5fcf0fd5795f190fa34c362b"));
    console.log("This is before dispatch is called");
    dispatch(business_details(id));
    console.log("This is after dispatch is called");
  }, [dispatch, id, successBusinessreview]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("This is the first add review");
    const data = { name, email, rating, comment };
    console.log(data);
    dispatch(createBusinessReview(match.params.id, data));
  };
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
                <ListGroup.Item>Category: {business.category}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {business.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {business.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  <h2>Write a Customer Review</h2>
                  {successBusinessreview && (
                    <Message variant="success">
                      Review submitted successfully
                    </Message>
                  )}
                  {loadingBusinessReview && <Loader />}
                  {errorBusinessReview && (
                    <Message variant="danger">{errorBusinessReview}</Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <ListGroup>
                <ListGroup.Item>
                  <Form onSubmit={submitHandler}>
                    <Form.Group controlId="rating">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      ></Form.Control>
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      ></Form.Control>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        as="select"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="comment">
                      <Form.Label>Comment</Form.Label>
                      <Form.Control
                        as="textarea"
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                    <Button
                      disabled={loadingBusinessReview}
                      type="submit"
                      variant="primary"
                    >
                      Submit
                    </Button>
                  </Form>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default BusinessScreens;
