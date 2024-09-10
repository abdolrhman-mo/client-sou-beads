/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
            protocol: new URL(process.env.NEXT_PUBLIC_API_URL).protocol.replace(':', ''), // Extracts protocol from env var
            hostname: new URL(process.env.NEXT_PUBLIC_API_URL).hostname, // Extracts hostname from env var
            port: new URL(process.env.NEXT_PUBLIC_API_URL).port || '', // Extracts port if available
            pathname: '/media/products/**', // Adjust the path to match your image URLs
        },
    ],
  }
}

export default nextConfig
