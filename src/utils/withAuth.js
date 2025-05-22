"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent) => {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = Cookies.get("authToken");
      if (!token) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, []);

    if (loading) {
      return (
        <div className="flex items-center justify-center h-screen flex-col bg-white">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-70"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
