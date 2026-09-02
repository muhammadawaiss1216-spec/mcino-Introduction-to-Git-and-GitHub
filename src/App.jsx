import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  return (
    <div className="app">
      <h1>Paradise Nursery</h1>

      <AboutUs />

      <ProductList />

      <CartItem />
    </div>
  );
}

export default App;