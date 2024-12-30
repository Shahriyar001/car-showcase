// import { Db, MongoClient, ServerApiVersion } from "mongodb";

// let db: Db | null = null;
// export const connectDB = async ()=>{
//   if(db) return db;
//   try {
//     const uri = process.env.NEXT_PUBLIC_MONGODB_URI
//     const client = new MongoClient(uri, {
//         serverApi: {
//           version: ServerApiVersion.v1,
//           strict: true,
//           deprecationErrors: true,
//         }
//       });
//       db = client.db('car-doctor')
//       return db;
//   } catch(error){
//     console.log(error);
//   }
// }

import { MongoClient, Db, ServerApiVersion } from "mongodb";

let db: Db | null = null;

export const connectDB = async (): Promise<Db> => {
  if (db) return db; // Return the existing connection if it exists

  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not defined.");
  }

  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("car-doctor"); // Specify the database name
    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; // Re-throw the error to handle it upstream
  }
};
