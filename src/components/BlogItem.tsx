'use client'

import { useMemo } from 'react';
import { BlogMetadata } from '../types';
import { DateTime } from "luxon";
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export interface BlogItemProps {
  metadata: BlogMetadata;
  link: string;
}

export function BlogItem({ link, metadata }: BlogItemProps) {
  const createdAt = useMemo(() => {
    if (!metadata?.createdAt) {
      return false;
    }
    const creation = DateTime.fromFormat(metadata.createdAt, 'dd/MM/yyyy');
    return creation.setLocale('en').toRelative()
  }, [metadata])

  return (
    <a href={link}>
      <article className={`py-6 
      flex
      flex-col
      pr-6
      `}>
        <h2 className='text-2xl font-bold'>{metadata.title}</h2>
        <span className={`text-neutral-500 leading-6`}>
          {metadata.description}
        </span>

        <div className={`flex flex-row justify-between items-center`}>
          {createdAt && (
            <span className={`mt-4 text-neutral-400 text-sm`} suppressHydrationWarning>
              Created {createdAt}
            </span>
          )}
          <ArrowLongRightIcon fontSize={16} height={16}></ArrowLongRightIcon>
        </div>

      </article>
    </a>

  )
}