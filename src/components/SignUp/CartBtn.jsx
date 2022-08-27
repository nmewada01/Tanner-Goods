import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux"
const CartBtn = () => {
    const state = useSelector(state=>state.cart)
  return (
    <>
      <NavLink
        to="/cart"
        style={{
          color: "white",
          background: "linear-gradient(#c69c7d,#c69c6d)",
          textDecoration: "none",
          border: "1px solid whitesmoke",
          borderRadius: "5px",
        }}
        activeStyle={{ color: "red", background: "blue" }}
      >
        <BsCartCheckFill /> Cart({state.length})
      </NavLink>
    </>
  );
};

export default CartBtn;
