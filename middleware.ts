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

import { NextResponse, NextRequest } from "next/server";

export const middleware = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("next-auth.session-token")?.value;
    const pathname = request.nextUrl.pathname;

    // Allow API routes and login page to proceed without authentication

    // Add custom logic here if needed
    if (!token) {
      console.log("Unauthenticated request detected");
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/error", request.url));
  }
};

export const config = {};
