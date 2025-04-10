'use client'
import { SplitView } from '@/src/components/SplitView';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <SplitView>
    <div className={`
    flex
    flex-col
    w-full
    py-2
    prose
    prose-p:text-stone-900
    prose-li:text-stone-900
    prose-headings:mt-3
    prose-headings:font-semibold
    prose-headings:text-black
    prose-h1:text-5xl
    prose-h2:text-4xl
    prose-h3:text-3xl
    prose-h4:text-2xl
    prose-h5:text-xl
    prose-h6:text-lg
    max-w-full
    prose-blockquote:text-gray-500
    prose-blockquote:border-gray-300 
     prose-blockquote:font-light
     prose-blockquote:py-1
     prose-blockquote:leading-9
    `}>
      {children} </div>
  </SplitView>
}
