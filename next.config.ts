// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
  
//    output: "export",
//   reactCompiler: true,
//   trailingSlash: true,
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'webronic.com',
          },
        ],
        destination: 'https://www.webronic.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
