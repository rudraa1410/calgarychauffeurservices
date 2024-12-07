import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">LuxeDrive</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#cars" className="text-gray-700 hover:text-blue-600">
              Cars
            </Link>
            <Link
              href="#bookings"
              className="text-gray-700 hover:text-blue-600"
            >
              My Bookings
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
