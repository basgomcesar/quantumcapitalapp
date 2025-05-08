export function HeroSection() {
    return (
      <div className="min-h-screen container pl-40 pt-30 flex flex-col justify-center py-10">
        <h1 className="text-5xl font-semibold text-white mb-10 text-left">
          Quantum <br />
          Capital
        </h1>
        <p className="text-2xl italic text-white mb-10 text-left">
          En Quantum Capital creemos que el acceso a tu historial crediticio
          debe ser claro, seguro y accesible...
        </p>
        <img
          src="/printer-image.png"
          alt="Printer"
          className="w-3/4 max-w-md"
        />
      </div>
    );
  }