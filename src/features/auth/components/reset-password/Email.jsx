"use client";

import React, { useState } from "react";
import { TextInput } from "@/components/shared/forms/TextInput";
import { Button } from "@/components/ui/button";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


const Email = ({ email, setEmail, setStep, setServerError }) => {
  const [error, setError] = useState(null);
  const [isChecking, setIsChecking] = useState(false);

  const validateEmail = (value) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(!validateEmail(value) ? { message: "Correo inválido" } : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) return setError({ message: "Correo inválido" });

    try {
      setIsChecking(true);
      setError(null);
      setServerError("");

      const res = await fetch(`${BASE_URL}/codigoRecuperacions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(email),
      });

      if (res.status === 200 || res.status === 202) {
        setStep("code");
      } else if (res.status === 404) {
        setError({ message: "Correo no encontrado." });
      } else {
        const text = await res.text();
        throw new Error(text || "Error inesperado al procesar el correo.");
      }
    } catch (err) {
      console.error("Error:", err.message);
      setServerError(err.message);
      setError({ message: "Error de conexión o del servidor." });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <>
      <p className="text-center mb-6">
        Introduce tu correo electrónico debajo y te enviaremos un código para reestablecer tu contraseña
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <TextInput
          label="Correo electrónico"
          id="email"
          value={email}
          onChange={handleChange}
          error={error}
        />
        <Button
          type="submit"
          disabled={isChecking}
          className="w-full rounded-3xl py-6"
        >
          {isChecking ? "Verificando..." : "Continuar"}
        </Button>
      </form>
    </>
  );
};

export default Email;
