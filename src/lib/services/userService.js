import { getCurrentUser } from "../api/userClient";
/**
 * @returns {Promise<User>}
 */
export async function fetchCurrentUser() {
  return getCurrentUser();
}
