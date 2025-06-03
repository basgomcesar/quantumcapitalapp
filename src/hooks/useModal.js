// src/hooks/useModal.js
// DEBES ESPECIFICAR EL NOMBRE DEL MODAL QUE QUIERES ABRIR
import { useState } from "react";

export function useModal() {
  // Objeto para manejar los estados de varios modales
  const [modals, setModals] = useState({
    newClaim: false,
    seeClaim: false,
  });

  // Función para abrir un modal específico
  const open = (modalName) => setModals((prev) => ({ ...prev, [modalName]: true }));

  // Función para cerrar un modal específico
  const close = (modalName) => setModals((prev) => ({ ...prev, [modalName]: false }));

  return {
    isOpen: modals,
    open,
    close,
  };
}