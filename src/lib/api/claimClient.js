// src/lib/api/claimClient.js
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Recupera los créditos del usuario autenticado
export async function fetchCreditosPorUsuario() {
  const userId = Cookies.get("userId");
  const token = Cookies.get("authToken");

  if (!userId || !token) {
    throw new Error("No se encontró el userId o el token de autenticación.");
  }

  const response = await fetch(`${BASE_URL}/Creditoes/usuario/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al obtener los créditos del usuario");
  }

  const data = await response.json();
  return data; // Lista de objetos CreditoDTO
}

//Registra un nuevo reclamo para un crédito
export async function RegisterNewClaim(creditoId, descripcion) {
  const token = Cookies.get("authToken");

  if (!token) {
    throw new Error("No se encontró el token de autenticación.");
  }

  const body = {
    idCredito: creditoId,
    descripcionReclamo: descripcion,
    fechaReclamo: new Date().toISOString(),
    dictamen: "Pendiente", 
  };

  const response = await fetch(`${BASE_URL}/Reclamoes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al registrar el reclamo");
  }

  return await response.json(); // Devuelve el ReclamoDTO creado
}

//Recuperar reclamos del usuario
export async function GetClaimsByUser() {
  const userId = Cookies.get("userId");
  const token = Cookies.get("authToken");

  if (!userId || !token) {
    throw new Error("No se encontró el userId o el token de autenticación.");
  }

  const response = await fetch(`${BASE_URL}/Reclamoes/usuario/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error al obtener los reclamos del usuario");
  }

  const data = await response.json(); // Lista de objetos ReclamoDTO

  return data;
}
