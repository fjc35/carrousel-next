import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

type EventHandler<T> = (event: React.SyntheticEvent<T>) => void;

import { CSSProperties } from 'react';

interface MainContainerProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: EventHandler<HTMLDivElement>;
  onClick?: EventHandler<HTMLDivElement>;
  onMouseLeave?: EventHandler<HTMLDivElement>;
  onKeyDown?: EventHandler<HTMLDivElement>;
}

const OuterContainer = forwardRef<HTMLDivElement, MainContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('md:px-8 lg:px-20', className)} {...props}>
        <div className="mx-auto lg:max-w-max">{children}</div>
      </div>
    );
  }
);

const InnerContainer = forwardRef<HTMLDivElement, MainContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('relative px-4', className)} {...props}>
        <div className="mx-auto lg:max-w-6xl">{children}</div>
      </div>
    );
  }
);

const Container = forwardRef<HTMLDivElement, MainContainerProps>(
  ({ children, style, ...props }, ref) => {
    return (
      <OuterContainer ref={ref} {...props} style={style}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
);

// Extend the Container component to include Outer and Inner properties
interface ContainerComponent extends React.ForwardRefExoticComponent<MainContainerProps & React.RefAttributes<HTMLDivElement>> {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
}

const ContainerWithProps = Container as ContainerComponent;
ContainerWithProps.Outer = OuterContainer;
ContainerWithProps.Inner = InnerContainer;

export { ContainerWithProps as Container };
