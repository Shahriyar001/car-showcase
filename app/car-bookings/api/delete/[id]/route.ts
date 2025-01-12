import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request, { params }: any) => {
  const db = await connectDB();
  const carBookingsCollection = db.collection("car-bookings");
  try {
    const { id } = await params;
    const resp = await carBookingsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({
      message: "Deleted the booking",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
};
