import mongoose from "mongoose";
import Car from "../../../../utils/models/Car"; // Make sure the path to your Car model is correct

// Connect to MongoDB
const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(process.env.MONGO_URI, {});
};

// GET handler
export async function GET() {
  try {
    await connectDb(); // Ensure the DB connection is established

    const cars = await Car.find(); // Assuming you're fetching all cars from MongoDB

    return new Response(JSON.stringify(cars), { status: 200 }); // Return JSON response with 200 status
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching cars" }),
      { status: 500 } // Return JSON response with 500 status for error
    );
  }
}
