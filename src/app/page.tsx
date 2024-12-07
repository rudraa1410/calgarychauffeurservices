"use client";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import CarCard from "./Components/CarCard";
import BookingModal from "./Components/BookingModal";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: 200,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399",
    type: "Electric",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    price: 250,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    type: "Luxury",
  },
  {
    id: 3,
    name: "Mercedes-Benz S-Class",
    price: 300,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    type: "Luxury",
  },
];

const HomePage: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBook = (id: number) => {
    setSelectedCar(id);
    setModalOpen(true);
  };

  const handleModalSubmit = (data: any) => {
    console.log("Booking submitted:", { carId: selectedCar, ...data });
    alert("Booking successful! We will contact you shortly.");
  };

  return (
    <>
      <NavBar />
      <HeroSection />
      <div id="cars" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Available Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} onBook={handleBook} />
          ))}
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </>
  );
};

export default HomePage;
