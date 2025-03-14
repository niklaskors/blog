import { readdir } from 'fs/promises'

// export async function generateStaticParams() {
//   const contents = await readdir('./@/content');

//   console.log(contents)

//   return { props: { posts: [] } }
// }

const dir = __dirname;

console.log(dir)

export default async function Page({ }) {
  const getPages = (async () => {
    const contents = await readdir('./content');
    console.log(contents)


    return contents
  })

  const pages = (await getPages()).map((name) => name.replace('.mdx', ''));




  console.log('xx', dir, pages)

  return (
    <div className={`
      flex
      flex-row
      items-stretch
      h-full
    `}>
      <aside className={
        `border
        p-3
        w-50
        `
      }>
        <ul>
          {pages.map((page) => (
            <li key={page}>
              <a href={`/blog/${page}`}>{page}</a>
            </li>
          ))}
        </ul>
      </aside>
      <div className={`
        flex-grow`}>

      </div>
    </div>
  )

  return <h1>Blog</h1>
}



