import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Products/Products";
import Singup from "../Singup/Singup";
import Cart from "../Cart/Cart";

const Path = ({
  ProductItems,
  cartItem,
  handleAddProduct,
  handleRemoveProduct,
}) => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products
              ProductItems={ProductItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/singup" element={<Singup />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Path;
