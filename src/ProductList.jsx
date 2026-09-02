import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./redux/CartSlice";

const products = [
  {
    id: 1,
    category: "Air Purifying Plants",
    name: "Snake Plant",
    price: 25,
    image: "/assets/snake-plant.jpg",
  },
  {
    id: 2,
    category: "Air Purifying Plants",
    name: "Peace Lily",
    price: 30,
    image: "/assets/peace-lily.jpg",
  },
  {
    id: 3,
    category: "Aromatic Plants",
    name: "Lavender",
    price: 20,
    image: "/assets/lavender.jpg",
  },
  {
    id: 4,
    category: "Aromatic Plants",
    name: "Rosemary",
    price: 18,
    image: "/assets/rosemary.jpg",
  },
  {
    id: 5,
    category: "Medicinal Plants",
    name: "Aloe Vera",
    price: 22,
    image: "/assets/aloe-vera.jpg",
  },
  {
    id: 6,
    category: "Medicinal Plants",
    name: "Neem Plant",
    price: 28,
    image: "/assets/neem.jpg",
  },
];

function ProductList({ onCartClick, onHomeClick, totalItems }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isInCart = (name) => {
    return cart.some((item) => item.name === name);
  };

  const handleAddToCart = (product) => {
    dispatch(
      addItem({
        name: product.name,
        image: product.image,
        cost: `$${product.price}`,
      })
    );
  };

  const categories = [
    "Air Purifying Plants",
    "Aromatic Plants",
    "Medicinal Plants",
  ];

  return (
    <div className="product-page">
      <header className="product-header">
        <button onClick={onHomeClick}>Home</button>

        <h1>Paradise Nursery</h1>

        <button onClick={onCartClick}>
          🛒 Cart ({totalItems})
        </button>
      </header>

      <h2>Our Plants</h2>

      {categories.map((category) => (
        <section key={category}>
          <h3>{category}</h3>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <h4>{product.name}</h4>

                  <p>${product.price}</p>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.name)}
                  >
                    {isInCart(product.name)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;