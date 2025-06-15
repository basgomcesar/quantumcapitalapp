"use client";

import React from "react";

export default function PaymentForm() {
  return (
    <div className="min-h-screen bg-white flex items-start justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Parte izquierda - Métodos de pago */}
        <div className="md:col-span-1">
          <div className="bg-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-1">Métodos de pago</h3>
            <p className="text-sm mb-2">Aceptamos los siguientes métodos de pago seguro:</p>
            <div className="flex gap-2">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="MasterCard" className="h-6" />
              <img src="/amex.png" alt="Amex" className="h-6" />
              <img src="/paypal.png" alt="PayPal" className="h-6" />
            </div>
          </div>

          <div className="text-left">
            <p className="text-lg font-medium">Total a pagar:</p>
            <p className="text-2xl font-bold text-gray-800">$218.00</p>
          </div>
        </div>

        {/* Parte derecha - Formulario */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Confirme su metodo de pago</h2>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Método de pago</label>
            <select className="w-full p-3 rounded-lg bg-violet-50">
              <option>--Selecciona tu metodo de pago--</option>
              <option>Visa</option>
              <option>MasterCard</option>
              <option>American Express</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-semibold mb-1">Número de tarjeta</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 rounded-lg bg-violet-50"
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Mes/Año</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-3 rounded-lg bg-violet-50"
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">CVV</label>
              <input
                type="text"
                placeholder="CVV"
                className="w-full p-3 rounded-lg bg-violet-50"
              />
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Al hacer click en continuar usted acepta nuestros términos de uso
          </p>

          <button className="w-full mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-medium py-3 px-6 rounded-full">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
