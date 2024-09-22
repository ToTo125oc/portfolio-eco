import Image from "next/image";

export default function Projets() {
  return (
    <div>
      <h1>Le plus récents</h1>
      <section className="grid grid-rows-4 grid-flow-col gap-4">
        <article className="border-2">
            <h3>p</h3>
            <Image src={""} alt="Pas d'image"/>
            <p>description</p>
          </article>
        <article className="border-2">
          <h3>p1</h3>
          <p>description</p>
        </article>
          <article className="border-2">
            <h3>p2</h3>
            <p>description</p>
          </article>
          <article className="border-2">
            <h3>p3</h3>
            <p>description</p>
          </article>
      </section>
      </div>
  );
}
