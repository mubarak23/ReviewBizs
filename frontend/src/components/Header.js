import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="primary" expand="bg" collapseOnSelect>
        <Container>
          <Navbar.Brand>ReviewBizs</Navbar.Brand>
          <Navbar.Toggle arial-aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navar-nav">
            <Nav>
              <Nav.Link>
                <i className="fa fa-shopping-cart"></i>Reviews
              </Nav.Link>
              <Nav.Link>
                <i className="fa fa-user"></i>SignIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
