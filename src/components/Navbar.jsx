import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="bg-gradient-to-t from-[#0000FF] via-[#8A2BE2] via-30% to-[#8A2BE2] text-white fixed top-0 left-0 h-screen w-64 rounded-3xl rounded-br-3xl shadow-lg shadow-gray-900/5 z-10 transition-all duration-300">
        <div className="flex flex-col items-center py-8">
          <Link
            href="/home"
            className="mt-4 text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10"
            aria-current="page"
          >
            Home
          </Link>
          {/* Add more navigation items here */}
          <Link
            href="/claim" // Cambia esta ruta por la de tu página de reclamos
            className="mt-4 text-white hover:text-gray-300 transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/10"
          >
            Reclamos
          </Link>
        </div>
      </div>
    </nav>
  );
}
