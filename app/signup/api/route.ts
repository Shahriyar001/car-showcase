// import { connectDB } from "@/lib/connectDB";
// import bcrypt from "bcrypt";

// export const POST = async (request: any) => {
//   const newUser = await request.json();
//   try {
//     const db = await connectDB();
//     const userCollection = db.collection("users");
//     const exist = await userCollection.findOne({ email: newUser.email });
//     if (exist) {
//       return Response.json({ message: "User Exists" }, { status: 304 });
//     }
//     const hashPassword = bcrypt.hashSync(newUser.password, 10);
//     const resp = await userCollection.insertOne({
//       ...newUser,
//       password: hashPassword,
//     });
//     return Response.json({ message: "User Created" }, { status: 200 });
//   } catch (error) {
//     return Response.json(
//       { message: "Something Went Wrong", error },
//       { status: 500 }
//     );
//   }
// };

import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request: any) => {
  try {
    const newUser = await request.json();

    // Connect to the database
    const db = await connectDB();
    const userCollection = db.collection("users");

    // Check if the user already exists
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 409,
      });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(newUser.password, 10);

    // Insert the new user into the database
    const resp = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });

    return new Response(
      JSON.stringify({ message: "User created successfully", data: resp }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error }),
      { status: 500 }
    );
  }
};
