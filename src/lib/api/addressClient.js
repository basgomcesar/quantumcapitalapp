const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";

/**
 * 
 * @returns {Promise<Array>}
 * @description Obtiene los domicilios de empleo del usuario autenticado.
 */
export async function getEmploymentAddresses() {
  const response = await fetch(`${BASE_URL}/DomicilioEmpleos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al obtener los domicilios de empleo");
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
  const response = await fetch(`${BASE_URL}/DomicilioPersonals`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al obtener los domicilios reportados");
  }
  const data = await response.json();
  const loansArray = Array.isArray(data) ? data : Object.values(data) || [];

  return loansArray;
}