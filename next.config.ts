import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import mdxMermaid from 'mdx-mermaid'

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized:true,
  },
  trailingSlash: true,
  redirects: async()=> {
    return [
      {
        source: '/',
        destination: '/curriculum-vitae',
        permanent: true
      }
    ]
  }
};

const withMDX = createMDX({
  // extension: /\.(md|mdx)$/,
  // extensions: ['md', 'mdx'],
  options:{
    remarkPlugins: [[mdxMermaid, {output: 'svg',}]],
    
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)