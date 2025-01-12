import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const carBooking = await request.json();
  const db = await connectDB();
  const carBookingsCollection = db.collection("car-bookings");
  try {
    const res = await carBookingsCollection.insertOne(carBooking);
    return NextResponse.json(
      { message: "Car Booked Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went Wrong" },
      { status: 400 }
    );
  }
};
