import Image from "next/image"
import face_co from "./images/face_co.svg"
import { FaRust, FaJava, FaVuejs, FaPython, FaWindows, FaLinux, FaPhp, FaLaravel, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNuxtdotjs, SiMacos, SiNestjs, SiKubernetes } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import DividerTailWind from "./composants/dividerTailWind";


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
        <FaPython size={56}/>
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
      <DividerTailWind title="Mes systèmes"/>
        <div className="flex mb-7 w-full flex-wrap justify-around">
          <SiMacos size={56}/>
          <FaWindows size={56}/>
          <FaLinux size={56}/>
        </div>
      <DividerTailWind title="Ma partie dev-ops"/>
        <div className="flex mb-2 w-full flex-wrap justify-around">
        <FaDocker size={56}/>
        <SiKubernetes size={56}/>
        </div>
        </div>
    </div>
  );
}
