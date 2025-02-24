import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

interface User {
  _id: string;
  email: string;
  password: string; // Add other fields as needed
}

interface MongoUser {
  _id?: string;
  email: string;
  password?: string; // Optional for OAuth users
  name?: string;
  image?: string;
}

const handler = NextAuth({
  secret: "123456",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // Match session maxAge
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const db = await connectDB();
        const currentUser = await db
          .collection<User>("users")
          .findOne({ email });

        if (!currentUser) {
          throw new Error("Invalid email or password");
        }

        const passwordMatched = bcrypt.compareSync(
          password,
          currentUser.password
        );

        if (!passwordMatched) {
          throw new Error("Invalid email or password");
        }

        // Return a safe user object
        return { id: currentUser._id.toString(), email: currentUser.email };
      },
    }),
    GoogleProvider({
      clientId:
        "1057925859769-gfsg26ph9vnidkd083j36hkg7filnfbs.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GitHubProvider({
      clientId: "a9163fe26bb93180fdc5",
      clientSecret: "f4faea44ed4f2161d96d6a3f33d28e67546e6473",
    }),
  ],
  callbacks: {
    // async signIn({ user, account }) {
    //   if (account.provider === "google" || account.provider === "github") {
    //     const { name, email, image } = user;
    //     try {
    //       const db = connectDB();
    //       const userCollection = db.collection("users");
    //       const userExist = await userCollection.findOne({ email });
    //       if (!userExist) {
    //         const res = await userCollection.insertOne(user);
    //         return user;
    //       } else {
    //         return user;
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   } else {
    //     return user;
    //   }
    // },
    async signIn({ user, account }: any) {
      try {
        const db = await connectDB();
        const userCollection = db.collection<any>("users");

        if (account.provider === "google" || account.provider === "github") {
          const { email, name, image } = user;

          if (!email) {
            throw new Error("Email is required for OAuth users");
          }

          let existingUser = await userCollection.findOne({ email });

          if (!existingUser) {
            const newUser = {
              email,
              name,
              image,
              password: null, // OAuth users don't have a password
            };
            const result = await userCollection.insertOne(newUser);
            return { id: result.insertedId.toString(), ...newUser };
          }

          return existingUser;
        }

        return user;
      } catch (error) {
        console.error("SignIn callback error:", error);
        return false;
      }
    },
    // async signIn({ user, account }) {
    //   try {
    //     const db = await connectDB();
    //     const userCollection = db.collection<MongoUser>("users");

    //     if (account.provider === "google" || account.provider === "github") {
    //       const { email, name, image } = user;

    //       if (!email) {
    //         throw new Error("Email is required for OAuth users");
    //       }

    //       let existingUser = await userCollection.findOne({ email });

    //       if (!existingUser) {
    //         const newUser = {
    //           email,
    //           name,
    //           image,
    //           password: null, // OAuth users don't have a password
    //         };
    //         const result = await userCollection.insertOne(newUser);
    //         return result.insertedId.toString(); // Return the user ID as a string
    //         // return { id: result.insertedId.toString() };
    //       }

    //       return existingUser._id.toString(); // Return the existing user ID as a string
    //     }

    //     return user.id.toString(); // For non-OAuth users, return their ID as a string
    //   } catch (error) {
    //     console.error("SignIn callback error:", error);
    //     return false; // Return false if there was an error
    //   }
    // },
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user = { id: token.id, email: token.email, name: token.name };
        console.log("token", token);
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };

// GoogleProvider({
//   clientId: '1057925859769-gfsg26ph9vnidkd083j36hkg7filnfbs.apps.googleusercontent.com',
//   clientSecret: "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",
// }),
// GitHubProvider({
//   clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
//   clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
// }),
