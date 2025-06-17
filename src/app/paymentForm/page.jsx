"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function PaymentForm() {
  const [method, setMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFieldErrors = {};

    if (!method || method === "--Selecciona tu metodo de pago--") {
      newFieldErrors.method = "Selecciona un método de pago válido.";
    }

    const cardDigitsOnly = cardNumber.replace(/\s+/g, "");
    const cardRegex = /^\d{16}$/;
    if (!cardRegex.test(cardDigitsOnly)) {
      newFieldErrors.cardNumber = "El número de tarjeta debe contener 16 dígitos.";
    }

    const expiryRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
    const match = expiry.match(expiryRegex);
    if (!match) {
      newFieldErrors.expiry = "El formato debe ser MM/YY.";
    } else {
      const month = parseInt(match[1], 10);
      const year = parseInt(match[2], 10) + 2000;
      const currentYear = new Date().getFullYear();
      if (month < 1 || month > 12 || year < currentYear || year > currentYear + 20) {
        newFieldErrors.expiry = "Fecha inválida. Verifica mes y año.";
      }
    }

    const cvvRegex = /^\d{3}$/;
    if (!cvvRegex.test(cvv)) {
      newFieldErrors.cvv = "El CVV debe contener 3 dígitos numéricos.";
    }

    setFieldErrors(newFieldErrors);

    if (Object.keys(newFieldErrors).length > 0) {
      setError("Por favor corrija los errores antes de continuar.");
      return;
    }

    setError("");

    // Fuerza el fallo del pago
    //const pagoExitoso = false;
    const pago = Math.random();
    if (pago < 0.7) {
      toast.success("Pago procesado exitosamente", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#4ade80",
          color: "white",
          fontWeight: "bold",
        },
        icon: "✅",
      });
      setTimeout(() => router.push("/detallescredito"), 2000);
    } else {
      toast.error("Error al procesar el pago. Intente más tarde.", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#f87171",
          color: "white",
          fontWeight: "bold",
        },
        icon: "❌",
      });
    }
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    const spaced = value.replace(/(.{4})/g, "$1 ").trim();
    setCardNumber(spaced);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiry(value.slice(0, 5));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-800 via-purple-700 to-fuchsia-700 flex items-start justify-center px-4 py-10">
      <Toaster />
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Confirme su metodo de pago</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Método de pago</label>
              <select
                className={`w-full p-3 rounded-lg bg-violet-50 ${fieldErrors.method ? "border border-red-500" : ""}`}
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option>--Selecciona tu metodo de pago--</option>
                <option>Visa</option>
                <option>MasterCard</option>
                <option>American Express</option>
              </select>
              {fieldErrors.method && <p className="text-red-600 text-sm mt-1">{fieldErrors.method}</p>}
            </div>

            <div className="mb-4">
              <label className="block font-semibold mb-1">Número de tarjeta</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className={`w-full p-3 rounded-lg bg-violet-50 ${fieldErrors.cardNumber ? "border border-red-500" : ""}`}
                value={cardNumber}
                onChange={handleCardNumberChange}
              />
              {fieldErrors.cardNumber && <p className="text-red-600 text-sm mt-1">{fieldErrors.cardNumber}</p>}
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="block font-semibold mb-1">Mes/Año</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className={`w-full p-3 rounded-lg bg-violet-50 ${fieldErrors.expiry ? "border border-red-500" : ""}`}
                  value={expiry}
                  onChange={handleExpiryChange}
                />
                {fieldErrors.expiry && <p className="text-red-600 text-sm mt-1">{fieldErrors.expiry}</p>}
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1">CVV</label>
                <input
                  type="text"
                  placeholder="CVV"
                  className={`w-full p-3 rounded-lg bg-violet-50 ${fieldErrors.cvv ? "border border-red-500" : ""}`}
                  value={cvv}
                  onChange={handleCvvChange}
                />
                {fieldErrors.cvv && <p className="text-red-600 text-sm mt-1">{fieldErrors.cvv}</p>}
              </div>
            </div>

            {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

            <p className="text-center text-sm text-gray-600 mt-6">
              Al hacer click en continuar usted acepta nuestros términos de uso
            </p>

            <button
              type="submit"
              className="w-full mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-3 px-6 rounded-full"
            >
              Continuar
            </button>
          </form>
        </div>

        <div className="md:col-span-1">
          <div className="bg-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-1">Métodos de pago</h3>
            <p className="text-sm mb-2">Aceptamos los siguientes métodos de pago seguro:</p>
            <div className="flex gap-2">
              <img src="/visa-icon.svg" alt="Visa" className="h-6" />
              <img src="/mastercard-icon.svg" alt="MasterCard" className="h-6" />
              <img src="/amex-icon.svg" alt="Amex" className="h-6" />
            </div>
          </div>

          <div className="text-left">
            <p className="text-lg font-medium">Total a pagar:</p>
            <p className="text-2xl font-bold text-gray-800">$218.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
