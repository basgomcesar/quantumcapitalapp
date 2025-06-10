// src/components/NewClaimModal.jsx
import React, { useState } from "react";
import { registerNewClaim } from "@/lib/services/claimServices";

export function NewClaimModal({ isOpen, onClose, credito, onClaimCreated  }) {
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen || !credito) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!descripcion.trim()) {
      setError("La descripción no puede estar vacía.");
      return;
    }

    try {
      await registerNewClaim(credito.id, descripcion);
      setSuccess(true);
      setError("");
      setDescripcion("");

      if (onClaimCreated) {
        onClaimCreated();
      }
      // Espera un momento y cierra el modal
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1500);
    } catch (err) {
      setError(err.message || "Error al registrar el reclamo.");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative bg-white p-6 rounded-xl shadow-lg w-96 z-10">
        <h2 className="text-xl font-semibold mb-4">
          Reclamo para crédito #{credito.id}
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Describe tu reclamo"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full border rounded-xl p-2 mb-4"
          />

          {error && <p className="text-red-600 mb-2">{error}</p>}
          {success && <p className="text-green-600 mb-2">¡Reclamo enviado correctamente!</p>}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-xl"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
