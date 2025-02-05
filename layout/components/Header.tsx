"use client";

import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

import InstagramIcon from '@/layout/components/SocialIcons'
import avatarImage from '@/public/LECARROUSELDEVERN_LOGO_C_ROSE_FONDBLEU.jpg'
import menuImage from '@/public/LECARROUSELDEVERN_LOGO_C_NB.jpg'

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-carrousel-rose'
            : 'hover:text-carrousel-rose'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-800 to-carrousel-rose" />
        )}
      </Link>
    </li>
  )
}

const DesktopNavigation = ({ className }: { className: string }, ...props: React.HTMLAttributes<HTMLElement>[]) => {
  return (
    <nav className={className}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        <li>
          <Link href="/">
            <Image
              src={menuImage}
              alt=""
              sizes='4.5rem'
              className="relative transition rounded-full object-cover h-8 w-8"
            />
            
          </Link>
        </li>
        <NavItem href="/">Acceuil</NavItem>
        <NavItem href="/apropos">A propos de moi</NavItem>
        <NavItem href="/fournisseurs">Mes fournisseurs</NavItem>
        <NavItem href="#">Mes partenaires</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </ul>
    </nav>
  )
}

const Avatar = ({ large = false, className }: { large?: boolean; className: string }, ...props: React.AnchorHTMLAttributes<HTMLAnchorElement>[]) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4.5rem' : '3.5rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover',
          large ? 'h-18 w-18' : 'h-12 w-12'
        )}
      />
    </Link>
  )
}

interface SocialLinkProps {
  icon: React.ElementType;
  href: string;
}

const SocialLink = ({ icon: Icon, href, ...props }: SocialLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link href={href} className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600" />
    </Link>
  )
}

const Header = () => {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [navbarOpacity, setNavbarOpacity] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setNavbarShadow(window.scrollY > 0);
      setNavbarOpacity(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <header className={`py-5 z-30 sticky top-0 ${navbarShadow ? "shadow-sm" : "shadow-none"} ${navbarOpacity ? "bg-white/75" : "bg-white/0" } hidden md:block`} >
        <div className="relative flex items-center justify-between mx-auto px-5 max-w-3xl z-40">
          <div>
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>      
          <div className="flex-grow"></div>
          <div className="pr-4">
            <SocialLink
              href="https://www.instagram.com/lecarrouseldevern"
              aria-label="Suivez-moi sur Instagram"
              icon={InstagramIcon}
            />          
          </div>
          <div>  
            <Avatar large={false} className="h-16 w-16 origin-left" />
          </div>
        </div>
      </header>
  )
}

export default Header;