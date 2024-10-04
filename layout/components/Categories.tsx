"use client";

import Image from 'next/image'
import clsx from 'clsx'

import { Key, useEffect,  useState } from "react";
import { Container } from '@/layout/components/Container'

const Categories = ({ categories }: { categories: any }) => {
  let rotations = ['-rotate-2', 'rotate-2', '-rotate-2']

  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    setCategoriesData(categories);
  }, [categories]);

  return (
    <Container className="mt-4">
      <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-5 py-4 overflow-hidden">
        {categories?.map((item: any, index: number) => {
          const { description, src } = item;
          return (
            <div className="flex flex-col justify-evenly items-center" key={index}>
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