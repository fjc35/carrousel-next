import { ReactNode } from 'react';
import clsx from 'clsx'

interface CardProps {
  children?: ReactNode;
  className?: string;
  as?: React.ElementType;
}

const Card = ({ as: Component = 'div', className, children}: CardProps) => {
  return (
    <Component
      className={clsx(className, '')}
    >
      {children}
    </Component>
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
      {children}
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

Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;