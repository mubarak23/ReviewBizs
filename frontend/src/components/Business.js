import React from "react";
import { Card } from "react-bootstrap";
import businesses from "../business";

const Business = ({ business }) => {
  return (
    <Card className="y-3 py-3 rounded">
      <a href={`/business/${business._id}`}>
        <Card.Img src={business.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/business/${business._id}`}>
          <Card.Title as="div">
            <strong>{business.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="py-3">
            {business.rating} from {business.numReviews} Reviews
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Business;
