import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./css/NavBar.css";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Ken Hunter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
