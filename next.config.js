/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "NG-studio";
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = isGithubPages
  ? configuredBasePath || `/${repo}`
  : "";
const assetPrefix = isGithubPages ? `${basePath}/` : undefined;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
