import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request, { params }: any) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const { id } = await params; // Await params
    const resp = await bookingsCollection.deleteOne({
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

// export const PETCH = async (request: Request, { params }: any) => {
//   const db = await connectDB();
//   const bookingsCollection = db.collection("bookings");
//   try {
//     const resp = await bookingsCollection.deleteOne({
//       _id: new ObjectId(params.id),
//     });
//     return Response.json({ messege: "deleted the booking", response: resp });
//   } catch (error) {
//     return Response.json({ message: "Something went wrong" });
//   }
// };

export const GET = async (request: Request, { params }: any) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const { id } = await params; // Await params
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({
      message: "Booking found",
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong", error });
  }
};
