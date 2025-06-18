// src/app/logs/page.jsx
"use client";

import SystemLogTable from "@/components/SystemLogTable";
import { useLogs } from "@/hooks/useLogs";
import { FaSpinner } from "react-icons/fa";

export default function LogsPage() {
  const { logs, loading, error } = useLogs();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Bitácora de Actividades
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          En esta sección puedes visualizar todas las actividades registradas en
          el sistema. Revisa los detalles de cada actividad, incluyendo la
          fecha, hora y descripción.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-blue-600 flex items-center justify-center gap-2">
          <FaSpinner className="animate-spin" />
          Cargando bitácora...
        </div>
      ) : error ? (
        <p className="text-red-600 text-center">Error: {error}</p>
      ) : (
        <SystemLogTable bitacoras={logs} />
      )}
    </div>
  );
}
