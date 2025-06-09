import { getLoans } from "../api/loansClient";
/**
 * @returns {Promise<Credito[]>}
 */
export async function fetchLoans() {
  try {
    const loans = await getLoans();
    return loans;
  } catch (error) {
    console.error("Error fetching loans:", error);
    throw error; // Re-throw the error for further handling
  }

}