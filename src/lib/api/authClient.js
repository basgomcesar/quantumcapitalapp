const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";
import { authenticateMockUser } from "@/features/auth/mocks/mock-auth";

function persistSession(data, email) {
  Cookies.set("authToken", data.token);
  Cookies.set("userId", String(data.idUsuario));
  Cookies.set("user", data.nombre);
  Cookies.set("apellidos", data.apellido);
  Cookies.set("email", email);
}

/**
 * @param {LoginData} credentials
 * * @returns {Promise<User>}
 */
export async function login({ email, password }) {
  if (process.env.NEXT_PUBLIC_ENABLE_MOCK_LOGIN === "true") {
    const mockUser = authenticateMockUser({ email, password });
    if (mockUser) {
      persistSession(mockUser, email);
      return mockUser;
    }
  }

  const response = await fetch(`${BASE_URL}/Cuentas/Login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password,
    }),
  });

  const textData = await response.text();

  let parsedData;
  try {
    parsedData = textData ? JSON.parse(textData) : {};
  } catch (error) {
    throw new Error(textData || "Error de autenticación");
  }

  if (!response.ok) {
    throw new Error(parsedData?.message || textData || "Error de autenticación");
  }

  const isServer = typeof window === "undefined";

  if (parsedData?.token) {
    if (isServer) {
      parsedData._setCookies = {
        authToken: parsedData.token,
        userId: parsedData.idUsuario,
        user: parsedData.nombre,
        apellidos: parsedData.apellido,
      };
    } else {
      persistSession(parsedData, email);

    }
  }

  return parsedData;
}
