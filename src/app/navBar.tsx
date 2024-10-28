import Link from "next/link";
import { HiAcademicCap, HiClipboardList, HiHome } from "react-icons/hi";

export default function NavBar() {
    return (
      <nav className="bg-green-800 p-4 mt-2 mr-2 ml-2 rounded-2xl ">
  <ul className="flex space-x-3 justify-center">
    <li>
      <Link href="/" className="flex text-gray-300 hover:text-white"><HiHome />Home</Link>
    </li>
    <li>
      
      <Link href="/projets" className="flex text-gray-300 hover:text-white"><HiClipboardList /> Projets</Link>
    </li>
    <li>
      
      <Link href="/parcour" className="flex text-gray-300 hover:text-white"><HiAcademicCap />Mon parcours</Link>
    </li>
  </ul>
</nav>
        )
}
