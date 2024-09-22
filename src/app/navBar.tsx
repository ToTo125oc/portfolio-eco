import Link from "next/link";

export default function NavBar() {
    return (
      <nav className="bg-gray-800 p-4">
  <ul className="flex space-x-4 justify-center">
    <li>
      <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
    </li>
    <li>
      <Link href="/projets" className="text-gray-300 hover:text-white">Projets</Link>
    </li>
    <li>
      <Link href="/parcour" className="text-gray-300 hover:text-white">Mon parcours</Link>
    </li>
  </ul>
</nav>
        )
}
