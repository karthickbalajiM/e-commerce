import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Data from "./Components/Back/Data";
import Header from "./Components/Front/Header/Header.js";
import Path from "./Components/Front/Path/Path.js";

const App = () => {
  const { ProductItems } = Data;
  const [cartItem, setCartItem] = useState([]);
  const handleAddProduct = (product) => {
    const ProductExits = cartItem.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExits = cartItem.find((item) => item.id === product.id);
    if (ProductExits.quantity === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...ProductExits, quantity: ProductExits.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <div>
      <Router>
        <Header />
        <Path
          ProductItems={ProductItems}
          cartItem={cartItem}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      </Router>
    </div>
  );
};

export default App;
