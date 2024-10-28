import Image from "next/image"
import face_co from "./images/face_co.svg"
import DividerTailWind from "./composants/dividerTailWind";
import dynamic from 'next/dynamic';
const FaRust =  dynamic(() => import('react-icons/fa').then(mod => mod.FaRust));
const FaJava =  dynamic(() => import('react-icons/fa').then(mod => mod.FaJava));
const FaVuejs =  dynamic(() => import('react-icons/fa').then(mod => mod.FaVuejs));
const FaPhp =  dynamic(() => import('react-icons/fa').then(mod => mod.FaPhp));
const FaLaravel =  dynamic(() => import('react-icons/fa').then(mod => mod.FaLaravel))
const SiTypescript =  dynamic(() => import('react-icons/si').then(mod => mod.SiTypescript))
const SiNuxtdotjs = dynamic(() => import('react-icons/si').then(mod => mod.SiNuxtdotjs))
const SiNestjs=  dynamic(() => import('react-icons/si').then(mod => mod.SiNestjs))
const RiTailwindCssLine= dynamic(() => import('react-icons/ri').then(mod => mod.RiTailwindCssLine))

export default function Home() {
  
  return (
    <div className="flex flex-col items-center mr-2 ml-2">
      <div className="bg-gray-900 mt-12 mr-2 ml-2 p-4 rounded-2xl border-4 border-green-800/100 flex flex-col items-center w-full max-w-md">
        <Image priority className="rounded-full" src={face_co} width="150" height="150" alt="Pas d'image"/>
        <h2 className="text-2xl font-bold">Développeur Full-Stack </h2>
        <p className="text-xl ">Hello, je suis Thomas</p>
        <p>Actuellement en alternace à l&apos;iut de Lens pour IDEE PROD</p>
      </div>
      <div className="bg-gray-900 mt-4 mr-2 ml-2 p-4 rounded-2xl border-4 border-green-800/100 flex flex-col items-center w-full max-w-md  ">
      <p className="text-xl self-start">Mes techno</p>
      <DividerTailWind title="Mes langages"/>
      <div className="flex mb-7 w-full flex-wrap justify-around">
        <FaRust size={56}/>
        <SiTypescript size={56}/>
        <FaJava size={56}/>
        <FaPhp size={56}/>
      </div>
      <DividerTailWind title="Mes Frameworks"/>
      <div className="flex mb-7 w-full flex-wrap justify-around">
        <FaVuejs size={56}/>
        <SiNuxtdotjs size={56}/>
        <SiNestjs size={56}/>
        <FaLaravel size={56}/>
        <RiTailwindCssLine size={56}/>
      </div>
        </div>
    </div>
  );
}
