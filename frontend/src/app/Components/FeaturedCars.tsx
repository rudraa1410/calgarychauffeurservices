import React from "react";

const FeaturedCars: React.FC = () => {
  const cars = [
    {
      name: "Mercedes-Benz S-Class",
      type: "Luxury Sedan",
      price: "$200/day",
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Porsche 911",
      type: "Sports Car",
      price: "$350/day",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Range Rover Sport",
      type: "Luxury SUV",
      price: "$280/day",
      img: "https://images.unsplash.com/photo-1519245886-ce8910294539?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    },
  ];

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
            <div
              key={index}
              className="car-card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={car.img}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {car.name}
                </h3>
                <p className="mt-2 text-gray-500">{car.type}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {car.price}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
