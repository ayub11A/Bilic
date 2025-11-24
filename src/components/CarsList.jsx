import React, { useState } from "react";
import CarsData from"../pages/CarsData"
import CarCard from"../components/CarCard"
function CarsList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter based on search term
  const filteredItems = CarsData.filter((item) =>
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
        className="border p-2 rounded w-[800px] ml-[200px] mb-4"
      />

      {/* Products grid */}
      <div className="flex flex-wrap justify-center">
        {filteredItems.length === 0 ? (
          <p className="text-center w-full">No items found for "{searchTerm}"</p>
        ) : (
          filteredItems.map((item) => <CarCard key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}

export default CarsList;
