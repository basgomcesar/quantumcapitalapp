"use client";
import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  //quitar el submit por defecto del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el inicio de sesión, como enviar los datos a una API
    console.log("Formulario enviado");
    alert("Formulario enviado");
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="flex h-screen ">
      <div className=" min-h-screen container pl-40 pt-30 flex flex-col justify-center py-10">
        <h1 className="text-5xl font-semibold text-white mb-10 text-left">
          Quantum <br />
          Capital
        </h1>
        <p className="text-2xl italic text-white mb-10 text-left">
          En Quantum Capital creemos que el acceso a tu historial crediticio
          debe ser claro, seguro y accesible...{" "}
        </p>
        <img
          src="/printer-image.png"
          alt="Printer"
          className="w-3/4 max-w-md"
        />
      </div>
      <div className=" flex flex-col container h-screen pt-15 lg:px-8 ">
        <div className="bg-white rounded-t-3xl shadow-2xl ring-1 ring-gray-900/5  sm:max-w-full sm:mx-25 p-10 h-full">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex items-center justify-center mb-10">
              <img src="/logo.png" alt="Logo" className="w-20 h-23 mr-4 mb-6" />
              <h1 className="text-3xl font-semibold text-indigo-600 mb-10 text-left">
                Quantum <br />
                Capital
              </h1>
            </div>
            <h1 className="text-2xl ">Te damos la bienvenida</h1>

          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  placeholder=""
                  id="floating_outlined"
                  type="text"
                  className="block px-2.5 pb-2.5 pt-4 w-full  text-gray-900 bg-transparent rounded-xl border-1 border-gray-300 appearance-none dark:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                />
                <label
                  htmlFor="floating_outlined"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Correo electronico
                </label>
              </div>
              <div className="relative input max-w-sm">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="floating_outlined_2"
                  placeholder=""
                  className="block px-2.5 pb-2.5 pt-4 w-full  text-gray-900 bg-transparent rounded-xl border-1 border-gray-300 appearance-none dark:border-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 peer"
                />
                <label
                  htmlFor="floating_outlined_2"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-95 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Contraseña
                </label>
                <button
                  className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                  type="button"
                  onClick={togglePasswordVisibility}
                  aria-label={
                    isPasswordVisible ? "Hide password" : "Show password"
                  }
                  aria-pressed={isPasswordVisible}
                  aria-controls="password"
                >
                  {isPasswordVisible ? (
                    <EyeOff size={20} aria-hidden="true" />
                  ) : (
                    <Eye size={20} aria-hidden="true" />
                  )}
                </button>
              </div>
              {/* Olvidaste tu contraseña?*/}
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    className=" text-indigo-600 hover:text-indigo-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <button className="flex w-full justify-center rounded-3xl bg-indigo-600 px-3 py-3 text-md text-white   hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
