import React, { useContext, useReducer } from "react";
import { ShopContext } from "../../context/shop-context";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'SET_COUNT':
      return { count: action.payload };
    default:
      return state;
  }
};

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const [state, dispatch] = useReducer(reducer, { count: cartItems[id] });

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
    addToCart(id);
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
    removeFromCart(id);
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    dispatch({ type: 'SET_COUNT', payload: value });
    updateCartItemCount(value, id);
  };

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ₱ {price}.00</p>
        <div className="countHandler">
          <button onClick={handleDecrement}> - </button>
          <input
            value={state.count}
            onChange={handleChange}
          />
          <button onClick={handleIncrement}> + </button>
        </div>
      </div>
    </div>
  );
};