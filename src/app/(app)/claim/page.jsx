"use client";

import React, { useEffect, useState } from "react";
import { useModal } from "@/hooks/useModal";
import ClaimCreditsTable from "@/components/ClaimCreditsTable";
import ClaimRequestsTable from "@/components/ClaimRequestTable";
import { NewClaimModal } from "@/components/NewClaimModal";
import { SeeClaimModal } from "@/components/SeeClaimModal";
import Cookies from "js-cookie";
import { useCreditos, useClaimsByUser } from "@/hooks/useClaim";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function ClaimPage() {
  const modal = useModal();
  const { creditos, loading, error } = useCreditos();
  const { reclamos, loadingSeeClaim, errorSeeClaim, refetchClaims } =
    useClaimsByUser();
  const [selectedCredito, setSelectedCredito] = useState(null);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertSeeClaim, setShowAlertSeeClaim] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenSeeClaim, setModalOpenSeeClaim] = useState(false);

  useEffect(() => {
    if (reclamos) {
      console.log("Cantidad de reclamos devueltos:", reclamos.length);
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

  if (loading) {
    return (
      <div className="flex items-center gap-2 ml-64 pt-16 text-muted-foreground">
        <Loader2 className="animate-spin" />
        <span>Cargando créditos...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-6 pt-16">
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Error al cargar los créditos: {error}
          </AlertDescription>
        </Alert>
      )}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Gestión de Reclamos
        </h1>
        <p className="text-muted-foreground mt-1">
          Visualiza los créditos disponibles, registra nuevos reclamos o revisa
          reclamos previos desde esta sección.
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Créditos disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <ClaimCreditsTable
            creditos={creditos}
            onRegisterClaim={(credito) => {
              setSelectedCredito(credito);
              setModalOpen(true);
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Reclamos realizados</CardTitle>
        </CardHeader>
        <CardContent>
<ClaimRequestsTable
  reclamos={reclamos}
  onSeeClaim={(reclamo) => {
    setSelectedClaim(reclamo);
    setModalOpenSeeClaim(true);
  }}
/>
          {showAlertSeeClaim && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Advertencia</AlertTitle>
              <AlertDescription>
                Debes seleccionar un reclamo antes de continuar.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

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
