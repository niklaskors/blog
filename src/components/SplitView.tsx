'use client'
import { useSearchParams } from 'next/navigation';
import { createContext, PropsWithChildren, useCallback, useContext, useRef, useState } from 'react';

export const SplitViewContext = createContext<{
  detailRef: any;
  prepareLink: (newLink: string | null) => void;
  showDetails: (distanceFromTop: number) => void;
  link: null | string;
}>({
  detailRef: null,
  prepareLink: () => { },
  showDetails: () => { },
  link: null
});


export function useSplitViewContext() {
  const context = useContext(SplitViewContext);

  if (context === undefined) {
    throw new Error('useSplitViewContext must be used within a SplitView');
  }
  return context;
}

export function SplitView({ children }: PropsWithChildren<any>) {
  const [link, setLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const isEmbed = searchParams.get('embed');

  const prepareLink = useCallback((newLink: string | null) => {
    setLink(newLink);

    if (newLink !== link) {
      setLoading(true);

    }
  }, [setLoading, setLink, link]);

  const showDetails = useCallback((distanceFromTop?: number) => {

  }, [link]);

  return (
    <SplitViewContext.Provider value={{ detailRef, prepareLink, link, showDetails }}>
      <div ref={containerRef}
        className={`${link &&
          'md:flex md:flex-row items-stretch justify-stretch w-full h-full overflow-hidden'} transition-all duration-200`}>

        <div className="md:min-w-100 h-full overflow-auto">
          {children}
        </div>

        <div ref={detailRef} className='border-l-1 border-neutral-200 w-full relative bg-neutral-50 flex flex-col' style={{
          // paddingTop: scrollTop > 0 ? scrollTop - 80 : 0,
          transition: 'padding-top 0.1s ease-in-out'
        }}>

          {link && (<div className='self-end relative w-full px-2 z-1'>
            <div className='relative'>
              <div className='absolute right-0 underline hover:cursor-pointer' onClick={() => {
                prepareLink(null);
              }}>close</div>
            </div>
          </div>)}


          <div className="relative w-full overflow-auto overflow-x-auto min-w-100 h-full">
            {link && (
              <iframe
                allowTransparency
                onLoad={() => setLoading(false)}
                style={{ border: 'none', display: 'block', height: '100%', width: '100%', backgroundColor: 'transparent' }}
                src={link + '/?embed=true'}
              />
            )} {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-80 z-10">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SplitViewContext.Provider>
  );
}
