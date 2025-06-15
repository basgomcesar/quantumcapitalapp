const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";

/**
 * 
 * @returns {Promise<Credito[]>}
 */
export async function getLoans() {
  const response = await fetch(`${BASE_URL}/Creditoes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al obtener los creditos");
  }
  const data = await response.json();
  // Si data ya es un array, lo retorna tal cual. Si es objeto, lo transforma a array.
  const loansArray = Array.isArray(data) ? data : Object.values(data) || [];

  return loansArray;
}