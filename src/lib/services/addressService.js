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
    throw error;
  }
}
const addressService = {
  fetchEmploymentAddresses,
  fetchReportedAddresses,
};

export default addressService;
