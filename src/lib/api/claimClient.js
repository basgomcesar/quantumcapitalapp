import Cookies from "js-cookie"
import { requireApiUrl, throwResponseError } from "@/lib/api/api-error"

const GENERIC_CLAIMS_ERROR = "No fue posible completar la operación de reclamos."

function getSession() {
  const userId = Cookies.get("userId")
  const token = Cookies.get("authToken")
  if (!userId || !token) throw new Error("La sesión no está disponible.")
  return { userId, token }
}

export async function fetchCreditosPorUsuario() {
  const baseUrl = requireApiUrl()
  const { userId, token } = getSession()
  const response = await fetch(`${baseUrl}/Creditoes/usuario/${userId}`, {
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  })
  if (!response.ok) await throwResponseError(response, GENERIC_CLAIMS_ERROR)
  return response.json()
}

export async function RegisterNewClaim(creditoId, descripcion) {
  const baseUrl = requireApiUrl()
  const { token } = getSession()
  const response = await fetch(`${baseUrl}/Reclamoes`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      idCredito: creditoId,
      descripcionReclamo: descripcion,
      fechaReclamo: new Date().toISOString(),
      dictamen: "Pendiente",
    }),
  })
  if (!response.ok) await throwResponseError(response, GENERIC_CLAIMS_ERROR)
  return response.json()
}

export async function GetClaimsByUser() {
  const baseUrl = requireApiUrl()
  const { userId, token } = getSession()
  const response = await fetch(`${baseUrl}/Reclamoes/usuario/${userId}`, {
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
  })
  if (!response.ok) await throwResponseError(response, GENERIC_CLAIMS_ERROR)
  return response.json()
}
