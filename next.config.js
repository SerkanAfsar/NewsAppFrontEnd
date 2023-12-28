const path = require("path");
const nextConfig = {
  // experimental: {
  //   appDir: true,
  //   serverActions: true,
  // },

  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      path.join(__dirname, "Components"),
      path.join(__dirname, "app"),
      path.join(__dirname, "Containers"),
    ],
    additionalData: `@import "@/styles/custom.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
};

module.exports = nextConfig;
