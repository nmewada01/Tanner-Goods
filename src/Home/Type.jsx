import React from "react";
import { useNavigate } from "react-router-dom";
import { type_images } from "../style";

const Type = () => {
  const navigate = useNavigate();
  const handleShow = () => {
    navigate("/products");
  };
  return (
    <div>
      <div className="category_belt_wallet">
        {type_images.map((t) => {
          return (
            <div key={t.id}>
              <img src={t.images} alt="logo" width={"10px"} height={"10px"} />
              <h1>{t.titles}</h1>
              <button className="button" onClick={handleShow}>
                Shop Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Type;
