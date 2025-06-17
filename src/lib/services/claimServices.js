// src/lib/services/claimServices.js
import { fetchCreditosPorUsuario, GetClaimsByUser   } from "../api/claimClient";
import { RegisterNewClaim } from "../api/claimClient";

/**
 * Obtener los créditos del usuario autenticado
 * @param {number} userId
 * @param {string} token  
 * @returns {Promise<Credito[]>}
 */
export async function getCredits() {
  
  const response = await fetchCreditosPorUsuario();
  return response;
}


/**
 * Registra un nuevo reclamo
 * @param {number} creditoId 
 * @param {string} descripcion 
 * @returns {Promise<Claim>}
 */
export async function registerNewClaim(creditoId, descripcion) {
  return await RegisterNewClaim(creditoId, descripcion);
}


/**
 * Obtener reclamos del usuario autenticado
 * @param {number} userId
 * @param {string} token 
 * @returns {Promise<Claim[]>}
 */
export async function getClaims() {
  return await GetClaimsByUser();
}