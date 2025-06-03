"use client";
import Link from "next/link";
import { PasswordInput } from "./PasswordInput";
import { TextInput } from "./TextInput";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useLogin } from "@/hooks/useLogin";
import Cookies from "js-cookie";  // Importamos js-cookie para acceder a las cookies


export function LoginForm() {
  const { login, loading, error, resetError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    resetError();
    try {
      const { email, password } = data;
      await login(email, password);
      // Accedemos al token desde las cookies después de iniciar sesión
      const token = Cookies.get("authToken");

      // Usamos alert() para mostrar el token en un popup
      alert("Token de autenticación: " + token);
       // Imprimimos el token en la consola
      console.log("Token de autenticación:", token);  // Este es el log que muestra el token en la consola

    } catch (error) {

    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
      <PasswordInput
        label="Contraseña"
        register={register("password", {
          required: "Ingrese una contraseña.",
        })}
        error={errors.password}
      />
            {error && !errors.password && (
        <div className="text-red-600 text-sm mt-1">{error}</div>
      )}

      <div className="flex items-start justify-between">
        <div className="text-sm">
          <Link
            href="/reset-password"
            className="text-indigo-600 hover:text-indigo-500"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
      <button
        disabled={isSubmitting || loading}
        className={`flex w-full justify-center rounded-3xl bg-indigo-600 px-3 py-3 text-md text-white  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
          isSubmitting || loading
            ? "opacity-80 cursor-not-allowed "
            : "cursor-pointer hover:bg-indigo-500"
        }`}
      >
        {isSubmitting || loading ? (
          <FaSpinner className="animate-spin" size={20} color="white" />
        ) : (
          "Iniciar sesión"
        )}
      </button>
    </form>
  );
}
