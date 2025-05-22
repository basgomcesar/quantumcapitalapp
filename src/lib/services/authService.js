import { login } from "../api/authClient";

/**
 * @param {LoginData} credentials
 * @returns {Promise<User>}
 */
export async function loginUser(credentials) {
  const response = await login(credentials);
  return response;
}
