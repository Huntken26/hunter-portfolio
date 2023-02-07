import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import  sendEmail from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(
      "YOUR_EMAILJS_TEMPLATE_ID",
      "YOUR_EMAILJS_SERVICE_ID",
      formData
    ).then((res) => {
      console.log("Email successfully sent!");
    });
  };

  return (
    <Form onSubmit={handleSubmit} id= 'contact' style={{ width: '30%', margin: '0 auto' }}>
      <Form.Group controlId="formName">
        <h1>Contact Form</h1>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSubject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter subject"
          name="subject"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          name="message"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;



