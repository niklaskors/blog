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
    <section className='container mx-auto h-full max-w-5xl'>
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
              I was inspired by an article that introduced the idea of writing a blog not necessarily for anyone else, but for yourself.
              Unfortunately, I don't recall where I read about it but the general idea is that by writing pieces of text that might be read
              by others, you put more effort into the quality. Making it structurally sound and coherent.
            </p>
            <p>
              So don't expect to find a coherent theme other than it being a random collection
              of topics that interest me. Also, I consider some of the articles to be a continuous work in progress so I might
              change or add sections over time. Some topics that I might write about are about: Psychology, Philosophy, Religion,
              Spirituality, Metaphysics.

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