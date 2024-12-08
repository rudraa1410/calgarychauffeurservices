import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const cars = await prisma.Car.findMany(); // Fetch all cars
    return new Response(JSON.stringify(cars), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response("Error fetching cars", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
