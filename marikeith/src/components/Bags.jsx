import React, { useContext } from "react";
import { BAGS } from "../products";
import { ShopContext } from "../context/shop-context";
import "./bags.css";

export const Bags = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div>
      <h1 className="bagsTitle">Bags</h1>
      <div className="bags">
        {BAGS.map((bag) => {
          const cartItemCount = cartItems[bag.id] || 0;
          return (
            <div key={bag.id} className="bag-box">
              <div className="bag">
                <img src={bag.productImage} alt={bag.productName} />
                <p className="description" style={{ fontSize: "20px"}}>{bag.productName}</p>
                <p style={{ fontSize: "20px" }}>₱ {bag.price}</p>
                <button 
                  className="addToCartBttn" 
                  onClick={() => addToCart(bag.id)}
                >
                  Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};