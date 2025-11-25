import React, { useState } from "react";
import GirlsunderAges from"../components/GirlsunderAges"
import GirlsunderAgeData from "../pages/GirlsunderAgeData";
function GirlsunderAgeList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter based on search term
  const filteredItems = GirlsunderAgeData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mt-20 ">
            <h1 className="text-3xl font-bold text-center mb-6">Girls Underage Collection</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search Girls under-age products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      {/* Products grid */}
      <div className="flex flex-wrap justify-center">
        {filteredItems.length === 0 ? (
          <p className="text-center w-full">No items found for "{searchTerm}"</p>
        ) : (
          filteredItems.map((item) => <GirlsunderAges key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}

export default GirlsunderAgeList;
