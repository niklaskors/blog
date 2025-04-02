import { PropsWithChildren } from 'react';
import { Header } from './Header';

export function Page({ children }: PropsWithChildren) {
  return (
    <div className={`flex w-full flex-col`}>
      <Header></Header>
      <div id='content'>
        {children}
      </div>
    </div>
  )
}