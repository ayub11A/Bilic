import React, { useState } from "react";
import CarsData from "../pages/CarsData";
import CarCard from "../components/CarCard";

function CarsList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter based on search term
  const filteredItems = CarsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-[80%] lg:w-full"
        />
      </div>

      {/* Products grid */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
