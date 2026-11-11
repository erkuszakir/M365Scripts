/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@electric-sql/pglite', 'bcryptjs', 'pg'],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.tsx', '.js'],
    }
    return config
  },
}

export default nextConfig
