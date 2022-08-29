import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../redux/action";
import { NavLink } from "react-router-dom";

import TriggerRendererProp from "./popovers/Trigger";
import { Button } from "react-bootstrap";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart);
  //console.log(cartItem);
  const dispatch = useDispatch();
  const handleDelete = (item) => {
    dispatch(deleteCart(item));
  };
  const cartData = (cartData) => {
    return (
      <>
        <div className="cartShow_Page">
          <div className="cart_image">
            <img  src={cartData.image} alt={cartData.title} />
          </div>
          <div className="cart_des">
            <div>
              <h3>Product : {cartData.title}</h3>
              <h3>Comapny : {cartData.type}</h3>
              <h4>Price : ${cartData.price}</h4>
            </div>
          </div>
          <div className="cart_delete-button">
            <button onClick={() => handleDelete(cartData)}><TriggerRendererProp/></button>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <>
        <div className="cartNOItem">
          <h1>No Item is Available in your CART</h1>
        </div>
      </>
    );
  };

  const CheckoutItem = () => {
    return (
      <>
        <div  >
          <NavLink to="/checkout" ><Button style={{outlineStyle:"solid",backgroundColor:"none",width:"25%",marginTop:"3rem",padding:"0.8rem"}}>Checkout Page</Button></NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      {cartItem.length === 0 && emptyCart()}
      {cartItem.length > 0 && cartItem.map(cartData)}
      {cartItem.length > 0 && CheckoutItem()}
    </>
  );
};

export default Cart;
