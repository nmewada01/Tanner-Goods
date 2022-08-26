import React from "react";
import { Carousel } from "react-bootstrap";
import man from "./man.jpg";

const Caros = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={man}
            alt="First slide"
            height={"400vh"}
          />
          <Carousel.Caption>
            <h3
              style={{
                fontSize: "75px",
                textAlign: "center",
                backgroundImage: "linear-gradient(blue,grey   )",
              }}
            >
              Free US Shipping
            </h3>
            <p>Domestic orders over $199 ship for free.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caros;
