import { Container } from '@/layout/components/Container'

type SimpleLayoutProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

const SimpleLayout = ({ title, intro, children }: SimpleLayoutProps) => {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 m:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}

export default SimpleLayout;