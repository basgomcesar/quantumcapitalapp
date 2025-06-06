// src/lib/api/claimClient.js
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";


export async function fetchCreditos() {
  const userId = Cookies.get("userId");  // Obtener el userId desde las cookies
  const token = Cookies.get("authToken");  // Obtener el token desde las cookies
  if (!token) {
    throw new Error("No se encontró el token de autenticación");
  }

  const url = `${BASE_URL}/Creditoes/${userId}`;
  console.log("Haciendo petición a:", url);  // Verifica la URL de la API

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`  // Agregar el token en las cabeceras
    },
  });

  console.log("Código de estado de la respuesta:", response.status);  // Verifica el código de estado de la respuesta

  const textData = await response.text();
  console.log("Respuesta de la API:", textData);  // Muestra la respuesta sin parsear

  let parsedData;
  try {
    parsedData = textData ? JSON.parse(textData) : [];
  } catch (error) {
    throw new Error("Error al parsear la respuesta de créditos");
  }

  if (!response.ok) {
    // El error también podría venir del código de estado
    throw new Error(parsedData?.message || `Error ${response.status}: ${textData}`);
  }

  return parsedData;  // Asegúrate de que esta sea la respuesta que esperas
}
