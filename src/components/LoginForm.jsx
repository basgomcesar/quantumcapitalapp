"use client";
import Link from "next/link";
import { PasswordInput } from "./PasswordInput";
import { TextInput } from "./TextInput";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm();
  const onSubmit = async (event) => {
    setServerError("");
    try {
      // Simular una llamada a API
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // Aquí iría tu lógica de login (ej. fetch o axios)
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="Correo electronico"
        id="email"
        defaultMessageError="Correo invalido"
      />
      <PasswordInput label="Contraseña" />

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
        disabled={loading}
        className={`flex w-full justify-center rounded-3xl bg-indigo-600 px-3 py-3 text-md text-white  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
          loading ? "opacity-80 cursor-not-allowed " : "cursor-pointer hover:bg-indigo-500"
        }`}
      >
        {loading ? (
          <FaSpinner className="animate-spin" size={20} color="white" />
        ) : (
          "Iniciar sesión"
        )}
      </button>
    </form>
  );
}
