import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout, applyCoupon, couponCode, discount } = useContext(ShopContext);
  const [inputCoupon, setInputCoupon] = useState("");
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    applyCoupon(inputCoupon);
  };

  return (
    <div className="cart">
      <div>
        <h1>Items for Payment and Checkout</h1>
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
          <input
            type="text"
            value={inputCoupon}
            onChange={(e) => setInputCoupon(e.target.value)}
            placeholder="Enter coupon code"
          />
          <button onClick={handleApplyCoupon}>APPLY VOUCHER</button>
          <p> Subtotal: ₱ {totalAmount} </p>
          {discount > 0 && <p className="discount"> Discount: -₱ {discount.toFixed(2)} </p>}
          <button onClick={() => navigate("/")}> CONTINUE SHOPPING </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            CHECKOUT{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};