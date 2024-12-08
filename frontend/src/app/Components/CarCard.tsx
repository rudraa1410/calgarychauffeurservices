"use client";
import React from "react";

interface CarCardProps {
  name: string;
  type: string;
  price: string;
  img: string;
}

const CarCard: React.FC<CarCardProps> = ({ name, type, price, img }) => {
  return (
    <div className="car-card bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={
          img ||
          "https://www.a1limoservice.ca/wp-content/uploads/2019/05/A-1-Limousine-Sedan-Service-Calgary-White-Stretch-Limo-for-Weddings-and-Grads.jpg"
        } // Placeholder if no image
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-500">{type}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
