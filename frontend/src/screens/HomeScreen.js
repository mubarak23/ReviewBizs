import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Business from "../components/Business";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { list_business, business_details } from "../actions/businessActions.js";
//import businesses from "../business";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const businessLists = useSelector((state) => state.businessList);
  const { loading, error, businesses } = businessLists;
  console.log(businesses);
  useEffect(() => {
    dispatch(list_business());
    //dispatch(business_details("5fcf0fd5795f190fa34c362b"));
  }, [dispatch]);

  return (
    <>
      <h3>Business Avaialable for review</h3>
      {loading ? (
        //<h2>Loading...</h2>
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {businesses.map((business) => (
              <Col sm={12} md={6} lg={4} xl={3}>
                <Business business={business} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
