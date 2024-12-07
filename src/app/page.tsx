import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import FeaturedCars from "./Components/FeaturedCars";
import WhyChooseUs from "./Components/WhyChooseUs";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default App;
