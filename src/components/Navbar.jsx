import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLogin } from "react-icons/ai";
//import Cart from "./Cart";

import { NavLink } from "react-router-dom";
//import Products from "./Products";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { count } = useContext(AuthContext);
  return (
    <div>
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
          <NavLink className="links" to="/cart">
            Cart({count})
          </NavLink>
          <NavLink className={"links"} to="/login">
            <AiOutlineLogin />
            Login
          </NavLink>
        </div>
      </div>
      <div className="taglin">
        <marquee>EXTRA 10% OFF FINAL SALE | USE CODE: LAST CALL</marquee>
      </div>
    </div>
  );
};

export default Navbar;
