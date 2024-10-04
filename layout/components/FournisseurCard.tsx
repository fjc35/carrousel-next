import { ReactNode } from 'react';
import Link from 'next/link'
import clsx from 'clsx'

interface CardProps {
  children?: ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Card = ({ as: Component = 'div', className, children}: CardProps) => {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

const CardLink = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-red transition group-hover:border-solid group-hover:border-2 sm:-inset-x-6 sm:rounded-2xl" />
      <Link href={href}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

interface CardTitleProps {
  children?: ReactNode;
  href?: string;
  as?: React.ElementType;
}

const CardTitle = ({ as: Component = 'h2', href, children }: CardTitleProps) => {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 group-hover:bg-red">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

const CardDescription = ({ children }: { children: ReactNode }) => {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 group-hover:bg-red">
      {children}
    </p>
  )
}

const CardCta = ({ children }: { children: ReactNode }) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
    </div>
  )
}

// interface CardEyebrowProps {
//   children?: ReactNode;
//   className?: string;
//   as?: React.ElementType;
// }

// Card.Eyebrow = function CardEyebrow({
//   as: Component = 'p',
//   decorate = false,
//   className,
//   children,
//   ...props
// }) {
//   return (
//     <Component
//       className={clsx(
//         className,
//         'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
//         decorate && 'pl-3.5'
//       )}
//       {...props}
//     >
//       {decorate && (
//         <span
//           className="absolute inset-y-0 left-0 flex items-center"
//           aria-hidden="true"
//         >
//           <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
//         </span>
//       )}
//       {children}
//     </Component>
//   )
// }

Card.Link = CardLink;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Cta = CardCta;
// Card.Eyebrow = CardEyebrow;

export default Card;