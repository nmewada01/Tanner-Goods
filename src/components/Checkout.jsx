import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Checkout = () => {
  const data = useSelector((state) => state.cart);
  var total = 0;

  const ListItem=(item)=>{
    total+=item.price;
    return (
        <div className="checkout_title">
            <div>{item.title} </div>
            <div>${item.price} </div>
        </div>
    )
  }
  return (
    <div className="checkout_page">
      <div className="billing_form">
        <h2>Billing address</h2>
        <Form>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>MadhyaPradesh</option>
                <option>UttarPradesh</option>
                <option>HimachalPradesh</option>
                <option>ArunachalPradesh</option>
                <option>ArunachalPradesh</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <h2>Payment</h2>
          <Form.Check disabled type="radio" label="Credit-Card" />
          <Form.Check disabled type="radio" label="Debit-Card" />
          <Form.Check disabled type="radio" label="Paypal" />
          {/* ******************************************************************* */}

          <Row className="mb-3 mt-3" style={{ width: "70%" }}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name on card</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Credit card number</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Row className="mb-3 mt-3" style={{ width: "40%" }}>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Expiration</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>

          <Button variant="primary w-100" type="submit">
            Continue to Checkout
          </Button>
        </Form>
      </div>
      <div className="showdata">
        <div className="totalItem">
          <h2>Your Cart</h2>
          <p>{data.length}</p>
        </div>
        {data.length>0 && data.map(ListItem)}
        <div className="totalAmount">
          <div>Total (USD)</div>
          <div>${total}</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
