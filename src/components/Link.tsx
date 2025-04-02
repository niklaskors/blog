import { PropsWithChildren } from 'react';

export interface LinkProps extends PropsWithChildren {
  href: string;
  underline?: boolean;
}

export function Link({ href, children, underline = true }: LinkProps) {

  const underlineClass = underline ? 'border-b-1' : '';

  return (
    <a className={`
      text-neutral-600
      after:content-['_']
      border-neutral-400
      inline-block
      px-1
      leading-6
      no-underline
      ${underlineClass}
      `} target="_blank" rel="noopener noreferrer" href={href}>{children}</a>
  )
}