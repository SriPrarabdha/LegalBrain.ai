/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["lh3.googleusercontent.com"],
    },
    // experiments: {
    //     topLevelAwait: true,
    //   },
};
module.exports = {
    webpack: (config) => {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
  };
module.exports = nextConfig
