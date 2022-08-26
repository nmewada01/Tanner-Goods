import React from "react";
import { Carousel } from "react-bootstrap";
import carouselImage from "./carous.jpg";
import cult from "./cult.jpg";
import culti from "./culti.jpg";
import culte from "./culte.jpg";

const CarouselComponent = () => {
  return (
    <div>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImage}
            alt="First slide"
            height={"650vh"}
          />

          <Carousel.Caption>
            <h5 style={{ fontSize: "75px" }}>
              Father's Day <br /> Gift Collection
            </h5>
            <p style={{ color: "white" }}>
              Give your father a best Moment on Father's Day
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={culti}
            alt="Second slide"
            height={"650vh"}
          />
          <Carousel.Caption>
            <h4 style={{ textAlign: "left" }}>Worth Holding Onto</h4>
            <h5 style={{ fontSize: "75px", textAlign: "left", color: "white" }}>
              Best Sellers <br />
              Collection
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cult}
            alt="Third slide"
            height={"650vh"}
          />
          <Carousel.Caption>
            <h5 style={{ fontSize: "75px", textAlign: "right", color: "pink" }}>
              Tanner Goods <br /> Girl's Collection
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={culte}
            alt="Second slide"
            height={"650vh"}
          />
          <Carousel.Caption>
            <h5
              style={{ fontSize: "75px", textAlign: "right", color: "beige" }}
            >
              Gift Collection <br /> 25% Discount{" "}
            </h5>
            <p style={{ textAlign: "right", color: "black" }}>
              Give Your Friends a Gift Treat
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
