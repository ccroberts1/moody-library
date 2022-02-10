import React from "react";
import "../styles/Navbar.css";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
import { Nav, Navbar, Container } from "react-bootstrap";
const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Moody Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Books</Nav.Link>
            <Nav.Link href="#link">Add a Book</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
