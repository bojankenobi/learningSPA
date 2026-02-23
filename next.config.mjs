// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uključujemo React Compiler za maksimalne performanse i automatsku memoizaciju
  experimental: {
    reactCompiler: true,
  },
  
  // Kasnije ćemo ovde dodati i MDX konfiguraciju
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;