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
              <Image src={mararthon} alt="Pas d'image" width={300} height={200}/>
              <h3>Marathon du web</h3>
              <p>description</p>
            </article>
          <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
            <Image src={raytracer} alt="Pas d'image" width={300} height={200}/>
            <h3>RayTracer</h3>
            <p>description</p>
          </article>
            <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
              <Image src={flatcraft} alt="Pas d'image" width={300} height={200} />
              <h3>FlatCraft</h3>
              <p>description</p>
            </article>
            <article className="border-4 border-green-800/100 bg-gray-900 rounded-lg w-96 h-96">
              <Image src={gds} alt="Pas d'image" width={300} height={200} style={{objectFit: "cover"}}/>
              <h3>Gestion de stock</h3>
              <p>description</p>
            </article>
        </section>
      </div>
  );
}
