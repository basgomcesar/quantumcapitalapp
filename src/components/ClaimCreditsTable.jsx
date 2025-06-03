// src/components/ClaimCreditsTable.jsx
import React from "react";

export default function ClaimCreditsTable({ creditos = [], onButtonClick }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <article className="flex-1 rounded-xl overflow-hidden shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 p-4">
          Tus Créditos
        </h2>
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-purple-600 text-white rounded-t-xl">
            <tr>
              <th className="py-2 px-3 text-sm font-semibold border-r border-purple-500">
                Fecha de Apertura
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-purple-500">
                Monto Prestado
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-purple-500">
                Fecha de Modificación
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-purple-500">
                Estado de Crédito
              </th>
              <th className="py-2 px-3 text-sm font-semibold">Reclamos</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-700">
            {creditos.length === 0 ? (
              <tr>
                <td colSpan="5" className="py-2 px-3 text-center text-gray-500">
                  No hay créditos para mostrar
                </td>
              </tr>
            ) : (
              creditos.map((credito, index) => (
                <tr
                  key={credito.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="py-2 px-3 border-b border-gray-300">
                    {new Date(credito.fechaApertura).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-3 border-b border-gray-300">
                    ${credito.montoPrestado.toFixed(2)}
                  </td>
                  <td className="py-2 px-3 border-b border-gray-300">
                    {new Date(credito.fechaHoraModificacion).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-3 border-b border-gray-300">
                    {credito.idEstadoCredito}
                  </td>
                  <td className="py-2 px-3 border-b border-gray-300">
                    {/* Mostrar la cantidad de reclamos o sus descripciones */}
                    {credito.reclamos && credito.reclamos.length > 0
                      ? credito.reclamos.map((r) => (
                          <div key={r.id} className="mb-1">
                            {new Date(r.fechaReclamo).toLocaleDateString()}: {r.descripcionReclamo}
                          </div>
                        ))
                      : "Sin reclamos"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </article>

      <button
        className="md:ml-6 bg-purple-600 text-white py-3 px-6 rounded-xl shadow hover:bg-purple-700 transition whitespace-nowrap"
        onClick={onButtonClick}
      >
        Registrar Nuevo Reclamo
      </button>
    </div>
  );
}
