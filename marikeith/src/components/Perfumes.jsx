import React, { useContext } from "react";
import { PERFUMES } from "../products";
import { ShopContext } from "../context/shop-context";
import "./perfumes.css";

export const Perfumes = () => {
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div>
      <h1 className="perfumesTitle">Perfumes</h1>
      <div className="perfumes">
        {PERFUMES.map((perfume) => {
          const cartItemCount = cartItems[perfume.id] || 0;
          return (
            <div key={perfume.id} className="perfume perfume-box">
              <img src={perfume.productImage} alt={perfume.productName} />
              <p className="description">{perfume.productName}</p>
              <p> ₱ {perfume.price}</p>
              <button 
                className="addToCartBttn" 
                onClick={() => addToCart(perfume.id)}
              >
                Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};