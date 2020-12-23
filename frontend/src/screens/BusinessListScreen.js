import React, { useEffect } from "react";
//import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
//import { Table, Button, Row, Col } from "react-bootstrap";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserLists, deleteUser } from "../actions/userAction";
import {
  createBusiness,
  getBusinessLists,
  deleteBusiness,
} from "../actions/businessActions";
import { BUSINESS_DETAILS_RESET } from "../constants/businessConstant.js";

const BusinessListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => state.adminBusinessLists);
  const { loading, error, businesses } = businessList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.deleteBusiness);
  const { success: successDelete } = userDelete;

  const businessCreate = useSelector((state) => state.createBusiness);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    business: createdBusiness,
  } = businessCreate;

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch({ type: BUSINESS_DETAILS_RESET });
      console.log("reach this point");
      dispatch(getBusinessLists());
      console.log("dispatch run");
    } else {
      history.push("/login");
    }
    if (successCreate) {
      history.push(`/admin/business/${createdBusiness._id}/edit`);
    }
  }, [dispatch, history, userInfo, successDelete, successCreate]);

  const deleteHandlerSubmit = (id) => {
    console.log(id);
    if (window.confirm("Are You Sure")) {
      dispatch(deleteBusiness(id));
      //Cannot DELETE /api/business/5fde214cb7149119511b0cd7
    }
  };
  const createBusinessHandler = (e) => {
    e.preventDefault();
    console.log("create business action called");
    dispatch(createBusiness());
    console.log("Create Business Action executed");
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h2>Business Lists</h2>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createBusinessHandler}>
            <i className="fas fa-plus"></i> Add Business
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CATEGORY</th>
              <th>RATING</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((business) => (
              <tr key={businesses._id}>
                <td>
                  <Link to={`/business/${business._id}`}>{business._id}</Link>
                </td>
                <td>{business.name}</td>
                <td>{business.category}</td>

                <td>{business.rating}</td>
                <td>
                  <Link to={`/admin/business/${business._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </Link>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandlerSubmit(business._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default BusinessListScreen;
