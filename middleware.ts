// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = async (request: Request) => {
//   const token = (await cookies(request)).get(
//     "__Secure-next-auth.session-token"
//   );
//   const pathname = request.nextUrl.pathname;
//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }
//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path", "/car-bookings/:path*"],
// };

// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = async (request: Request) => {
//   const token = (await cookies(request)).get(
//     "__Secure-next-auth.session-token"
//   );
//   const pathname = request.nextUrl.pathname;
//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }
//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path", "/car-bookings/:path*"],
// };

// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = (request: any) => {
//   const token = cookies().get("__Secure-next-auth.session-token");
//   const pathname = request.nextUrl.pathname;

//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }

//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path*", "/car-bookings/:path*"],
// };

// import { cookies } from "next/headers";
// import { NextResponse, NextRequest } from "next/server";

// export const middleware = (request: NextRequest) => {
//   // Get the cookies object
//   const cookieStore = cookies();
//   // Retrieve the specific cookie value
//   const token = cookieStore.get("__Secure-next-auth.session-token")?.value;
//   const pathname = request.nextUrl.pathname;

//   // Allow API routes to proceed without authentication
//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }

//   // Redirect unauthenticated users to the login page
//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path*", "/car-bookings/:path*"],
// };

// import { NextResponse, NextRequest } from "next/server";

// export const middleware = (request: NextRequest) => {
//   // Access the cookies directly from the request
//   const token = request.cookies.get("__Secure-next-auth.session-token")?.value;
//   const pathname = request.nextUrl.pathname;

//   // Allow API routes to proceed without authentication
//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }

//   // Redirect unauthenticated users to the login page
//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }

//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path*", "/car-bookings/:path*"],
// };

// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export const middleware = async (request) => {
//   const token = cookies(request).get("__Secure-next-auth.session-token");
//   const pathname = request.nextUrl.pathname;
//   if (pathname.includes("api")) {
//     return NextResponse.next();
//   }

//   if (!token) {
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path*"],
// };

// import { NextResponse, NextRequest } from "next/server";

// export const middleware = (request: NextRequest) => {
//   const token = request.cookies.get("__Secure-next-auth.session-token")?.value;
//   const pathname = request.nextUrl.pathname;

//   console.log("Token:", token); // Debugging: Log the token
//   console.log("Pathname:", pathname); // Debugging: Log the requested route

//   // Allow API routes to proceed without authentication
//   if (pathname.includes("api")) {
//     console.log("API route detected. Allowing request.");
//     return NextResponse.next();
//   }

//   // Redirect unauthenticated users to the login page
//   if (!token) {
//     console.log("No token found. Redirecting to login.");
//     return NextResponse.redirect(
//       new URL(`/login?redirect=${pathname}`, request.url)
//     );
//   }

//   console.log("Authenticated request. Proceeding.");
//   return NextResponse.next();
// };

// export const config = {
//   matcher: ["/my-bookings/:path*", "/services/:path*", "/car-bookings/:path*"],
// };

// import { NextResponse, NextRequest } from "next/server";

// export const middleware = async (request: NextRequest) => {
//   try {
//     // Get the cookie using async/await
//     const token = request.cookies.get("next-auth.session-token")?.value;
//     const pathname = request.nextUrl.pathname;

//     // Allow API routes to proceed without authentication
//     if (pathname.includes("api")) {
//       return NextResponse.next();
//     }

//     // Redirect unauthenticated users to the login page
//     if (!token) {
//       return NextResponse.redirect(
//         new URL(`/login?redirect=${pathname}`, request.url)
//       );
//     }
//     return NextResponse.next();
//   } catch (error) {
//     // Optionally handle errors (e.g., return an error response or log the issue)
//     return NextResponse.redirect(new URL("/error", request.url));
//   }
// };

// export const config = {};

import { NextResponse, NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("next-auth.session-token")?.value;
    const pathname = request.nextUrl.pathname;

    // Allow API routes and login page to proceed without authentication
    if (pathname.startsWith("/api") || pathname === "/login") {
      return NextResponse.next();
    }

    // Redirect unauthenticated users to the login page
    if (!token) {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/error", request.url));
  }
};

export const config = {};
