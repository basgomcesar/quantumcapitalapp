"use client";

import React, { useState } from "react";
import { TextInput } from "@/components/TextInput";

const Password = ({ email, codigo, setServerError }) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validarContrasena = (value) => {
    const reglas = [
      { test: /.{8,}/, message: "Debe tener al menos 8 caracteres" },
      { test: /[A-Z]/, message: "Debe tener al menos una mayúscula" },
      { test: /[a-z]/, message: "Debe tener al menos una minúscula" },
      { test: /[0-9]/, message: "Debe tener al menos un número" },
      { test: /[^A-Za-z0-9]/, message: "Debe tener un caracter especial" },
    ];
    for (let regla of reglas) {
      if (!regla.test.test(value)) return regla.message;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const mensaje = validarContrasena(password);
    if (mensaje) return setError({ message: mensaje });

    if (password !== repeatPassword) {
      setError({ message: "Las contraseñas no coinciden." });
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch("http://localhost:5062/api/Cuentas/recuperar-contrasenia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo: email,
          codigo: codigo,
          nuevaContrasenia: password,
        }),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const text = await res.text();
        throw new Error(text || "Error al cambiar la contraseña");
      }
    } catch (err) {
      console.error("Error:", err.message);
      setError({ message: err.message });
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="text-center mb-6">Ingresa tu nueva contraseña</p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <TextInput
          label="Nueva contraseña"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        <TextInput
          label="Repetir contraseña"
          id="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-3xl bg-indigo-600 px-3 py-3 text-md text-white hover:bg-indigo-500 disabled:opacity-60"
        >
          {isSubmitting ? "Actualizando..." : "Cambiar contraseña"}
        </button>
        {success && (
          <p className="text-green-600 text-sm text-center">
            Contraseña actualizada exitosamente ✅
          </p>
        )}
      </form>
    </>
  );
};

export default Password;
