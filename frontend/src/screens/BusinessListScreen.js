import React, { useEffect } from "react";
//import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
//import { Table, Button, Row, Col } from "react-bootstrap";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserLists, deleteUser } from "../actions/userAction";
import { getBusinessLists } from "../actions/businessActions";

const BusinessListScreen = ({ history }) => {
  const dispatch = useDispatch();
  const businessList = useSelector((state) => state.adminBusinessLists);
  const { loading, error, businesses } = businessList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //const userDelete = useSelector((state) => state.userDelete);
  //const { success: successDelete } = userDelete;

  useEffect(() => {}, [dispatch]);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      console.log("reach this point");
      dispatch(getBusinessLists());
      console.log("dispatch run");
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const deleteHandlerSubmit = (id) => {
    console.log(id);
    if (window.confirm("Are You Sure")) {
      dispatch(deleteUser(id));
    }
  };
  const createBusinessHandler = (e) => {
    e.preventDefault();
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
              <th></th>
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
