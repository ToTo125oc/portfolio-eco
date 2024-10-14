import Image from "next/image";
import mararthon from '../images/marathon.webp'
import raytracer from '../images/RayTracer.webp'
import gds from '../images/gestionDeStock.webp'
import flatcraft from '../images/flatcraft.webp'


export default function Projets() {
  return (
    <div className="flex flex-col items-center">
      <section className="mt-12 p-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
              <Image src={mararthon} alt="Pas d'image" width={300} height={200} style={{objectFit:"cover"}} />
              <h3 className="text-xl font-bold">Marathon du web</h3>
              <p>Sprint de 48h pour réaliser un application événementiels en Laravel / Blade</p>
            </article>
          <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
            <Image src={raytracer} alt="Pas d'image" width={300} height={200} style={{objectFit:"cover"}}/>
            <h3 className="text-xl font-bold">RayTracer</h3>
            <p>Réalisation d&apos;un Raytracer en Java avec l&apos;aide de patrons de conceptions</p>
          </article>
            <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
              <Image src={flatcraft} alt="Pas d'image" width={300} height={200} style={{objectFit:"cover"}}/>
              <h3 className="text-xl font-bold">FlatCraft</h3>
              <p>Réalisation d&apos;un flatcraft en JavaFX avec l&apos;aide de patrons de conceptions</p>
            </article>
            <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
              <Image src={gds} alt="Pas d'image" width={300} height={200} style={{objectFit:"cover"}}/>
              <h3 className="text-xl font-bold">Gestion de stock</h3>
              <p>Application réalisé en JavaFX durant la 1er année de mon BUT informatique, 
                permettant de gérer les stocks entre divers entrepots</p>
            </article>
        </section>
      </div>
  );
}
