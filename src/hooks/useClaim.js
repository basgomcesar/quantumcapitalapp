// src/hooks/useClaim.js
import { useState, useEffect } from "react";
import { getCredits, getClaims  } from "@/lib/services/claimServices";
import Cookies from "js-cookie";

// Hook para obtener los créditos del usuario autenticado
export function useCreditos() {
  const [creditos, setCreditos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {

        // Llamamos a la función getCredits, pasándole el userId y el token en las cabeceras
        const data = await getCredits();

        setCreditos(data);
      } catch (err) {
        setError(err.message || "Error al cargar créditos");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { creditos, loading, error };
}

// Hook para obtener los reclamos del usuario autenticado
export function useClaimsByUser() {
  const [reclamos, setReclamos] = useState([]);
  const [loadingSeeClaim, setLoading] = useState(false);
  const [errorSeeClaim, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const data = await getClaims(); // 🔁 Llama a GetClaimsByUser internamente
        setReclamos(data);
      } catch (err) {
        setError(err.message || "Error al cargar reclamos");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return { reclamos, loadingSeeClaim, errorSeeClaim };
}