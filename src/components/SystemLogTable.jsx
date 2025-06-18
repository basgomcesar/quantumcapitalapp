// src/components/SystemLogTable.jsx

import React from "react";

export default function SystemLogTable({ bitacoras = [] }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Registro de Actividades</h2>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full table-fixed border-collapse">
          <thead className="bg-blue-950 text-white text-center">
            <tr>
              <th className="py-2 px-4 text-sm font-semibold border-r border-gray-600 w-1/4">
                Crédito o Reclamo
              </th>
              <th className="py-2 px-4 text-sm font-semibold border-r border-gray-600 w-1/4">
                Fecha de Modificación
              </th>
              <th className="py-2 px-4 text-sm font-semibold w-1/2">Descripción</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-700">
            {bitacoras.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
                  No hay actividades registradas
                </td>
              </tr>
            ) : (
              bitacoras.map((log, index) => (
                <tr
                  key={index}
                  className={`transition ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  } hover:bg-gray-300`}
                >
                  <td className="py-2 px-4 border-b border-gray-300 font-medium text-center">
                    {log.tipo}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {new Date(log.fecha).toLocaleString()}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300 text-center">
                    {log.descripcion}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
