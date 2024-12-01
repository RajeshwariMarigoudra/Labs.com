// src/components/ContactPopup/ContactPopup.jsx

import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ContactPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactPopup;
