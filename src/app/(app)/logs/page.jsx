"use client";

import SystemLogTable from "@/components/SystemLogTable";
import { useLogs } from "@/hooks/useLogs";
import { Skeleton } from "@/components/ui/skeleton";

export default function LogsPage() {
  const { logs, loading, error } = useLogs();

  return (
    <div className="container mx-auto px-4 py-10 md:px-6">
      <div className="mb-8 text-left ">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Bitácora de Actividades
        </h1>
        <p className="text-gray-600 max-w-2xl">
          En esta sección puedes visualizar todas las actividades registradas en
          el sistema. Revisa los detalles de cada actividad, incluyendo la
          fecha, hora y descripción.
        </p>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-4 border p-4 rounded-md shadow-sm"
            >
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="text-red-600 text-center">Error: {error}</p>
      ) : (
        <SystemLogTable bitacoras={logs} />
      )}
    </div>
  );
}
