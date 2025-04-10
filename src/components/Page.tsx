'use client'
import { PropsWithChildren } from 'react';
import { Header } from './Header';
import { useSearchParams } from 'next/navigation'

export function Page({ children }: PropsWithChildren) {
  const searchParams = useSearchParams()
  const isEmbed = searchParams.get('embed')

  if (isEmbed) {
    return children
  }

  return (
    <div className={`flex w-full flex-col h-[100vh]`}>
      <Header></Header>
      <div className='flex w-full content overflow-hidden'>
        <div className='overflow-auto w-full'>
          {children}
        </div>
      </div>
    </div>
  )
}