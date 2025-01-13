import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    console.log("Received POST request");

    const newUser = await request.json();
    console.log("Parsed new user data:", newUser);

    // Connect to the database
    const db = await connectDB();
    console.log("Connected to the database");

    const userCollection = db.collection("users");

    // Check if the user already exists
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      console.log("User already exists");
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    console.log("Password hashed successfully");

    // Insert the new user into the database
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });
    console.log("New user inserted:", resp);

    return new Response(
      JSON.stringify({ message: "User created successfully", data: resp }),
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error in POST handler:", error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
