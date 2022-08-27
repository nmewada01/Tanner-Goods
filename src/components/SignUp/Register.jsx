import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { GrGoogle, GrUserAdd } from "react-icons/gr";

const Register = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary-ms-auto" onClick={handleShow}>
      <GrUserAdd />Register
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary w-100 mb-4">
            <GrGoogle /> Sign Up with Google
          </Button>
          <Button variant="primary w-100 mb-4">
            <FaFacebookF /> Sign Up with Facebook
          </Button>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check" />
            </Form.Group>
            <Button
              variant="outline-primary w-100 mt-5"
              outlineStyle="solid"
              type="submit"
            >
             Register
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Register;
