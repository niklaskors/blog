'use client'
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function Question({ value, children }: PropsWithChildren<{ value: string }>) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [maxHeight, setMaxHeight] = useState<string>('10000px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      if (isExpanded) {
        setMaxHeight(`${el.scrollHeight}px`);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [isExpanded]);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isExpanded ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isExpanded]);

  return (
    <div className="flex flex-col gap-2 py-1">
      <div
        className="flex flex-row items-center font-bold gap-2 hover:cursor-pointer"
        onClick={() => setIsExpanded(prev => !prev)}
      >
        <div>
          <ChevronRightIcon
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''
              } ${children ? '' : 'text-neutral-400'}`}
            height={16}
          />
        </div>
        {value}
      </div>

      <div
        className="pl-2 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <div
          ref={contentRef}
          className="border-l border-neutral-200 pl-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export const Q = Question;