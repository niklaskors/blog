'use client'

import Image from 'next/image'
import { Link as CustomLink } from './Link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface HeaderProps { }

export function Header() {
  const pathname = usePathname()

  const links = [
    { name: 'Curriculum Vitae', link: '/curriculum-vitae/' },
    { name: 'Blog', link: '/blog/' }
  ]

  const activeLinkClass = 'font-bold';

  return (
    <div>
      <div className={`
    flex
    border-b-1
  border-neutral-200
    px-6
    bg-white
    w-full
    fixed
    md:relative
    z-1
   `}>
        <div className={`
      w-full
      relative 
      flex
      flex-row  
      items-center
      h-15
      `}>
          <a href="/" className='block absolute left-0'>
            <h2 className='text-2xl font-bold '>N. Kors</h2>
          </a>

          <div className={`
          container 
          mx-auto 
          justify-end 
          flex 
          max-w-5xl
          `}>
            <ul className={`flex flex-row gap-4 md:gap-4`}>
              {links.map((link) => {
                return (
                  <li key={link.name}>
                    <Link prefetch href={link.link} className={`
                    text-neutral-700 
                    ${pathname === link.link ? activeLinkClass : 'font-medium'}`}>
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className='xl:absolute right-0 flex-row gap-2 hidden md:flex pl-8'>
            <CustomLink href="https://linkedin.com/in/niklaskors" underline={false}>
              <Image src="/images/social/linkedin.svg" width={20} height={20} alt="github"></Image>
            </CustomLink>
            <CustomLink href="https://github.com/niklaskors" underline={false}>
              <Image src="/images/social/github.svg" width={20} height={20} alt="github"></Image>
            </CustomLink>
          </div>
        </div>
      </div>
      <div className='h-15 md:hidden'></div>
    </div>

  )
}