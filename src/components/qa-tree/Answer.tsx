'use client'
import { PropsWithChildren, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useSplitViewContext } from '../SplitView';

function Answer({ value, children, article }: PropsWithChildren<{ value: string, article?: string }>) {
  const { prepareLink, showDetails } = useSplitViewContext();
  const containerRef = useRef<HTMLDivElement>(null);

  const onOpen = useCallback(() => {
    prepareLink(article || '');

    setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        showDetails(rect.top);

        containerRef.current.scrollIntoView({
          block: "start"
        })
      }
    });
  }, [prepareLink, article, containerRef.current]);

  if (!value && !children) {
    return null
  }

  return (<div ref={containerRef}
    className="flex flex-col pl-1 [&_ol]:m-0 [&_ol]:pl-3 [&_ul]:m-0 bg-neutral-50 p-1">
    <div className='pl-3'>
      <div>{value}
        {children}
        {article && (<div className='flex flex-row justify-end'>
          <button className='md:block hidden hover:cursor-pointer px-2 right-0 underline' onClick={onOpen}>source</button>
        </div>)}

      </div>
    </div>
  </div>)
}

export const A = Answer;

