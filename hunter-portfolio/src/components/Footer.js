import React from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import './css/Footer.css';
const Footer = () => {
  return (
    <footer>
      <Container id='foot'>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Badge variant="secondary">LinkedIn</Badge>{" "}
            <Button
             href="https://www.linkedin.com/in/kenny-hunter-fullstack"
              variant="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Link
            </Button>
          </Col>
          <Col md="auto">
            <Badge variant="secondary">GitHub</Badge>{" "}
            <Button
              href="https://github.com/Huntken26"
              variant="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Button>
          </Col>
          <Col md="auto">
            <Badge variant="secondary">Calendly</Badge>{" "}
            <Button
              href="https://calendly.com/huntken26"
              variant="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendly Link
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
