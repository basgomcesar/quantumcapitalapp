const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";

/**
 * 
 * @returns {Promise<User>}
 */
export async function getCurrentUser() {
  const response = await fetch(`${BASE_URL}/Usuarios/${Cookies.get("userId")}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al obtener los datos del usuario");
  }
  const data = await response.json();

  return data;
}