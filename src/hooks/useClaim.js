// src/hooks/useClaim.js
import { useState, useEffect } from "react";
import { getCredits } from "@/lib/services/claimServices";
import Cookies from "js-cookie";

export function useCreditos() {
  const [creditos, setCreditos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const userId = Cookies.get("userId");
        const token = Cookies.get("authToken");  // Obtener el token de las cookies

        if (!userId) throw new Error("Usuario no autenticado");
        if (!token) throw new Error("Token de autenticación no encontrado");

        const userIdNum = parseInt(userId, 10);

        // Llamamos a la función getCredits, pasándole el userId y el token en las cabeceras
        const data = await getCredits(userIdNum, token);

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
