"use client";

import React, { useState } from "react";
import { TextInput } from "@/components/TextInput";

const Code = ({ email, setStep, setServerError, setCodigoVerificado }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const handleChange = async (e) => {
    const value = e.target.value.trim();
    setCode(value);

    if (!/^\d{6}$/.test(value)) {
      setError({ message: "El código debe tener 6 dígitos" });
      return;
    }

    setError(null);
    setIsValidating(true);

    try {
      const res = await fetch(
        `http://localhost:5062/api/CodigoRecuperacions/validar/${encodeURIComponent(email)}/${value}`,
        { method: "POST" }
      );

      if (res.status === 200) {
        setCodigoVerificado(Number(value));
        setStep("password");
      } else {
        setError({ message: "Código inválido o expirado" });
      }
    } catch (err) {
      console.error("Error al validar el código:", err.message);
      setError({ message: "Error de conexión. Intenta más tarde." });
      setServerError(err.message);
    } finally {
      setIsValidating(false);
    }
  };

  return (
    <>
      <p className="text-center mb-6">
        Introduce el código de verificación que te enviamos al correo
      </p>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <TextInput
          label="Código de verificación"
          id="code"
          value={code}
          onChange={handleChange}
          error={error}
          type="text"
          inputMode="numeric"
        />
        <p className="text-sm text-gray-500 text-center">
          El código se valida automáticamente
        </p>
      </form>
    </>
  );
};

export default Code;
