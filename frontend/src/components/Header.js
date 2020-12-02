import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="bg" collapseOnSelect>
        <Container>
          <Navbar.Brand>ReviewBizs</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navar-nav">
            <Nav className="ml-auto">
              <Nav.Link>Reviews</Nav.Link>
              <Nav.Link>SignIn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
