/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//         domains:["cdn.sanity.io"]
//     }
// }

// module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '**',
        },
      ],
    },
  }