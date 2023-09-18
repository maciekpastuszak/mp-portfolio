/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      path: 'https://res.cloudinary.com/dqcadja0y/image/upload/v1695025731/maciejpastuszak/',
    }
  }
   
  module.exports = nextConfig