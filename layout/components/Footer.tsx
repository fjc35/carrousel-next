import Link from 'next/link'
import { Container } from '@/layout/components/Container'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500"
    >
      {children}
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className="mt-8 md:px-8 lg:px-20">
      <div className="relative flex flex-col gap-2 lg:flex-row lg:gap-6 pt-6 pb-10 lg:px-8 border-t border-zinc-100 items-center justify-between">
            <div className="font-medium text-sm text-zinc-800 text-center">
              <NavLink href="https://maps.app.goo.gl/gCRBNPYyd3dgdKKK6">2 place de la poste, 35770 Vern-sur-Seiche - 02 90 56 08 82</NavLink>
            </div>
            <div className="text-sm text-zinc-400 text-center">
              &copy; {new Date().getFullYear()} Le Carrousel de Vern
            </div>
      </div>
    </footer>
  )
}

export default Footer;
