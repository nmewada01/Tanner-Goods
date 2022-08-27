import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
//import Cart from "./Cart";

import { NavLink } from "react-router-dom";
import Login from "../SignUp/Login";
import Register from "../SignUp/Register";
import CartBtn from "../SignUp/CartBtn";
//import Products from "./Products";

const Navbar = () => {


  return (
    <div className="Main_nav">
      <div className="upper_div">
        <div className="show_sociallink">
          <div>
            <BsInstagram />
            <FaFacebookF />
          </div>
          <div>
            USD $
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>

      <div className="Main">
        <div className="tanner_goods_logo">
          <img
            src={
              "https://cdn.shopify.com/s/files/1/0044/9802/files/Tanner-Goods-Mazama-Logo_140x.png?v=1600190052"
            }
            alt="tanner"
          />
        </div>
        <div className="tanner_goods_links">
          <NavLink className={"links"} to="/">
            Home
          </NavLink>
          <NavLink className={"links"} to="/products">
            Products
          </NavLink>
          <NavLink className={"links"} to="/contact">
            Contact
          </NavLink>
          <NavLink className={"links"} to="/about">
            About
          </NavLink>
        </div>
        <div className="search_add_to_card">
          <BsSearch />
          <CartBtn/>
          <Register />
          <Login />
        </div>
      </div>
      <div className="taglin">
        <p>EXTRA 10% OFF FINAL SALE | USE CODE: LAST CALL</p>
      </div>
    </div>
  );
};

export default Navbar;
