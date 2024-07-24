// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: '',
          pathname: '**',
        },
      ],
      domains: ['firebasestorage.googleapis.com'],
    },
  }
  