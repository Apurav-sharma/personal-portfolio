import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

function NavBar() {
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand>My personal portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href=".skill-card">Skills</Nav.Link>
            <Nav.Link href="#link">Achievements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
