import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { business_details, updateBusiness } from "../actions/businessActions";
import { UPDATE_BUSINESS_RESET } from "../constants/businessConstant";

const BusinessEditScreen = ({ history, match }) => {
  const buusinessId = match.params.id;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();
  const businessDetail = useSelector((state) => state.businessDetails);
  const { loading, error, business } = businessDetail;

  const UpdateBusiness = useSelector((state) => state.UpdateBusiness);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = UpdateBusiness;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: UPDATE_BUSINESS_RESET });
      history.push("/admin/businesslist");
    }
    if (!business.name || business._id !== businessId) {
      dispatch(business_details(productId));
    } else {
      setName(business.name);
      setCategory(business.category);
      setImage(business.image);
      setDescription(business.description);
    }
  }, [dispatch, business]);
  return (
    <>
      <Link to="/admin/productlist">Go Back</Link>
      <FormContainer>
        <h2>Edit Business</h2>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <form onSubmit={submitHandle}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.File
                id="image-file"
                label="select Image"
                name="image"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update User
            </Button>
          </form>
        )}
      </FormContainer>
    </>
  );
};

export default BusinessEditScreen;
