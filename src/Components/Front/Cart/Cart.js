import React from "react";
import "./Cart.css";

const Cart = ({ cartItem, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>

      {cartItem.length === 0 && (
        <div className="cart-items-empty">No Items are Added...</div>
      )}
      <div>
        {cartItem.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.image}
              alt={item.name}
            />
            <div className="cart-items-name">{item.name}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity} * {item.price}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">{totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
