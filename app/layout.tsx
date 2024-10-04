import type { Metadata } from "next";
import '@/styles/main.scss'

import Header from '@/layout/components/Header'
import Footer from '@/layout/components/Footer'

export const metadata: Metadata = {
  title: "Le Carrousel de Vern",
  description: "Boutique gourmande et de cadeaux à Vern-sur-Seiche",
};

const RootLayout= ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className="flex h-full flex-col">
        <div className="relative">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout;