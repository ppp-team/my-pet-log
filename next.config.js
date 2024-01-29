/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push(
      { test: /\.svg$/i, type: "asset", resourceQuery: /url/ },
      {
        test: /\.svg$/i,
        // issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
    );

    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);
