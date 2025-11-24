import React, { useState } from "react";
import BabyshowerData from"../pages/BabyshowerData"
import BabyshowerCard from"../components/BabyshowerCard"
function BabyshowerList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter based on search term
  const filteredItems =BabyshowerData .filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search newborn products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Products grid */}
      <div className="flex flex-wrap justify-center">
        {filteredItems.length === 0 ? (
          <p className="text-center w-full">No items found for "{searchTerm}"</p>
        ) : (
          filteredItems.map((item) => <BabyshowerCard key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}

export default BabyshowerList;
