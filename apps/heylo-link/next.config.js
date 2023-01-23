//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const withPWA = require("next-pwa");

const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  pwa: {
    dest: "public",
    register: true,
        disable: process.env.NODE_ENV ===      'development',
    skipWaiting: true,
  }
};

module.exports = withNx(withPWA(nextConfig))
