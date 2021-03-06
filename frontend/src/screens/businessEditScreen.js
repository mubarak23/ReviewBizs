import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { business_details, updateBusiness } from "../actions/businessActions";
import {
  UPDATE_BUSINESS_RESET,
  BUSINESS_DETAILS_RESET,
} from "../constants/businessConstant";

const BusinessEditScreen = ({ history, match }) => {
  const businessId = match.params.id;
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
    if (!business) {
      dispatch({ type: BUSINESS_DETAILS_RESET });
      console.log("this is the first dispatch");
      dispatch(business_details(businessId));
      console.log("this is the final dispatch");
    } else {
      setName(business.name);
      setCategory(business.category);
      setImage(business.image);
      setDescription(business.description);
    }
  }, [dispatch, history, businessId, business, successUpdate]);

  const uploadFileHandler = async (e) => {
    //{"error":{"message":"Missing required parameter - file"}}
    //{"error":{"message":"Upload preset must be specified when using unsigned upload"}}
    //{"error":{"message":"Missing required parameter - file"}}
    //{"error":{"message":"Missing required parameter - file"}}
    //{"error":{"message":"Upload preset not found"}}
    //{"error":{"message":"Upload preset must be specified when using unsigned upload"}}
    console.log("from uplad product image handler");
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bizReviews");
    formData.append("cloud_name", "techarewa-com");
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/techarewa-com/image/upload/",
        formData,
        config
      );
      setImage(data.url);
      console.log(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("this is the first hit here");
    dispatch(
      updateBusiness({
        _id: businessId,
        name,
        image,
        category,
        description,
      })
    );
    console.log("After update business action");
  };

  return (
    <>
      <Link to="/admin/businesslist">Go Back</Link>
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
              Update Business
            </Button>
          </form>
        )}
      </FormContainer>
    </>
  );
};

export default BusinessEditScreen;
