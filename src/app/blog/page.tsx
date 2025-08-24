import { BlogItem } from '@/src/components/BlogItem';
import { getBlogArticlesMetadata } from '@/src/utils/getBlogArticles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Niklas Kors | Blog",
  description: "A blog about all sorts of topics."
};

export default async function Page({ }) {

  const blogArticles = (await getBlogArticlesMetadata());

  return (
    <section className='container mx-auto min-h-full max-w-5xl px-6 pb-32'>
      <div className={`h-full`}>
        <div className={`
          flex
          flex-col
          items-stretch
          py-4
             `}>

          <div className='py-4 w-full max-w-full'>
            <h1 className='font-bold text-4xl pb-6'>Blog</h1>
            <p>
              I was inspired by an article that suggested writing a blog not necessarily for others, but for yourself. I don't recall where I read it, but the idea is that by composing pieces that others might read you put more effort into their quality and, consequently, clarify your thoughts.
            </p>
            <p>
              There is no single theme I intend to focus on. I consider many articles to be works in progress, so I may change or add sections over time. Possible topics include psychology, philosophy, technology, religion, spirituality, and metaphysics.
            </p>
          </div>

          {blogArticles.map(({ metadata, fileName }, i) => (
            <div key={fileName}>
              <BlogItem metadata={metadata} link={`/blog/${fileName.replace('.mdx', '')}`}></BlogItem>

              {
                i !== blogArticles.length - 1 && <hr className='text-neutral-200'></hr>
              }
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}