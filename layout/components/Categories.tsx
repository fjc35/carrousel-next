"use client";

import Image from 'next/image'
import clsx from 'clsx'

import { Key, useEffect,  useState } from "react";
import { Container } from '@/layout/components/Container'

interface Category {
  name: string;
  description: string;
  src: string;
}

const Categories = ({ title, description = "", categories }: { title: string, description: string, categories: Category[] }) => {
  const rotations = ['-rotate-2', 'rotate-2', '-rotate-2']

  const [categoriesData, setCategoriesData] = useState<Category[]>([]);

  useEffect(() => {
    setCategoriesData(categories);
  }, [categories]);

  return (
    <Container className="mt-4">
      <div className="relative pt-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 font-n27regular">
        {title}
        </h1>
        {description && ( <p style={{ whiteSpace: "pre-line" }} className="mt-6 text-base text-zinc-600">
          {description}
        </p>
        )}
      </div>      
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5 overflow-hidden bg-gradient py-4 px-6 rounded-xl mt-5">
        {categories?.map((item: Category, index: number) => {
          const { name, description, src } = item;
          return (
            <div className="flex flex-col items-center" key={index}>
              <div className="font-n27regular font-bold w-44 text-center pb-4">
                {name}
              </div>
              <div
                className={clsx(
                    'relative aspect-[9/10] w-32 flex-none overflow-hidden rounded-xl bg-zinc-100',
                    rotations[index % rotations.length]
                )}
              >
              <Image
                src={src}
                alt=""
                width={224}
                height={201}
                sizes="(min-width: 640px) 14rem, 8rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
              </div>
              <div className="font-n27regular w-44 text-center pt-3">
                {description}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  )
}
  
export default Categories