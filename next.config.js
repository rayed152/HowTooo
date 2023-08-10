/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  async middleware() {
    const middleware = await require("./middleware/auth").default;
    return { middleware };
  },
};

module.exports = nextConfig;
