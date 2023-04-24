import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
import {Link, useNavigate} from "react-router-dom";

import "./result.css";
import {IconButton} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
export const Results = () => {
  // const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  // const totalAmount = getTotalCartAmount();

  // const navigate = useNavigate();

  return (
    <div className="results">
      <IconButton component={Link} to="/" sx={{fontSize: "40px", color: "333333", margin: '10% 50%'}}>
        <HomeRoundedIcon fontSize='inherit' color='inherit'/>
      </IconButton>
      {/* <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )} */}
    </div>
  );
};
