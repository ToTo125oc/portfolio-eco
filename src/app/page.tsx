import Image from "next/image"
import face_co from "./images/face_co.svg"

export default function Home() {
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 mt-32 mr-2 ml-2 p-4 rounded-lg border-4 border-green-800/100 flex flex-col items-center w-90 ">
        <Image className="rounded-full" src={face_co} width="150" height="150" alt="Pas d'image"/>
        <h2 className="text-2xl font-bold">Développeur Full-Stack </h2>
        <p className="text-xl">Hello, je suis Thomas</p>
        <p>Actuellement en alternace à l&apos;iut de Lens pour IDEE PROD</p>
      </div>
    </div>
  );
}
