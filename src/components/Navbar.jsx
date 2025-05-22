export default function Navbar() {
  return (
    <div className="flex">
      <div className="bg-gradient-to-t from-[#0000FF] via-[#8A2BE2] via-30% to-[#8A2BE2] text-white fixed h-screen transition-all duration-300 z-10 w-64">
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <a
              href="#"
              className="text-white hover:text-gray-300"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
