require("dotenv").config(); // Load environment variables

const { MongoClient } = require("mongodb");

// Use the environment variable from .env file
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {});

async function main() {
  try {
    await client.connect();
    const db = client.db("chauffeurServices");
    const carsCollection = db.collection("cars");

    // Array of 30 car objects to insert
    const cars = [
      {
        name: "Mercedes-Benz S-Class",
        type: "Luxury Sedan",
        price: "$200/day",
        img: "https://link-to-car-image",
      },
      {
        name: "BMW 7 Series",
        type: "Luxury Sedan",
        price: "$180/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Audi A8",
        type: "Luxury Sedan",
        price: "$190/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Toyota Camry",
        type: "Sedan",
        price: "$70/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Honda Accord",
        type: "Sedan",
        price: "$75/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Chevrolet Malibu",
        type: "Sedan",
        price: "$65/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Ford Mustang",
        type: "Sports Car",
        price: "$120/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Porsche 911",
        type: "Sports Car",
        price: "$300/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Ferrari 488",
        type: "Sports Car",
        price: "$400/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Lamborghini Huracan",
        type: "Sports Car",
        price: "$500/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Tesla Model S",
        type: "Electric Sedan",
        price: "$250/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Nissan Leaf",
        type: "Electric Sedan",
        price: "$90/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Chevrolet Bolt EV",
        type: "Electric Sedan",
        price: "$100/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Jeep Wrangler",
        type: "SUV",
        price: "$110/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Ford Explorer",
        type: "SUV",
        price: "$120/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Toyota Highlander",
        type: "SUV",
        price: "$130/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Honda CR-V",
        type: "SUV",
        price: "$110/day",
        img: "https://link-to-car-image",
      },
      {
        name: "BMW X5",
        type: "Luxury SUV",
        price: "$220/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Mercedes-Benz G-Class",
        type: "Luxury SUV",
        price: "$300/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Range Rover Sport",
        type: "Luxury SUV",
        price: "$280/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Cadillac Escalade",
        type: "Luxury SUV",
        price: "$350/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Lexus RX 350",
        type: "Luxury SUV",
        price: "$200/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Honda Pilot",
        type: "SUV",
        price: "$130/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Mazda CX-5",
        type: "SUV",
        price: "$110/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Subaru Outback",
        type: "SUV",
        price: "$100/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Kia Sorento",
        type: "SUV",
        price: "$120/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Volvo XC90",
        type: "Luxury SUV",
        price: "$250/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Hyundai Santa Fe",
        type: "SUV",
        price: "$100/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Chrysler Pacifica",
        type: "Minivan",
        price: "$140/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Toyota Sienna",
        type: "Minivan",
        price: "$130/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Honda Odyssey",
        type: "Minivan",
        price: "$120/day",
        img: "https://link-to-car-image",
      },
      {
        name: "Ford Transit",
        type: "Van",
        price: "$150/day",
        img: "https://link-to-car-image",
      },
    ];

    // Insert all cars at once
    const result = await carsCollection.insertMany(cars);
    console.log(`${result.insertedCount} cars inserted!`);
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
