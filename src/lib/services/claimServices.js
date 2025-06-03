// src/lib/services/claimServices.js
import { fetchCreditos } from "../api/claimClient";

/**
 * @param {number} userId
 * @param {string} token  // Asegúrate de que el token se pase como parámetro
 * @returns {Promise<Credito[]>}
 */
export async function getCredits(userId, token) {
  if (!userId) throw new Error("El userId es necesario para obtener créditos");
  
  // Pasar el token a la función fetchCreditos
  const response = await fetchCreditos(userId, token);
  return response;
}
