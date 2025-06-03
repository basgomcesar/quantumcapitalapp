//src/components/SeeClaimModal.jsx
export function SeeClaimModal({ isOpen, onClose }) {
  if (!isOpen) return null;

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
                className="flex-1 bg-gray-200 rounded-full py-2 px-4 shadow-inner shadow-black/30"
                readOnly
              />
            </label>

            <label className="text-purple-900 font-semibold flex items-center gap-4">
              Estado del Reclamo:
              <input
                type="text"
                className="flex-1 bg-gray-200 rounded-full py-2 px-4 shadow-inner shadow-black/30"
                readOnly
              />
            </label>
          </div>

          <div className="flex gap-8 mb-8">
            <div className="flex-1">
              <label className="text-purple-900 font-semibold block mb-2">
                Descripción del Reclamo
              </label>
              <textarea
                className="w-full bg-gray-200 rounded-3xl p-4 shadow-inner shadow-black/30 resize-none h-24"
                readOnly
              />
            </div>

            <div className="flex-1">
              <label className="text-purple-900 font-semibold block mb-2">
                Dictamen
              </label>
              <textarea
                className="w-full bg-gray-200 rounded-3xl p-4 shadow-inner shadow-black/30 resize-none h-24"
                readOnly
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
