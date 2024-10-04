import Image from 'next/image'
import type { Metadata } from "next";

import Card from '@/layout/components/FournisseurCard'
import SimpleLayout from '@/layout/components/SimpleLayout'

import autrethe from '@/public/fournisseurs/autrethe.jpg'
import mademoisellea from '@/public/fournisseurs/mademoisellea.jpg'
import mamzellechoco from '@/public/fournisseurs/mamzellechoco.jpg'
import lbchocolatier from '@/public/fournisseurs/lbchocolatier.jpg'

const fournisseurs = [
  {
    name: "L'autre Thé",
    description:
      `L’Autre thé privilégie des thés et ingrédients majoritairement issus de l’agriculture biologique et du commerce équitable. Ils sélectionnent les meilleurs thés de l’agriculture conventionnelle en travaillant avec des petits producteurs qui n’utilisent pas de produits chimiques, mais qui n’ont pas les moyens d’être labellisés bio.

          Une autre raison et pas des moindres qui m’a fait choisir l’Autre thé : son goût d’exception.

          Leur devise : 'On ne naît pas buveur de thé, on le devient'`,
    link: {
      href: 'https://www.lautrethe.com/fr/',
    },
    image: autrethe,
  },
  {
    name: "Mademoiselle A",
    description:
      `Pour ceux qui ne le savent pas, on appelle gâteau de voyage un gâteau qui se conserve à température ambiante pendant au moins huit jours et jusqu’à plusieurs semaines pour certains.
      Un exemple, les cakes gourmands de Mademoiselle A, garnis d'un confit ou d'un praliné et d’un glaçage au chocolat, juste ce qu'il faut pour apporter une touche de gourmandise et un beau visuel. De vrais bijoux !

      Laissez-vous transporter par ses recettes originales : cake framboises- poivre de timut, cacahuètes fleur de sel, gingembre-citron vert, réglisse....

      Vous reprendrez bien une petite part 😉 ?`,
    link: {
      href: '#',
    },
    image: mademoisellea,
  },
  {
    name: "LB Chocolatier",
    description:
      `Passionné par le travail du chocolat, Ludovic a décidé d'aller plus loin en créant son atelier entre Vitré et Fougères après douze années passées auprès de deux grands chocolatiers de la région.
      Comme il le dit si bien : "le chocolat offre des possibilités qui n'ont de limites que celles de mon imagination!" 😊

      Ses valeurs : Faire vivre l'artisanat et créer des produits de qualité, en privilégiant les producteurs français et bretons.`,
    link: {
      href: '#',
    },
    image: lbchocolatier,
  },
  {
    name: "Mam'zelle Choco",
    description:
      `C'est sa passion pour le chocolat qui l'a conduite à faire une transition professionnelle de la psychologie vers la chocolaterie.

      Émilie travaille le chocolat dans son atelier à Cesson-Sévigné, aux côtés de Mathis et Marie.

      Tous les chocolats et pralinés sont fabriqués de manière artisanale. L'équipe attache une grande importance à travailler avec des produits de haute qualité, en utilisant exclusivement des cacaos purs d'origine.

      Mam’zelle Choco est certifiée Agriculture Biologique et Commerce Équitable.`,
    link: {
      href: '#',
    },
    image: mamzellechoco,
  },
]

export const metadata: Metadata = {
  title: "Mes fournisseurs",
  description: "Boutique gourmande et de cadeaux à Vern-sur-Seiche",
};

const Fournisseur = () => {
  return (
    <>
      <div className="fixed inset-0 flex md:px-8 lg:px-20">
        <div className="flex w-full">
          <div className="w-full bg-white ring-1 ring-zinc-100" />
        </div>
      </div>

      <SimpleLayout
        title="Mes fournisseurs"
        intro="[Description]..."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2"
        >
          {fournisseurs.map((fournisseur) => (
            <Card as="li" key={fournisseur.name} className={undefined}>
              <div className="relative flex items-center justify-center max-h-64">
                <Image
                  src={fournisseur.image}
                  alt=""
                  className="h-full object-contain"
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800">
                <Card.Link href={fournisseur.link.href}>{fournisseur.name}</Card.Link>
              </h2>
              <Card.Description>{fournisseur.description}</Card.Description>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export default Fournisseur;
