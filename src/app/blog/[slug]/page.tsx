import { getBlogArticlesFileList, getBlogArticlesMetadata } from '@/src/utils/getBlogArticles'
import { Metadata, ResolvingMetadata } from 'next';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`@/blog/${slug}.mdx`)

  return (
    <section className='container mx-auto py-4 max-w-5xl'>
      <Post />
    </section>
  )
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;

  const articles = await getBlogArticlesMetadata();

  const article = articles.find((a) => a.fileName === slug + '.mdx');


  if (!article || !article.metadata.title) {
    return {
      title: 'Niklas Kors | Blog'
    }
  }

  return {
    title: `Niklas Kors | ${article.metadata.title}`,
    description: article.metadata?.description
  }
}


export async function generateStaticParams() {
  const names = await getBlogArticlesFileList();

  return names.map((n) => ({ slug: n.replace('.mdx', '') }));
}

export const dynamicParams = false