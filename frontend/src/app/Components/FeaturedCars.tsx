"use client";
import React, { useEffect, useState } from "react";
import CarCard from "./CarCard"; // Import the CarCard component

const FeaturedCars: React.FC = () => {
  const [cars, setCars] = useState<any[]>([]); // Add a type for cars state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch cars data from the API
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars");
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();
        setCars(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <p>Loading cars...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Vehicles
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose from our selection of premium vehicles
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <CarCard
              key={index} // Add a key for list rendering
              name={car.name}
              type={car.type}
              price={car.price}
              img={car.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
