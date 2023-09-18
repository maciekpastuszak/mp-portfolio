/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      loader: 'custom',
      loaderFile: './pages/api/custom-loader.ts',
    }
  }
   
  module.exports = nextConfig