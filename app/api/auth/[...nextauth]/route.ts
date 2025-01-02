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

// const handler = NextAuth({
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         if (!credentials) {
//           return null;
//         }
//         const { email, password } = credentials;
//         if (!email || !password) {
//           return null;
//         }

//         const db = connectDB();
//         const currentUser = (await db)
//           .collection<User>("users")
//           .findOne({ email });

//         if (!currentUser) {
//           return null;
//         }

//         const passwordMatched = bcrypt.compareSync(
//           password,
//           currentUser.password
//         );

//         if (!passwordMatched) {
//           return null;
//         }
//         return currentUser;
//       },
//     }),
//   ],
//   callbacks: {},
//   pages: {
//     signIn: "/login",
//   },
// });

// export { handler as GET, handler as POST };

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
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
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { id: token.id, email: token.email };
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
