//src/components/NewClaimModal.jsx

export function NewClaimModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      {/* Fondo oscuro semitransparente */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative bg-white p-6 rounded-xl shadow-lg w-96 z-10">
        <h2 className="text-xl font-semibold mb-4">Registrar Nuevo Reclamo</h2>
        <form>
          <textarea
            placeholder="Describe tu reclamo"
            className="w-full border rounded-xl p-2 mb-4 "
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-xl "
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
