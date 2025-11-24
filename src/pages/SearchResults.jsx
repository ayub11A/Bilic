import React from "react";
import { useSearch } from "../context/SearchContext";
import { useCart } from "../context/Cartcontext";

function SearchResults({ items = [] }) {
  const { searchTerm } = useSearch();
  const { addToCart } = useCart();

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {filteredItems.length === 0 ? (
        <p>No items found for "{searchTerm}"</p>
      ) : (
        filteredItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-md flex flex-col justify-between"
          >
            <div>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-700">
                {typeof item.price === "number" ? `$${item.price}` : item.price}
              </p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;
