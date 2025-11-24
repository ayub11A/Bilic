import React, { useState } from "react";
import { useCart } from "../context/Cartcontext";
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, clearCart, toast } = useCart();
  const navigate = useNavigate();

  // Form state for shipping info
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Total price calculation
  const totalPrice = cartItems.reduce((total, item) => {
    const priceNumber =
      typeof item.price === "number"
        ? item.price
        : Number(item.price.toString().replace("$", "")) || 0;
    return total + priceNumber;
  }, 0);

  const handleProceed = () => {
    // Simple validation
    if (
      !shippingInfo.name ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address
    ) {
      alert("Please fill in all shipping information.");
      return;
    }

    // Here you could save shipping info to context or localStorage
    // Example: localStorage.setItem("shippingInfo", JSON.stringify(shippingInfo));

    navigate("/manualpayment", { state: { shippingInfo } });
  };

  return (
    <div className="p-6 relative max-w-3xl mx-auto">
      {/* Toast Message */}
      {toast && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          {toast}
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-3"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <p className="font-semibold">{item.name}</p>
              <p>
                {typeof item.price === "number" ? `$${item.price}` : item.price}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-800 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Shipping Info Form */}
          <div className="mt-6 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingInfo.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={shippingInfo.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={shippingInfo.phone}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              <textarea
                name="address"
                placeholder="Shipping Address"
                value={shippingInfo.address}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>

          {/* Total & Actions */}
          <div className="flex justify-end mt-4 text-lg font-bold">
            Total: ${totalPrice}
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-3">
            <button
              onClick={clearCart}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Clear Cart
            </button>

            <button
              onClick={handleProceed}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
