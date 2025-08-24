import { getBlogArticlesFileList, getBlogArticlesMetadata } from '@/src/utils/getBlogArticles'
import { Metadata, ResolvingMetadata } from 'next';
import { DateTime } from 'luxon';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;

  const { default: Post } = await import(`@/blog/${slug.join('/')}.mdx`)

  return (
    <section className='container mx-auto py-4 max-w-5xl px-6'>
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

  // support slug being either a string or array representation
  const slugString = Array.isArray(slug) ? slug.join('/') : String(slug);

  const article = articles.find((a) => a.fileName === slugString + '.mdx');


  if (!article || !article.metadata.title) {
    return {
      title: 'Niklas Kors | Blog'
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://niklaskors.com';
  const url = `${baseUrl}/blog/${slugString}`;

  const image = article.metadata?.image
    ? (article.metadata.image.startsWith('http') ? article.metadata.image : `${baseUrl}${article.metadata.image}`)
    : `${baseUrl}/web-app-manifest-512x512.png`;

  let publishedTime: string | undefined = undefined;
  if (article.metadata?.createdAt) {
    try {
      const iso = DateTime.fromFormat(article.metadata.createdAt, 'dd/MM/yyyy').toISO();
      publishedTime = iso ?? undefined;
    } catch (e) { }
  }

  return {
    title: `Niklas Kors | ${article.metadata.title}`,
    description: article.metadata?.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `Niklas Kors | ${article.metadata.title}`,
      description: article.metadata?.description,
      url,
      siteName: 'Niklas Kors',
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: article.metadata.title,
        },
      ],
      publishedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Niklas Kors | ${article.metadata.title}`,
      description: article.metadata?.description,
      images: [image],
    },
  }
}

export async function generateStaticParams() {
  const names = await getBlogArticlesFileList();

  return names.map((n) => {
    if (n.includes('/')) {
      const slugs = n.split('/');
      return {
        slug: slugs.map(s => s.replace('.mdx', ''))
      }
    }

    return { slug: [n.replace('.mdx', '')] }
  });
}

export const dynamicParams = false