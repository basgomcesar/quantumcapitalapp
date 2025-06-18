import { getEmploymentAddresses,getReportedAddresses } from "../api/addressClient";

/**
 * @returns {Promise<Array>}
 * @description Obtiene los domicilios de empleo del usuario autenticado.
 */
export async function fetchEmploymentAddresses() {
  try {
    const addresses = await getEmploymentAddresses();
    return addresses;
  } catch (error) {
    console.error("Error fetching employment addresses:", error);
    throw error;
  }
}

/**
 * @returns {Promise<Array>}
 * @description Obtiene los domicilios reportados del usuario autenticado.
 */
export async function fetchReportedAddresses() {
  try {
    const addresses = await getReportedAddresses();
    return addresses;
  } catch (error) {
    console.error("Error fetching reported addresses:", error);
    throw error;
  }
}
export default {
  fetchEmploymentAddresses,
  fetchReportedAddresses,
};