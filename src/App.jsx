import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("liliando_cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("liliando_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleUpdateQuantity = (index, newQuantity) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/product/:id" element={<ProductPage onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onClearCart={handleClearCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
