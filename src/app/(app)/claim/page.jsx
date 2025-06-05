//src/app/claim/page.jsx
"use client";

import React, { useEffect } from "react";
import { useModal } from "@/hooks/useModal";
import ClaimCreditsTable from "@/components/ClaimCreditsTable";
import ClaimRequestsTable from "@/components/ClaimRequestTable";
import Cookies from "js-cookie"; // Importa js-cookie aquí
import { useCreditos } from "@/hooks/useClaim";
//Se importa el spinner para mostrar mientras se cargan los créditos
import { FaSpinner } from "react-icons/fa";
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
  //if (error) return <p className="ml-64 pt-16 text-red-600">Error: {error}</p>;

  return (
    <>
      <div className="min-h-screen bg-white p-6">
        {loading && (
          <div className="flex items-center gap-2">
            <FaSpinner className="animate-spin text-2xl" />
            <span>Cargando créditos...</span>
          </div>
        )}
        {error && (
          <p className="text-red-600">
            Error al cargar los créditos: {error}
          </p>
        )}
        {/* pt-16 para dejar espacio al TopBar fijo */}
        <ClaimCreditsTable onButtonClick={() => modal.open("newClaim")} />
        <br />
        <ClaimRequestsTable onButtonClick={() => modal.open("seeClaim")} />
      </div>
    </>
  );
}
