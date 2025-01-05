import { connectDB } from "@/lib/connectDB";

export const GET = async (request: any, { params }: any) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const myBookings = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return Response.json({ myBookings });
  } catch (error) {
    console.log(error);
  }
};
