import apiClient from "./apiClient";

const authService = {
    login: async (userData) => {
        return await apiClient.post("/api/Cuentas/login", userData);
    },
    register: async (userData) => {
        return await apiClient.post("/api/Cuentas/registrar", userData);
    },
    resetPassword: async (email) => {
        return await apiClient.post("/api/Cuentas/reset-password", { email });
    }
};