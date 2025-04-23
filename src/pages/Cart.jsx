import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart({ cartItems, onRemoveFromCart, onClearCart, onUpdateQuantity }) {
  const [showMessage, setShowMessage] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (cartItems.length === 0) {
      setShowMessage("Your cart is now empty.");
    }
  }, [cartItems]);

  const handleRemove = (index) => {
    const itemName = cartItems[index].name;
    onRemoveFromCart(index);
    setShowMessage(`Removed: ${itemName}`);
    setTimeout(() => setShowMessage(""), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Cart</h1>

      {showMessage && (
        <div className="mb-4 text-primary font-medium">{showMessage}</div>
      )}

        <>
          <ul className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="border-b pb-4 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                    <p className="text-primary font-bold">
                      €{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <label htmlFor={`quantity-${index}`}>Qty:</label>
                      <input
                        id={`quantity-${index}`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          onUpdateQuantity(index, parseInt(e.target.value))
                        }
                        className="w-16 px-2 py-1 border rounded"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-sm text-black underline hover:text-primary"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 font-bold text-xl">
            Total Damage: €{total.toFixed(2)}
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link
              to="/products"
              className="inline-block text-primary underline hover:text-primary"
            >
              ← Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/50 hover:text-black transition-colors"
            >
              Go to Checkout
            </Link>
            <button
              onClick={onClearCart}
              className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/50 hover:text-black transition-colors"
            >
              Remove All
            </button>
          </div>
        </>
    </div>
  );
}

export default Cart;
