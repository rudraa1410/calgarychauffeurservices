import connectToDatabase from "../../../../utils/db";
import Car from "../../../../utils/models/Car"; // Make sure the path to your Car model is correct

export async function GET(req) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Fetch all cars from the database
    const cars = await Car.find();

    // Return the data as a JSON response
    return new Response(JSON.stringify(cars), { status: 200 });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response("Failed to fetch cars", { status: 500 });
  }
}
