import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request: any, context: { params: any }) => {
  const { params } = context; // Destructure params from context
  const db = await connectDB();
  const servicesCollection = db.collection("cars");

  try {
    const car = await servicesCollection.findOne({
      _id: new ObjectId(params.id),
    }); // Ensure _id is ObjectId
    return new Response(JSON.stringify({ car }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching car:", error);
    return new Response("Failed to fetch car", { status: 500 });
  }
};
