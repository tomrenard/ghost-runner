import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  transpilePackages: ["@mantine/core", "@mantine/hooks"],
};

export default withNextIntl(nextConfig);
