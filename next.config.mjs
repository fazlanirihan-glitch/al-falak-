/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable static export for deployment
  // output: 'export',  // Uncomment for full static export
};

export default nextConfig;
