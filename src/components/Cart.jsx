import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCart } from "../redux/action";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart);
  console.log(cartItem);
  const dispatch = useDispatch();
const handleDelete=(item)=>{
  dispatch(deleteCart(item))
}
  const cartData = (cartData) => {
    return (
      <>
        <div className="cartShow_Page">
          <div>
            <img src={cartData.image} alt={cartData.title} />
          </div>
          <div>
            <div>
              <h3>{cartData.title}</h3>
              <h3>{cartData.type}</h3>
              <h4>{cartData.price}</h4>
            </div>
          </div>
          <div>
            <button onClick={()=>handleDelete(cartData)} >delete</button>
          </div>
        </div>
      </>
    );
  };

  const emptyCart=()=>{
    return (
      <>
      <div>
        <h1>No Item is Available in your CART</h1>
      </div>
      </>
    )
  }
  return <>
  {cartItem.length===0 && emptyCart()}
  {cartItem.length > 0 && cartItem.map(cartData)}</>;
};

export default Cart;
