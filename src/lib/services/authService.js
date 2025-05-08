import { login } from "../api/authClient";
//import {setAuthToken} from "../api/userClient";

/**
 * @param {LoginData} credentials
 * @returns {Promise<User>}
 */
export async function loginUser(credentials) {
  const response = await login(credentials);
  //setAuthToken(response.token);
  return response;
}