
import React, { useState } from "react";
import Underage from "./Underage"; // 
import UnderageData from "../pages/UnderageData";

function UnderageList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Use 'name' instead of 'title'
  const filteredItems = UnderageData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  
  );

  return (
    <div className="p-4">
     
      <input
        type="text"
        placeholder="Search under-age products..."
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
            <Underage key={item.id} {...item} />
          ))
        )}
      </div>
    </div>
  );
}

export default UnderageList;
