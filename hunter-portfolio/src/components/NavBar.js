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
          <Nav.Link href="https://docs.google.com/document/d/1_gxyKok86Q12vxlxo4zlTrzHp5G3M0JT/edit?usp=sharing&ouid=104734253715428602881&rtpof=true&sd=true">Resume</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
