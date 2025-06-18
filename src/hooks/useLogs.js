// src/hooks/useBitacoraLogs.js
import { useEffect, useState } from "react";
import { getCredits, getClaims } from "@/lib/services/claimServices";

export function useLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLogs() {
      setLoading(true);
      setError(null);
      try {
        const [creditos, reclamos] = await Promise.all([getCredits(), getClaims()]);

        const creditLogs = creditos.map((c) => ({
          tipo: "Crédito",
          fecha: c.fechaHoraModificacion,
          descripcion: `Modificación en crédito de $${c.montoPrestado.toFixed(2)}`,
        }));

        const claimLogs = reclamos.map((r) => ({
          tipo: "Reclamo",
          fecha: r.fechaReclamo,
          descripcion: r.descripcionReclamo,
        }));

        const allLogs = [...creditLogs, ...claimLogs].sort(
          (a, b) => new Date(b.fecha) - new Date(a.fecha)
        );

        setLogs(allLogs);
      } catch (err) {
        setError(err.message || "Error al cargar la bitácora");
      } finally {
        setLoading(false);
      }
    }

    fetchLogs();
  }, []);

  return { logs, loading, error };
}
