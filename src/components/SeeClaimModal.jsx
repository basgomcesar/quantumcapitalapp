//src/components/SeeClaimModal.jsx
export function SeeClaimModal({ isOpen, onClose, reclamo }) {
  if (!isOpen || !reclamo) return null;

  const estado = reclamo.dictamen === "Pendiente" ? "Pendiente" : "Atendido";

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Fondo oscuro semitransparente */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative bg-white p-6 rounded-3xl shadow-lg w-[520px] z-10">
        <h2 className="text-xl font-semibold mb-6 text-purple-900 text-center">
          Información del Reclamo
        </h2>

        <form>
          <div className="flex flex-col gap-6 mb-6">
            <label className="text-purple-900 font-semibold flex items-center gap-4">
              Fecha del Reclamo:
              <input
                type="text"
                value={
                  reclamo.fechaReclamo
                    ? new Date(reclamo.fechaReclamo).toLocaleDateString()
                    : "N/D"
                }
                readOnly
                className="flex-1 bg-gray-200 rounded-full py-2 px-4 shadow-inner shadow-black/30"
              />
            </label>

            <label className="text-purple-900 font-semibold flex items-center gap-4">
              Estado del Reclamo:
              <input
                type="text"
                value={estado}
                readOnly
                className="flex-1 bg-gray-200 rounded-full py-2 px-4 shadow-inner shadow-black/30"
              />
            </label>
          </div>

          <div className="flex gap-8 mb-8">
            <div className="flex-1">
              <label className="text-purple-900 font-semibold block mb-2">
                Descripción del Reclamo
              </label>
              <textarea
                value={reclamo.descripcionReclamo ?? "Sin descripción"}
                readOnly
                className="w-full bg-gray-200 rounded-3xl p-4 shadow-inner shadow-black/30 resize-none h-24"
              />
            </div>

            <div className="flex-1">
              <label className="text-purple-900 font-semibold block mb-2">
                Dictamen
              </label>
              <textarea
                value={reclamo.dictamen ?? "Sin dictamen"}
                readOnly
                className="w-full bg-gray-200 rounded-3xl p-4 shadow-inner shadow-black/30 resize-none h-24"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-44 py-3 bg-purple-600 text-white rounded-3xl text-lg"
          >
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
}
