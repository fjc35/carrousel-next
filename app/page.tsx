import React from 'react';
import { promises as fs } from 'fs';

import { Container } from '@/layout/components/Container'

import Logo from '@/layout/components/Logo'
import Categories from '@/layout/components/Categories'
import PhotoSlider from '@/layout/components/PhotoSlider'
import GoogleReviews from '@/layout/components/GoogleReviews';

const ShowPhotoSlider = async () => {
  const file = await fs.readFile(process.cwd() + '/data/photos.json', 'utf8');
  const photos = JSON.parse(file);

  return <PhotoSlider title="Le Carrousel en images" photos={photos} />;
};

const ShowBoutique = async () => {
  const file = await fs.readFile(process.cwd() + '/data/boutique.json', 'utf8');
  const data = JSON.parse(file);

  const description = `Le Carrousel de Vern, c'est aussi une sélection de petites merveilles à s'offrir ou à offrir !
  Découvrez des objets choisis pour leur originalité, leur caractère unique.`;

  return <Categories title="La boutique cadeaux" description={description} categories={data} />;
};

const ShowCoffrets = async () => {
  const file = await fs.readFile(process.cwd() + '/data/coffrets.json', 'utf8');
  const data = JSON.parse(file);

  const description = `Offrez un cadeau personnalisé en choisissant parmi nos compositions prêtes à offrir ou en créant la vôtre.
  Sélectionnez vos produits préférés parmi les différentes catégories et composez un coffret unique selon vos envies. 
  Choisissez entre un panier, une pochette transparente, un sac à fenêtre ou une box, et je m'occupe du reste !`;

  return <Categories title="Les coffrets cadeaux" description={description} categories={data} />;
};

const ShowEntreprise = async () => {
  const description = `Offrez un cadeau original et sur-mesure à vos collaborateurs, clients ou partenaires. Vous avez le choix entre plusieurs compositions à thème ou des compositions personnalisées, adaptées à vos besoins, votre image et votre budget.

      Contactez-moi pour plus d'informations ou pour personnaliser votre offre !`;

  return <Categories title="Offre aux associations et entreprises" description={description} categories={[]} />;
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

          <Container>
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
              <div className="space-y-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 font-n27regular">Bienvenue au Carrousel de Vern</h1>
                <p className="text-base text-zinc-600">Boutique gourmande & de cadeaux<br/>
                  Votre destination savoureuse et colorée au cœur de la ville</p>
              </div>
              <hr></hr>
            </div>
          </Container>     

          <Container className="mt-12">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none">
              <div className="space-y-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 font-n27regular">L&rsquo;épicerie fine</h1>
                <p className="mt-6 text-base text-zinc-600">Je vous invite à découvrir une sélection de délices artisanaux français et très majoritairement locaux : biscuits sucrés et salés, tartinades végétales, caramels au beurre salé, pâtes à tartiner, miel, confiseries,chocolats ainsi qu&rsquo;une gamme de cafés de spécialité bios, et une large gamme de thés bios.</p>
              </div>
            </div>
          </Container>     
 
          <ShowBoutique />
          <ShowCoffrets />
          <ShowEntreprise />

          <ShowPhotoSlider />
        </main>

        <GoogleReviews />
      </>
    );
}

export default Home;