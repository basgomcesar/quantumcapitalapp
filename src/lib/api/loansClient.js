import Cookies from "js-cookie";
import { requireApiUrl, throwResponseError } from "@/lib/api/api-error";

/**
 * 
 * @returns {Promise<Credito[]>}
 */
export async function getLoans() {
  const baseUrl = requireApiUrl();
  const response = await fetch(`${baseUrl}/Creditoes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    await throwResponseError(response, "No fue posible cargar los créditos.");
  }
  const data = await response.json();
  // Si data ya es un array, lo retorna tal cual. Si es objeto, lo transforma a array.
  const loansArray = Array.isArray(data) ? data : Object.values(data) || [];

  return loansArray;
}
