export default function Navbar() {
  return (
    <div className="flex">
      <div className={`bg-gray-800 text-white fixed h-screen transition-all duration-300 z-10 w-64`} >
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
