const config = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  console.log("Enabled bundle analysis");
  module.exports = withBundleAnalyzer(config);
} else {
  module.exports = config;
}
