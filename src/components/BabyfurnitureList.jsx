import React, { useState } from "react";
import BabyfurnitureData from "../pages/BabyfurnitureData";
import BabyfurnitureCard from "../components/BabyfurnitureCard";

function BabyfurnitureList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Use 'name' instead of 'title'
  const filteredItems = BabyfurnitureData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mt-20 ">
            <h1 className="text-3xl font-bold text-center mb-6">Baby furniture </h1>

      <input
        type="text"
        placeholder="Search newborn products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4  sm:p-6 md:p-4"
      />

      <div className="flex flex-wrap justify-center">
        {filteredItems.length === 0 ? (
          <p className="text-center w-full">
            No items found for "{searchTerm}"
          </p>
        ) : (
          filteredItems.map((item) => (
            <BabyfurnitureCard key={item.id} {...item} />
          ))
        )}
      </div>
    </div>
  );
}

export default BabyfurnitureList;
