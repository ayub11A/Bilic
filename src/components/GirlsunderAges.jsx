import React from "react";
import { useCart } from "../context/Cartcontext";

function GirlsunderAge({ id, img, name, desc, price }) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden m-4 hover:shadow-2xl transition">
      <img src={img} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{desc}</p>
        <p className="text-blue-500 font-bold text-lg mt-2">{price}</p>

        <button
          onClick={() => addToCart({ id, img, name, desc, price })}
          className="mt-4 w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-green-300 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default GirlsunderAge;
