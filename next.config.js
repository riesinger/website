const config = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  redirects: async function () {
    return [
      {
        source: "/posts/index.xml",
        destination: "/feeds/feed.xml",
        permanent: true,
      },
    ];
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
