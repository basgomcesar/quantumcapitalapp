import { getCurrentUser } from "../api/userClient";
/**
 * @returns {Promise<User>}
 */
export async function fetchCurrentUser() {
  try {
    const user = await getCurrentUser();
    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    throw error; // Re-throw the error for further handling
  }

}