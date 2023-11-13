/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ["https://methods.puiux.org/"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    defaultFormats: "ar",
  },
};
