// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ["cdn.imagin.studio", "anpsthemes.com", "i.ibb.co", "*"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**", // Allows any hostname
//       },
//     ],
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.imagin.studio", "anpsthemes.com", "i.ibb.co"], // List of specific domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows any hostname
      },
    ],
  },
};

export default nextConfig;
