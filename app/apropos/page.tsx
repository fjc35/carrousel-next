import type { Metadata } from "next";

import Card from '@/layout/components/PresentationCard'
import SimpleLayout from '@/layout/components/SimpleLayout'

export const metadata: Metadata = {
  title: "A propos de moi",
  description: "Boutique gourmande et de cadeaux à Vern-sur-Seiche",
};

const presentation = [
  {
    name: "À propos de moi",
    description:
      `Bienvenue sur mon site ! Je suis ravie de vous accueillir dans mon univers, où se mêlent gourmandise,
        convivialité et authenticité. Passionnée par les beaux et bons produits, les couleurs éclatantes, la
        décoration et les objets pleins de charme.

        Ancienne pâtissière et formée au thé, j’ai toujours été très gourmande et attirée par l’esthétique d’une
        gourmandise soignée et bien présentée. Cette passion m’a naturellement guidée vers la création de ma
        propre boutique, où je sélectionne avec soin produits d’épicerie fine et objets du quotidien. J’ai créé cette
        boutique pour partager avec vous des pépites gustatives et des petites merveilles qui embellissent la
        maison et le quotidien.`
  },
  {
    name: "Une épicerie fine pour les gourmets",
    description:
      `Les saveurs sont à l’honneur ! Grande gourmande, je sélectionne avec soin des produits d’épicerie fine
        artisanaux et français qui raviront les amateurs de bonnes choses : chocolats fins, biscuits sucrés et salés,
        tartinades savoureuses, confiseries délicates et glaces. Pour accompagner ces plaisirs gourmands, vous
        trouverez également une belle sélection de thés et de cafés biologiques, choisis pour leur qualité et leur
        éthique.`
  },
  {
    name: "Un univers coloré pour votre intérieur et votre quotidien",
    description:
      `Au-delà des plaisirs de la table, j’ai à cœur de vous proposer des objets qui apportent une touche de et de
        couleur et de gaîté à votre quotidien. Découvrez une sélection de vaisselle élégante, de jolies pièces de
        décoration, des accessoires pour la maison et pour vous mesdames !`
  },
  {
    name: "Une expérience unique et conviviale",
    description:
      `Plus qu’une simple boutique, j’ai souhaité créer un lieu où l’on prend le temps de découvrir, d’échanger et
        de se faire plaisir. Que vous soyez à la recherche d’un cadeau original ou d’un petit plaisir personnel, je
        serai ravie de vous conseiller et de partager avec vous ma passion pour les beaux produits.
        N’hésitez pas à me contacter ou à venir me rendre visite en boutique !`
  },
]

const APropos = () => {
  return (
    <>
      <div className="fixed inset-0 flex md:px-8 lg:px-20">
        <div className="flex w-full">
          <div className="w-full bg-white ring-1 ring-zinc-100" />
        </div>
      </div>

      <SimpleLayout
        title="A propos de moi"
        intro=""
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12  "
        >
          {presentation.map((section, index) => (
            <Card as="li" key={section.name} className={`${index % 2 === 0 ? "left" : "right"}`}>
              <h2 className="mt-6 text-base font-semibold text-zinc-800">
                {section.name}
              </h2>
              <Card.Description>{section.description}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export default APropos;
