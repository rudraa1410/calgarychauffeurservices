import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Car Rental Service
        </h1>
        <p className="text-xl mb-8">
          Experience luxury and comfort with our premium fleet
        </p>
        <Link
          href="#cars"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Browse Cars
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
