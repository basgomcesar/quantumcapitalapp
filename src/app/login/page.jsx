"use client";

export default function LoginPage() {
    //quitar el submit por defecto del formulario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el inicio de sesión, como enviar los datos a una API
        console.log("Formulario enviado");
    }
return (
    <div className="flex h-screen">
        <div className="bg-gray-100 flex justify-center items-center container">
            <img src="/logo.png" alt="Logo" className="w-1/2 h-1/2" />
            <h1 className="text-2xl font-bold">Quantum Capital</h1>
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
                        <div className="mt-2">
                            <input
                                type="password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
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
