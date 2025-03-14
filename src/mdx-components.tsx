import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 className="text-2xl font-semibold">{children}</h1>,
    ...components,
  }
}