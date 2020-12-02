import React from "react";
import { Row, Col } from "react-bootstrap";
import Business from "../components/Business";
import businesses from "../business";

const HomeScreen = () => {
  return (
    <>
      <h3>Business Avaialable for review</h3>
      <Row>
        {businesses.map((business) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Business business={business} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
