import Image from "next/image";
import mararthon from '../images/marathon.webp'
import raytracer from '../images/RayTracer.webp'
import gds from '../images/gestionDeStock.webp'
import flatcraft from '../images/flatcraft.webp'


export default function Projets() {
  return (
    <div className="flex flex-col items-center">
      <section className="mt-12 p-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="projet-card-article">
              <Image src={mararthon} alt="Pas d'image"  className="projet-card-image"/>
              <h3 className="font-style pl-3">Marathon du web</h3>
              <p className="pl-3 pr-3">Sprint de 48h pour réaliser un application événementiels en Laravel / Blade</p>
            </article>
          <article className="projet-card-article">
            <Image src={raytracer} alt="Pas d'image" className="projet-card-image"/>
            <h3 className="font-style pl-3">RayTracer</h3>
            <p className="pl-3 pr-3">Réalisation d&apos;un Raytracer en Java avec l&apos;aide de patrons de conceptions</p>
          </article>
            <article className="projet-card-article">
              <Image src={flatcraft} alt="Pas d'image"  className="projet-card-image"/>
              <h3 className="font-style pl-3">FlatCraft</h3>
              <p className="pl-3 pr-3">Réalisation d&apos;un flatcraft en JavaFX avec l&apos;aide de patrons de conceptions</p>
            </article>
            <article className="projet-card-article">
              <Image src={gds} alt="Pas d'image"   className="projet-card-image"/>
              <h3 className="font-style pl-3">Gestion de stock</h3>
              <p className="pl-3 pr-3">Application réalisé en JavaFX durant la 1er année de mon BUT informatique, 
                permettant de gérer les stocks entre divers entrepots</p>
            </article>
        </section>
      </div>
  );
}
