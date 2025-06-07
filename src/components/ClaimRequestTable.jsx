// src/components/ClaimRequestTable.jsx
import React from "react";

export default function ClaimRequestTable({
  reclamos = [],
  onButtonClickSeeClaim,
  onSelectClaim,
  selectedClaimId,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <article className="flex-1 rounded-xl overflow-hidden shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 p-4">Tus Reclamos</h2>
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-blue-950 text-white rounded-t-xl">
            <tr>
              <th className="py-2 px-3 text-sm font-semibold border-r border-gray-500">
                Fecha de Reclamo
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-gray-500">
                Fecha de Apertura de Crédito
              </th>
              <th className="py-2 px-3 text-sm font-semibold">
                Estado de Reclamo
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-700">
            {reclamos.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-2 px-3 text-center text-gray-500">
                  No hay reclamos para mostrar
                </td>
              </tr>
            ) : (
              reclamos.map((reclamo, index) => {
                const isSelected = selectedClaimId === reclamo.id;

                const fechaReclamo = reclamo.fechaReclamo
                  ? new Date(reclamo.fechaReclamo).toLocaleDateString()
                  : "N/D";

                const fechaAperturaCredito = reclamo.credito?.fechaApertura
                  ? new Date(reclamo.credito.fechaApertura).toLocaleDateString()
                  : "N/D";

                const estado = reclamo.dictamen === "Pendiente" ? "Pendiente" : "Dictaminado";

                return (
                  <tr
                    key={reclamo.id}
                    onClick={() => onSelectClaim?.(reclamo)}
                    className={`cursor-pointer transition ${
                      isSelected
                        ? "bg-blue-100 border-l-4 border-blue-500"
                        : index % 2 === 0
                        ? "bg-gray-100"
                        : "bg-gray-200"
                    } hover:bg-gray-300`}
                  >
                    <td className="py-2 px-3 border-b border-gray-300">
                      {fechaReclamo}
                    </td>
                    <td className="py-2 px-3 border-b border-gray-300">
                      {fechaAperturaCredito}
                    </td>
                    <td className="py-2 px-3 border-b border-gray-300">
                      {estado}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </article>

      <button
        className="md:ml-6 bg-blue-950 text-white py-3 px-6 rounded-xl shadow hover:bg-gray-500 transition whitespace-nowrap"
        onClick={onButtonClickSeeClaim}
      >
        Seleccionar Reclamo
      </button>
    </div>
  );
}
