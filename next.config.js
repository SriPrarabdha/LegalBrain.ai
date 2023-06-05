/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["lh3.googleusercontent.com"],
    },
    experiments: {
        topLevelAwait: true
      }
}

module.exports = nextConfig
