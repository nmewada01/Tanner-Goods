import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-bootstrap";

const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { Load, loading, setLoading } = useContext(AuthContext);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/Products/${id}`,
      method: "GET",
    })
      .then((res) => {
        setLoading(true);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setLoading]);
  setLoading(false);

  const ShowProducts = () => {
    return (
      <div>
        <hr />
        <div className="show_In_Card">
          <div className="card-img-div">
            <img
            className="card-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="card-des">
            <h2 className="card-title">{product.title}</h2>
            <h3 className="card-type">{product.type}</h3>
            <p className="card-price">$ {product.price}</p>
            <p className="card-rating">
              Rating 4.7
              <AiFillStar />
            </p>
            <p className="product-description">
              The products we use on a daily basis say something about the
              people we are. We believe many things in life get better with
              time; it is that spirit we try to infuse in everything we create.
              In a world where we are overwhelmed by products made to break
              down, wear out or go out style, we aim to go against that grain.
            </p>
            <NavLink
              to={`/products/${product.id}`}
              className="btn btn-outline-dark"
            >
              Add to Card
            </NavLink>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="">{loading ? <Load /> : <ShowProducts />}</div>
    </div>
  );
};

export default Cart;
