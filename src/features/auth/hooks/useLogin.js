"use client";
import { useState } from "react";
import { loginUser as loginService } from "@/lib/services/authService";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (email, password, redirectPath = "/home") => {
    setError(null);
    setLoading(true);

    try {
      const data = await loginService({ email, password });
      if (!data?.token) {
        setError("Credenciales incorrectas. Intenta nuevamente.");
        throw new Error("Credenciales incorrectas. Intenta nuevamente.");
      }
      router.push(redirectPath);
      router.refresh();
      return data;
    } catch (err) {
      setError(err.message || "Error durante el inicio de sesión");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, resetError: () => setError(null) };
}
