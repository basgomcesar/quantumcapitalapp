// src/components/ClaimCreditsTable.jsx
// src/components/ClaimCreditsTable.jsx
// src/components/ClaimCreditsTable.jsx
import React from "react";

const ESTADOS_CREDITO = {
  1: "Corriente",
  2: "Atrasado",
  3: "Sin Recuperar",
  4: "Cerrado",
};

export default function ClaimCreditsTable({
  creditos = [],
  onButtonClick,
  onSelectCredito,
  selectedCreditoId,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <article className="flex-1 rounded-xl overflow-hidden shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 p-4">Tus Créditos</h2>
        <table className="w-full table-fixed border-collapse">
          <thead className="bg-blue-950 text-white rounded-t-xl">
            <tr>
              <th className="py-2 px-3 text-sm font-semibold border-r border-gray-500">
                Fecha de Apertura
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-gray-500">
                Monto Prestado
              </th>
              <th className="py-2 px-3 text-sm font-semibold border-r border-gray-500">
                Fecha de Modificación
              </th>
              <th className="py-2 px-3 text-sm font-semibold">Estado de Crédito</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 text-gray-700">
            {creditos.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-2 px-3 text-center text-gray-500">
                  No hay créditos para mostrar
                </td>
              </tr>
            ) : (
              creditos.map((credito, index) => {
                const isSelected = selectedCreditoId === credito.id;
                return (
                  <tr
                    key={credito.id}
                    onClick={() => onSelectCredito(credito)}
                    className={`cursor-pointer transition ${
                      isSelected
                        ? "bg-blue-100 border-l-4 border-blue-500"
                        : index % 2 === 0
                        ? "bg-gray-100"
                        : "bg-gray-200"
                    } hover:bg-gray-300`}
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
                      {ESTADOS_CREDITO[credito.idEstadoCredito] || "Desconocido"}
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
        onClick={onButtonClick}
      >
        Registrar Nuevo Reclamo
      </button>
    </div>
  );
}

