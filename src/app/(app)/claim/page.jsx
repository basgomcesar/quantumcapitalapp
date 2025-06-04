//src/app/claim/page.jsx
"use client";

import React, { useEffect } from "react";
import { useModal } from "@/hooks/useModal";
import ClaimCreditsTable from "@/components/ClaimCreditsTable";
import ClaimRequestsTable from "@/components/ClaimRequestTable";
import Cookies from "js-cookie"; // Importa js-cookie aquí
import { useCreditos } from "@/hooks/useClaim";

const TopBar = () => {
  const cookieStore = Cookies.get();
  // Verificar si la cookie 'user' existe y no está vacía
  const user = cookieStore && cookieStore.user ? cookieStore.user : null;

  // Si la cookie 'user' no existe, podemos manejarlo adecuadamente
  if (!user) {
    console.log(
      "No se encontró la cookie 'user', por favor verifica la autenticación."
    );
    // Si lo deseas, podrías redirigir a la página de login si no encuentras al usuario.
  }

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white shadow z-50">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Quantum Capital Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="font-semibold text-xl text-gray-800">
          Quantum Capital
        </span>
      </div>
      <div className="flex items-center">
        <span className="text-gray-700 mr-4">{user}</span>
        <img
          src="/user-avatar.png"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default function ClaimPage() {
  const modal = useModal();

  // Aquí llamamos el hook
  const { creditos, loading, error } = useCreditos();

  useEffect(() => {
    // Accedemos al token desde las cookies
    const token = Cookies.get("authToken");

    // Imprimimos el token en la consola
    console.log("Token de autenticación:", token);
  }, []); // Ejecuta una sola vez al cargar el componente

  if (loading) return <p className="ml-64 pt-16">Cargando créditos...</p>;
  if (error) return <p className="ml-64 pt-16 text-red-600">Error: {error}</p>;

  return (
    <>
      <div className="min-h-screen bg-white p-6">
        {/* pt-16 para dejar espacio al TopBar fijo */}
        <ClaimCreditsTable onButtonClick={() => modal.open("newClaim")} />
        <br />
        <ClaimRequestsTable onButtonClick={() => modal.open("seeClaim")} />
      </div>
    </>
  );
}
