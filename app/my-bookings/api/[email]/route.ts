import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: any) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const { email } = await params; // Await params
    const myBookings = await bookingsCollection.find({ email }).toArray();
    return NextResponse.json({ myBookings });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
};
