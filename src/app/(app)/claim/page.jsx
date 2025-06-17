//src/app/claim/page.jsx
"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import ClaimCreditsTable from "@/components/ClaimCreditsTable";
import ClaimRequestsTable from "@/components/ClaimRequestTable";
import { NewClaimModal } from "@/components/NewClaimModal";
import { SeeClaimModal } from "@/components/SeeClaimModal";
import Cookies from "js-cookie";
import { useCreditos, useClaimsByUser  } from "@/hooks/useClaim";
import { FaSpinner } from "react-icons/fa";

export default function ClaimPage() {
  const modal = useModal();
  const { creditos, loading, error } = useCreditos();
  const { reclamos, loadingSeeClaim, errorSeeClaim, refetchClaims } = useClaimsByUser();
  const [selectedCredito, setSelectedCredito] = useState(null);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSeeClaim, setShowAlertSeeClaim] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
   const [modalOpenSeeClaim, setModalOpenSeeClaim] = useState(false);

 // --- Nuevo useEffect para imprimir cantidad de reclamos ---
  useEffect(() => {
    if (reclamos) {
      console.log("Cantidad de reclamos devueltos:", reclamos.length);
      // Si quieres ver el array completo también, descomenta:
      // console.log("Reclamos devueltos:", reclamos);
    }
  }, [reclamos]);
  useEffect(() => {
    const token = Cookies.get("authToken");
    console.log("Token de autenticación:", token);
  }, []);

  const handleButtonClick = () => {
    if (selectedCredito) {
      setShowAlert(false);
      setModalOpen(true);
    } else {
      setShowAlert(true);
    }
  };

  const handleButtonClickClaim = () => {
    if (selectedClaim) {
      setShowAlertSeeClaim(false);
      setModalOpenSeeClaim(true);
    } else {
      setShowAlertSeeClaim(true);
    }
  };


  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCredito(null);
  };

  const handleCloseModalSeeClaim = () => {
    setModalOpenSeeClaim(false);
    setSelectedClaim(null);
  };

  if (loading)
    return (
      <p className="ml-64 pt-16 flex items-center gap-2">
        <FaSpinner className="animate-spin text-2xl" />
        <span>Cargando créditos...</span>
      </p>
    );

  return (
    <div className="min-h-screen bg-white p-6 pt-16">
      {error && (
        <p className="text-red-600 mb-4">
          Error al cargar los créditos: {error}
        </p>
      )}
     



      <ClaimCreditsTable
        creditos={creditos}
        onSelectCredito={(credito) => {
          setSelectedCredito(credito);
          setShowAlert(false);
        }}
        onButtonClick={handleButtonClick}
        selectedCreditoId={selectedCredito?.id}
      />

      {showAlert && (
        <p className="text-center text-red-600 mt-4">
          Debes seleccionar un crédito antes de registrar un reclamo.
        </p>
      )}


      

        <ClaimRequestsTable
          reclamos={reclamos}
          onSelectClaim={(reclamo) => {
            setSelectedClaim(reclamo);
            setShowAlertSeeClaim(false);
          }}
          onButtonClickSeeClaim={handleButtonClickClaim} 
          selectedClaimId={selectedClaim?.id}
        />

        {showAlertSeeClaim && (
          <p className="text-center text-red-600 mt-4">
            Debes seleccionar un reclamo antes de continuar.
          </p>
        )}



      <NewClaimModal
        isOpen={modalOpen}
        credito={selectedCredito}
        onClose={handleCloseModal}
        onClaimCreated={refetchClaims}
      />

      <SeeClaimModal
        isOpen={modalOpenSeeClaim}
        reclamo={selectedClaim}
        onClose={handleCloseModalSeeClaim}
      />
      
    </div>
  );
}
