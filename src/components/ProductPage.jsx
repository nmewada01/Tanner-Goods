import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart,deleteCart } from "../redux/action";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { Load, loading, setLoading } = useContext(AuthContext);
  const [addToCartBtn,setAddToCartBtn] = useState("Add To Cart")

const handleAddToCart=(product)=>{
  if(addToCartBtn==="Add To Cart"){
    dispatch(addCart(product))
    setAddToCartBtn("Remove Item")
  }else{
    dispatch(deleteCart(product))
    setAddToCartBtn("Add To Cart")
  }
}
  useEffect(() => {
    axios({
      url: `http://localhost:8080/Products/${id}`,
      method: "GET",
    })
      .then((res) => {
        setLoading(true);
        setProduct(res.data);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id, setLoading]);

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
            <button
              className="btn btn-outline-dark px-4 py-2"
              onClick={()=>handleAddToCart(product)}
            >
             {addToCartBtn}
            </button>
            <NavLink to="/cart" className="btn btn-dark ms-2 px-3">
              Go To Cart
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

export default ProductPage;
//onClick={addProduct(product)}