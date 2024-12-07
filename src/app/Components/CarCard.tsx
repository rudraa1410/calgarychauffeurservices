interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  onBook: (id: number) => void;
}

const CarCard: React.FC<Car> = ({ id, name, price, image, type, onBook }) => {
  return (
    <div className="car-card bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">Type: {type}</p>
        <p className="text-blue-600 font-bold mb-4">${price}/day</p>
        <button
          onClick={() => onBook(id)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
