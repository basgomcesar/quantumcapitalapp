"use client";

import Link from "next/link";
import React from "react";
import { TextInput } from "@/components/TextInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl mb-10 text-white font-semibold">
          ¿Olvidaste tu contraseña?
        </h1>

        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center">
            <img src="/logo.png" alt="Logo" className="w-20 h-23 mr-4 mb-6" />
            <h1 className="text-3xl font-semibold text-indigo-600 mb-10 text-left">
              Quantum <br />
              Capital
            </h1>
          </div>
          <p className="  text-center mb-6">
            Introduce tu correo electronico debajo y te enviaremos un link para
            reestablecer tu contraseña
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <TextInput
              label="Correo electronico"
              id="email"
              defaultMessageError="Correo invalido"
              register={register("email", {
                required: "Ingrese un correo.",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Formato de correo inválido.",
                },
              })}
              error={errors.email}
            />
            {/* agrega el boton continuar */}
            <button className="flex w-full justify-center rounded-3xl bg-indigo-600 px-3 py-3 text-md text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Continuar
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/login"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
