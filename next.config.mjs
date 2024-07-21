/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule?.test?.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      use: ["@svgr/webpack"],
    });

    config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;
