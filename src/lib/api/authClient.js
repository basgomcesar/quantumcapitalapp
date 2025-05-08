const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * @param {LoginData} credentials
 * * @returns {Promise<User>}
 */
export async function login(credentials) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Error al iniciar sesión");
  }

  return response.json();
}
