// /**
//  * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
//  * for Docker builds.
//  */
// await import("./src/env.js");

// /** @type {import("next").NextConfig} */
// const config = {};

// export default config;

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/',
//         destination: '/v0',
//         permanent: true,
//       },
//     ];
//   },
// };

// same but in ES format
export default {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/v0',
        permanent: true,
      },
    ];
  },
};
