/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@azure/identity', '@microsoft/microsoft-graph-client'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
    }
    return config
  },
}

export default nextConfig
