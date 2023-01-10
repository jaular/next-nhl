/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Example: https://a.espncdn.com/i/teamlogos/nhl/500/tor.png
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        port: "",
        pathname: "/i/teamlogos/nhl/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true,
    fetchCache: true,
  },
  redirects: () => [
    {
      source: "/",
      destination: "/21", // Default to Toronto Maple Leafs
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
