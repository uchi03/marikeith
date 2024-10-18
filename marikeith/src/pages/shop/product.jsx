import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product-box">
      <div className="product">
        <img src={productImage} />
        <div className="description">
          <p>
            <b style={{ fontSize: "20px" }}>{productName}</b>
          </p>
          <p style={{ fontSize: "20px" }}> ₱ {price}.00</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};