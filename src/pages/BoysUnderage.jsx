// src/pages/BoysUnderage.jsx
import React from "react";
import UnderageList from "../components/UnderageList";

function BoysUnderage() {
  return (
    <div className="pt-24">
      <h1 className="text-3xl font-bold text-center mb-6">Boys Underage Collection</h1>
      {/* Soo bandhig dhammaan Underage items */}
      <UnderageList />
    </div>
  );
}

export default BoysUnderage;
