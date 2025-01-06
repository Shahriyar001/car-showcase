import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (request: Request, { params }: any) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({ messege: "deleted the booking", response: resp });
  } catch (error) {
    return Response.json({ message: "Something went wrong" });
  }
};
