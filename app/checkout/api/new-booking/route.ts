import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const newBooking = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const res = await bookingsCollection.insertOne(newBooking);
    return NextResponse.json(
      { message: "Service Booked Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went Wrong" },
      { status: 400 }
    );
  }
};
