/**
 * Verify a JWT token (mock implementation - replace with your actual auth logic)
 * @param {string} token - The JWT token to verify
 * @returns {Promise<object>} Decoded token payload
 */
export async function verifyToken(token) {
  try {
    if (!token) {
      throw new Error("No token provided");
    } else {
      throw new Error("Invalid token");
    }
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Authentication failed");
  }
}
