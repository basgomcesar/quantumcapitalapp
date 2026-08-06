import { getLoans } from "../api/loansClient";
/**
 * @returns {Promise<Credito[]>}
 */
export async function fetchLoans() {
  return getLoans();
}
