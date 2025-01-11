import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
  const db = await connectDB();
  const carBookingsCollection = db.collection("car-bookings");

  try {
    const { email } = await params; // Await params
    const carBookings = await carBookingsCollection.find({ email }).toArray();
    return NextResponse.json({ carBookings });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
};
