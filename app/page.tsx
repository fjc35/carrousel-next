import React from 'react';
import { promises as fs } from 'fs';

import { Container } from '@/layout/components/Container'

import Logo from '@/layout/components/Logo'
import Categories from '@/layout/components/Categories'
import PhotoSlider from '@/layout/components/PhotoSlider'

const ShowPhotoSlider = async () => {
  const file = await fs.readFile(process.cwd() + '/data/photos.json', 'utf8');
  const photos = JSON.parse(file);

  return <PhotoSlider collections={photos} />;
};

const ShowCategories = async () => {
  const file = await fs.readFile(process.cwd() + '/data/categories.json', 'utf8');
  const data = JSON.parse(file);

  return <Categories categories={data} />;
};

const Home = () => {
    return (
      <>
        <div className="fixed inset-0 flex md:px-8 lg:px-20">
          <div className="flex w-full">
            <div className="w-full bg-white ring-1 ring-zinc-100" />
          </div>
        </div>
        <main>
          <Logo/>

          <Container className="mt-12">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
              <div className="space-y-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 font-n27regular">Bienvenue au Carrousel de Vern</h1>
                <p className="mt-6 text-base text-zinc-600">Boutique gourmande & de cadeaux</p>
                <p className="mt-6 text-base text-zinc-600">Votre destination savoureuse et colorée au cœur de la ville</p>
              </div>
            </div>
          </Container>
          
          <ShowPhotoSlider />

          <div className="relative pt-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 font-n27regular">Notre offre</h1>
          </div>
          
          <ShowCategories />
        </main>
      </>
    );
}

export default Home;