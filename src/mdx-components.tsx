import type { MDXComponents } from 'mdx/types'
import { Link } from './components/Link'
import { Comment } from './components/Comment'
import { QATree } from './components/qa-tree/QATree'
import { Q } from './components/qa-tree/Question'
import { A } from './components/qa-tree/Answer'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 className="text-2xl font-semibold">{children}</h1>,
    ...components,
    a: Link,
    Comment,
    QATree,
    Q,
    A
  }
}

