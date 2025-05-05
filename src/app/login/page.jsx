"use client";

export default function LoginPage() {
  //quitar el submit por defecto del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el inicio de sesión, como enviar los datos a una API
    console.log("Formulario enviado");
  };
  return (
    <div className="flex h-screen ">
      <div className="bg-gray-100 min-h-screen container flex flex-col items-center justify-center py-10">
        <img src="/logo.png" alt="Logo" className="w-50 h-50 mb-6"  />
        <h1 className="text-5xl font-semibold text-purple-800 mb-10 text-center">Quantum <br/>Capital</h1>
        <img src="/printer-image.png" alt="Printer" className="w-3/4 max-w-md"  />
      </div>
      <div className=" flex flex-col  container h-screen justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="font-bold text-2xl">Bienvenido</h1>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label className="block text-lg font-semibold text-gray-900">
                Correo electronico
              </label>
              <div className="mt-2">
                <input
                  placeholder="usuario"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-900">
                Contraseña
              </label>
              <div className="mt-2 ">
                <input
                  type="password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
{/* Olvidaste tu contraseña?*/}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm font-semibold text-gray-900"
                >
                  Recordar contraseña
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
