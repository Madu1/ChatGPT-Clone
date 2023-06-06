/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    images :{
        domains: ['links.papareact.com']
    },
    experimental : {
        appDir: true,
    },
    i18n :{
        locales: ["en"],
        defaultLocale: "en",
    },

};

// module.exports = {
//     async redirects() {
//       return [
//         {
//           source: './',
//           destination: '/',
//           permanent: false,
//         },
//       ];
//     },
//   };
  
