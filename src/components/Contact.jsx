import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <div className="contact_div">
        <h2>Contact Our Customer Service Team</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email address<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Subject<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Contact Reason<span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <p>
            How Can We Help?<span style={{ color: "red" }}>*</span>
          </p>
          <textarea style={{ width: "100%", height: "25vh" }}></textarea>
          <p style={{ fontSize: "11px" }}>
            Please include your order number if applicable.
          </p>

          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
