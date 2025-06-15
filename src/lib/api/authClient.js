const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
import Cookies from "js-cookie";

/**
 * @param {LoginData} credentials
 * * @returns {Promise<User>}
 */
export async function login({ email, password }) {
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
      Cookies.set("authToken", parsedData.token);
      Cookies.set("userId", parsedData.idUsuario);
      Cookies.set("user", parsedData.nombre);
      Cookies.set("apellidos", parsedData.apellido);

    }
  }

  return parsedData;
}
