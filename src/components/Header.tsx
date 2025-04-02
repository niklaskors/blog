'use client'

import Image from 'next/image'
import { Link as CustomLink } from './Link'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'

export interface HeaderProps { }

interface NavLink {
  name: string
  link: string
}

const Logo = () => {
  return (<a href="/" className='block absolute left-0'>
    <h2 className='text-2xl font-bold '>N. Kors</h2>
  </a>)
}

const MobileMenu = ({ links }: { links: NavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

  const onOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const OpenMenu = () => {
    return (
      <div className='h-screen bg-white p-6 pt-0'>
        <ul className={`flex flex-col w-full items-stretch justify-stretch`}>
          {links.map((link, i) => {
            return (
              <li key={link.name} className='flex flex-col items-center w-full'>
                <Link prefetch href={link.link} onClick={() => setIsOpen(false)} className={`
                 text-neutral-700 
                  text-lg
                  w-full
                  flex
                  flex-row
                  justify-between
                  py-6
                  ${pathname === link.link ? activeLinkClass : 'font-medium'}`}>
                  {link.name}
                  <span className='px-2'>
                    {'>'}
                  </span>
                </Link>
                {i !== links.length - 1 && <div className='w-full h-1 border-b-1 text-white border-neutral-200' />}
              </li>
            )
          })}
        </ul>
      </div>
    )
  };

  const activeLinkClass = 'font-bold';


  return (
    <div className='fixed md:hidden w-full flex flex-col z-1'>
      <div className='md:hidden flex 
        border-b-1
      border-neutral-200
        px-6
        bg-white'>
        <div className={`
        w-full
        relative 
        flex
        flex-row  
        items-center
        h-15
      `}>
          <Logo />
          <div className='flex ml-auto h-full py-4 hover:cursor-pointer' onClick={onOpen}>
            <Bars3Icon className='h-[25px] w-[25px]'></Bars3Icon>
          </div>
        </div>
      </div>

      {isOpen && (
        <OpenMenu />
      )}
    </div>
  )
}

export function Header() {
  const pathname = usePathname()

  const links: NavLink[] = [
    { name: 'Curriculum Vitae', link: '/curriculum-vitae/' },
    { name: 'Blog', link: '/blog/' }
  ]

  const activeLinkClass = 'font-bold';

  return (
    <div>
      <MobileMenu links={links}></MobileMenu>
      <div className={`
        border-b-1
      border-neutral-200
        px-6
        bg-white
        w-full
        fixed
        md:relative
        z-1
        hidden
        md:flex
      `}>
        <div className={`
      w-full
      relative 
      flex
      flex-row  
      items-center
      h-15
      `}>

          <Logo></Logo>

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