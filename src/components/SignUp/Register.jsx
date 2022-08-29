import React, { useReducer, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { GrGoogle, GrUserAdd } from "react-icons/gr";
import { register } from "../../redux/AuthReducer/action";
import { useDispatch } from "react-redux";

const initialState = {
  username: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const Register = () => {
  const [show, setShow] = useState(false);

  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();
  const RegisterHandle = (e) => {
    e.preventDefault();
    dispatch(register(state));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary-ms-auto" onClick={handleShow}>
        <GrUserAdd />
        Register
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
          <Form onSubmit={RegisterHandle}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={state.username}
                onChange={(e) =>
                  setState({ type: "username", payload: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={state.email}
                onChange={(e) =>
                  setState({ type: "email", payload: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={state.password}
                onChange={(e) =>
                  setState({ type: "password", payload: e.target.value })
                }
              />
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
