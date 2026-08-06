import Cookies from "js-cookie";
import { requireApiUrl, throwResponseError } from "@/lib/api/api-error";

/**
 * 
 * @returns {Promise<Array>}
 * @description Obtiene los domicilios de empleo del usuario autenticado.
 */
export async function getEmploymentAddresses() {
  const baseUrl = requireApiUrl();
  const response = await fetch(`${baseUrl}/DomicilioEmpleos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    await throwResponseError(response, "No fue posible cargar los domicilios.");
  }
  const data = await response.json();
  const loansArray = Array.isArray(data) ? data : Object.values(data) || [];

  return loansArray;
}

/**
 * 
 * @returns {Promise<Array>}
 * @description Obtiene los domicilios reportados del usuario autenticado.
 */
export async function getReportedAddresses() {
  const baseUrl = requireApiUrl();
  const response = await fetch(`${baseUrl}/DomicilioPersonals`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    await throwResponseError(response, "No fue posible cargar los domicilios.");
  }
  const data = await response.json();
  const loansArray = Array.isArray(data) ? data : Object.values(data) || [];

  return loansArray;
}
