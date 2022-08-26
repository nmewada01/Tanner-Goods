import React from "react";
import CarouselComponent from "../carousel/Carousel";
import Trending from "../Home/Trending";
import Description from "../Home/Description";
import Type from "../Home/Type";
import BestSellers from "../Home/BestSellers";
import BestSeller from "../Home/BestSeller";
import Caros from "../carousel/Caros";
//import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <CarouselComponent />
      <Trending />
      <Description />
      <Type />
      <BestSeller />
      <BestSellers />
      <Caros />
    </div>
  );
};

export default Home;
