import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((store) => store.handleCart);
  console.log("cart:", cart);

  return (
    <div>
      {cart?.length > 0 &&
        cart.map((item) => (
          <>
            <div>
              <img src={item.image} alt={cart.title} />
            </div>

            <div>
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.qty} X ${item.price} = ${item.qty * item.price}{" "}
                </p>
                <button>minus</button>
                <button>plus</button>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Cart;
