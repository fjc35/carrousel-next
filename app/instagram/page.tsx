import React from 'react';
import type { Metadata } from "next";
import InstaGrid from '@/layout/components/InstaGrid'
import SimpleLayout from '@/layout/components/SimpleLayout'

export const metadata: Metadata = {
  title: "Instagram test",
  description: "Instagram test",
};

const InstaPage = () => {
  return (
    <>
      <div className="fixed inset-0 flex md:px-8 lg:px-20">
        <div className="flex w-full">
          <div className="w-full bg-white ring-1 ring-zinc-100" />
        </div>
      </div>

      <SimpleLayout
        title="Instagram"
        intro="My posts"
      >
        <div>
          <h1>Welcome to my Instagram</h1>
          {/* <InstaGrid /> */}
        </div>
      </SimpleLayout>
    </>
  )
}

export default InstaPage;
