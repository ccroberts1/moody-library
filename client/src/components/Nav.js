import React from "react";
import "../styles/Navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyLibrary from "./pages/MyLibrary";
import AddBook from "./pages/AddBook";

const Navigation = () => {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/">Moody Library</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/books" className="nav-link">
                Books
              </Link>
              <Link to="/addBook" className="nav-link">
                Add a Book
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path="/books">
            <MyLibrary />
          </Route>
          <Route path="/addBook">
            <AddBook />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Navigation;
