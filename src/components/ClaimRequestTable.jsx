//src/app/components/ClaimRequestTable.jsx
import { SeeClaimModal } from "@/components/SeeClaimModal";

import React from "react";

export default function ClaimRequestTable({ onButtonClick }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <article className="flex-1 rounded-xl overflow-hidden shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 p-4">
          Tus Reclamos
        </h2>
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-purple-600 text-white rounded-t-xl">
            <tr>
              <th className="py-2 px-3 text-sm font-semibold border-r border-purple-500">
                Fecha de Reclamo
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-purple-500">
                Fecha de Apertura de Crédito
              </th>
              <th className="py-2 px-3 text-sm font-semibold">
                Estado de Reclamo
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-700">
            {[...Array(6)].map((_, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
              >
                <td className="py-2 px-3 border-b border-gray-300"></td>
                <td className="py-2 px-3 border-b border-gray-300"></td>
                <td className="py-2 px-3 border-b border-gray-300"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <button
        className="md:ml-6 bg-purple-600 text-white py-3 px-6 rounded-xl shadow hover:bg-purple-700 transition whitespace-nowrap"
        onClick={onButtonClick}
      >
        Seleccionar Reclamo
      </button>
    </div>
  );
}
