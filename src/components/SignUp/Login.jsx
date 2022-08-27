import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FaFacebookF } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { AiOutlineLogin } from "react-icons/ai";
import { login } from "../../redux/AuthReducer/action";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
function Login() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((store) => store.AuthReducer.token);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login()).then(() => {
      if (token) {
        for (let i = 0; i < token.length; i++) {
          if (
            (token[i].name === username || token[i].email === username) &&
            token[i].password === password
          ) {
            alert("login success");
            navigate("/products", { replace: true });
            break;
          } else {
            continue;
          }
        }
      } else {
        alert("login failed");
      }
    });
  };
  return (
    <>
      <Button variant="primary-ms-auto" onClick={handleShow}>
        <AiOutlineLogin />
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button variant="primary w-100 mb-4">
            <GrGoogle /> Sign in with Google
          </Button>
          <Button variant="primary w-100 mb-4">
            <FaFacebookF /> Sign in with Facebook
          </Button>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button
              variant="outline-primary w-100 mt-5"
              outlineStyle="solid"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default Login;
