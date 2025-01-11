import { connectDB } from "@/lib/connectDB";

export const POST = async (request: any) => {
  const carBooking = await request.json();
  const db = await connectDB();
  const carBookingsCollection = db.collection("car-bookings");
  try {
    const res = await carBookingsCollection.insertOne(carBooking);
    return Response.json(
      { message: "Car Booked Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ message: "Something went Wrong" }, { status: 400 });
  }
};
