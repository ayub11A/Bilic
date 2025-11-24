import React from "react";
import CarsList from "../components/CarsList";

function Cars() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center py-6">Kids Ride-On Cars</h1>
      <CarsList />
    </div>
  );
}

export default Cars;
