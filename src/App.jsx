import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const cart = useSelector((state) => state.cart.items);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleGetStarted = () => {
    setPage("products");
  };

  const handleCartClick = () => {
    setPage("cart");
  };

  const handleContinueShopping = () => {
    setPage("products");
  };

  const handleHomeClick = () => {
    setPage("home");
  };

  return (
    <div className="app">
      {page === "home" && (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>

          <p>Where Green Meets Serenity</p>

          <button onClick={handleGetStarted}>
            Get Started
          </button>

          <AboutUs />
        </div>
      )}

      {page === "products" && (
        <ProductList
          onCartClick={handleCartClick}
          onHomeClick={handleHomeClick}
          totalItems={totalItems}
        />
      )}

      {page === "cart" && (
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHomeClick={handleHomeClick}
        />
      )}
    </div>
  );
}

export default App;