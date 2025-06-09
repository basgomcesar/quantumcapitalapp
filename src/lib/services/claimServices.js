// src/lib/services/claimServices.js
import { fetchCreditos } from "../api/claimClient";

/**
 * @param {number} userId
 * @param {string} token  // Asegúrate de que el token se pase como parámetro
 * @returns {Promise<Credito[]>}
 */
export async function getCredits() {
  
  // Pasar el token a la función fetchCreditos
  const response = await fetchCreditos();
  return response;
}
