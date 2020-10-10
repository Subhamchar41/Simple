import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Navbar, Form, Nav } from 'react-bootstrap';
import Login from './Login';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="App">
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">ABC</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="Home.js">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link href="Login">Log In</Nav.Link>
    <Nav.Link href="#home">Sing Up</Nav.Link>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default Header;
