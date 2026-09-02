import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./redux/CartSlice";

function CartItem({ onContinueShopping, onHomeClick }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const getPrice = (cost) => {
    return Number(String(cost).replace("$", ""));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + getPrice(item.cost) * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-page">
      <header className="cart-header">
        <button onClick={onHomeClick}>Home</button>

        <h1>Paradise Nursery</h1>

        <button onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </header>

      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <div>
          <h3>Your cart is empty.</h3>

          <button onClick={onContinueShopping}>
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <h3>Total Cart Amount: ${totalAmount.toFixed(2)}</h3>

          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h3>{item.name}</h3>

                <p>Price: {item.cost}</p>

                <p>
                  Subtotal: $
                  {(getPrice(item.cost) * item.quantity).toFixed(2)}
                </p>

                <button onClick={() => handleDecrease(item)}>
                  -
                </button>

                <span> {item.quantity} </span>

                <button onClick={() => handleIncrease(item)}>
                  +
                </button>

                <br />

                <button onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))}

          <h2>Total: ${totalAmount.toFixed(2)}</h2>

          <button onClick={onContinueShopping}>
            Continue Shopping
          </button>

          <button
            onClick={() => alert("Functionality Coming Soon")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartItem;