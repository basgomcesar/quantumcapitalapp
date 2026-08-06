import Cookies from "js-cookie";
import { requireApiUrl, throwResponseError } from "@/lib/api/api-error";

/**
 * 
 * @returns {Promise<User>}
 */
export async function getCurrentUser() {
  const baseUrl = requireApiUrl();
  const response = await fetch(`${baseUrl}/Usuarios/${Cookies.get("userId")}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  if (!response.ok) {
    await throwResponseError(response, "No fue posible cargar los datos del usuario.");
  }
  const data = await response.json();

  return data;
}
