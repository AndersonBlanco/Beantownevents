/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    output: "export",
  reactCompiler: true,
  images: {
        unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mirrors.creativecommons.org",
      },
      {
        protocol: "https",
        hostname: "commons.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "d34w7g4gy10iej.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
