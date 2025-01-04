import { connectDB } from "@/lib/connectDB";

export const POST = async () => {
  const db = await connectDB();
  const bookingsCollection = db.collection("booking");
};
